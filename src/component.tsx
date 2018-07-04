import * as React from 'react';
import {Component} from 'react';
import functionDouble from 'function-double';
import {classDuplicator, safeDefine} from "./classUtils";

const isReactClass = (component: React.ComponentType) => Component.isPrototypeOf(component);

export function rename<T extends React.ComponentType<any>>(target: T, newName: string): T {
  if (typeof target !== 'function') {
    return target;
  }
  const dupe = (
    isReactClass(target)
      ? classDuplicator(target)
      : functionDouble((...args: any[]) => (target as any)(...args), target)
  );

  safeDefine(dupe, 'name', {
    configurable: true,
    writable: false,
    enumerable: false,
    value: newName
  });

  return dupe;
}