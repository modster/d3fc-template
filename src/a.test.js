// src/add.test.js
const assert = require('assert');
const add = require('./add.js');

// This is plain Node code, there's no xv API
const testAdd = () => {
    assert.equal(add(1, 2), 3)
};
