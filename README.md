Fork off [mongodb-js/electron-squirrel-startup][electron-squirrel-startup]

# electron-squirrel-startup

> Default [Squirrel.Windows][squirrel] event handler for your [Electron][electron] apps.

## Installation

```
npm i electron-squirrel-startup
```

## Usage

To handle the most common commands, such as managing desktop shortcuts, just
add the following to the top of your `main.js` and you're good to go:

```js
if(require('electron-squirrel-startup')) return;
```
For Babel/ES6:

```js
const { app } = require('electron');
// ....
if(require('electron-squirrel-startup')) app.quit();
```

## Read More

### [Handling Squirrel Events][squirrel-events]
### [Squirrel.Windows Commands][squirrel-commands]

[squirrel]: https://github.com/Squirrel/Squirrel.Windows
[electron]: https://github.com/atom/electron
[squirrel-commands]: https://github.com/Squirrel/Squirrel.Windows/blob/master/src/Update/Program.cs#L98
[squirrel-events]: https://github.com/atom/grunt-electron-installer#handling-squirrel-events
[electron-squirrel-startup]: https://github.com/mongodb-js/electron-squirrel-startup
