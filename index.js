const { spawn } = require('child_process');
const debug = require('debug')('electron-squirrel-startup');
const { app } = require('electron');
const { existsSync } = require('fs');
const { homedir } = require('os');
const path = require('path');

const shortcutExists = () => {
  const name = 'Blitz';
  return existsSync(path.join(homedir(), 'desktop', `${name}.lnk`));
};

const run = (args, done) => {
  const updateExe = path.resolve(
    path.dirname(process.execPath),
    '..',
    'Update.exe'
  );
  debug('Spawning `%s` with args `%s`', updateExe, args);
  spawn(updateExe, args, {
    detached: true
  }).on('close', done);
};

const check = () => {
  if (process.platform === 'win32') {
    const cmd = process.argv[1];
    debug('processing squirrel command `%s`', cmd);
    const target = path.basename(process.execPath);

    if (cmd === '--squirrel-install') {
      run(['--createShortcut=' + target + ''], app.quit);
      return { quit: true, event: 'install' };
    }
    if (cmd === '--squirrel-updated') {
      if (shortcutExists()) {
        run(['--createShortcut=' + target + ''], () => {});
      }
      return { quit: true, event: 'updated' };
    }
    if (cmd === '--squirrel-uninstall') {
      run(['--removeShortcut=' + target + ''], () => {});
      return { quit: true, event: 'uninstall' };
    }
    if (cmd === '--squirrel-obsolete') {
      app.quit();
      return { quit: true, event: 'obsolete' };
    }
  }
  return { quit: false, event: 'none' };
};

module.exports = check;
