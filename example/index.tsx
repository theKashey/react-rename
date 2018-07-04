import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './app';
import {reactRename} from '../src';

const RApp = reactRename(App,'🔥🔥🔥🔥⚛️');

ReactDOM.render(<RApp />, document.getElementById('app'));
