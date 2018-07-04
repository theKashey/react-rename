import {ComponentClass} from "react";

declare const process:any;

const indirectEval = process.env.NODE_ENV === 'production' ? () => 0 : eval;

const doesSupportClasses = 1 &&  (function () {
  try {
    if (indirectEval('(function(){ return class TestClassSupport {} })()')) {
      return true;
    }
  } catch (e) {

  }
  return false
})() as boolean;

const ES6ProxyComponentFactory = (
  doesSupportClasses &&
  indirectEval(`(function(InitialParent) {return class ProxyComponent extends InitialParent {}})`)
) as any;

const ES5ProxyComponentFactory = function (InitialParent: ComponentClass) {
  function ProxyComponent(this: any, ...args:any[]) {
    InitialParent.call(this, ...args)
  }

  ProxyComponent.prototype = Object.create(InitialParent.prototype);
  (<any>Object).setPrototypeOf(ProxyComponent, InitialParent);
  return ProxyComponent
} as any;

export function safeDefine(target: any, key: string, descriptor: any) {
  try {
    Object.defineProperty(target, key, descriptor);
  } catch (e) {
    // nop
  }
}

function transferProperties(source: any, target: any) {
  const keys = Object.getOwnPropertyNames(source);

  keys.forEach(key => safeDefine(target, key, Object.getOwnPropertyDescriptor(source, key)))
}

export function classDuplicator<T>(comp: T): T {
  const dupe = (
    doesSupportClasses
      ? ES6ProxyComponentFactory
      : ES5ProxyComponentFactory
  )(comp);

  transferProperties(comp, dupe);
  return comp;
}