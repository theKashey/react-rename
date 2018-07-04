# react-rename 
[![Build Status](https://secure.travis-ci.org/theKashey/react-rename.svg)](http://travis-ci.org/theKashey/react-rename)
[![version-badge](https://img.shields.io/npm/v/react-rename.svg?style=flat-square)](https://www.npmjs.com/package/react-rename)

Creates a double for React-Component, letting you to specify a new name by your choice.
# Api
```js
import reactRename from 'react-rename';

const Renamed = reactRename(existingComponent, 'Any 🔥 New 🙀 Name');
```

# Example

Rename `powerplug` value to something more readable. 
```js
import {Value} from 'react-powerplug';
import reactRename from 'react-rename';

const Counter = reactRename(Value,'Click Counter #100500')
```
 
# Licence
 MIT
 