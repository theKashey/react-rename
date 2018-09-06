import * as React from 'react';
import {Component} from 'react';
import {AppWrapper} from './styled';
import {GHCorner} from 'react-gh-corner';
import {reactRename} from '../src';

export interface AppState {

}

console.log('main');

const repoUrl = 'https://github.com/zzarcon/';

const context = React.createContext("test");

const RProvider = reactRename(context.Provider, "PRO!");
const RConsumer = reactRename(context.Consumer, "CONS!");

const SApp: React.SFC = ({children}) => <AppWrapper>{children}</AppWrapper>

const RApp = reactRename(SApp, '🔥⚛️');
const RGHCorner = reactRename(GHCorner, '🐙◥');

export default class App extends Component <{}, AppState> {
  state: AppState = {}

  render() {
    return (
      <RProvider value={"YEES"}>
        <RApp>
          <RConsumer>
            {(v:any) => <div>{v}</div>}
          </RConsumer>
          <RGHCorner href={repoUrl}/>
          Example!
        </RApp>
      </RProvider>
    )
  }
}