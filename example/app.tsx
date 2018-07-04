import * as React from 'react';
import {Component} from 'react';
import {AppWrapper} from './styled';
import {GHCorner} from 'react-gh-corner';
import {reactRename} from '../src';

export interface AppState {
  
}
const repoUrl = 'https://github.com/zzarcon/';

const SApp:React.SFC = ({children}) => <AppWrapper>{children}</AppWrapper>

const RApp = reactRename(SApp,'🔥⚛️');
const RGHCorner = reactRename(GHCorner,'🐙◥');

export default class App extends Component <{}, AppState> {
  state: AppState = {
    
  }

  render() {
    return (
      <RApp>
        <RGHCorner href={repoUrl} />
        Example!
      </RApp>
    )
  }
}