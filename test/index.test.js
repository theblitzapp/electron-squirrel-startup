/* eslint-disable func-names */
/* eslint-disable no-undef */
const assert = require('assert');
const startup = require('../');

describe('electron-squirrel-startup', () => {
  it('should return false by default', () => {
    console.log(startup())
    assert.deepEqual(startup(), { quit: false, event: 'none' });
  });
});
