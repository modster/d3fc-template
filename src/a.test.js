// src/add.test.js
import { strict as assert } from 'assert'
import add from './add.js'

// This is plain Node code, there's no xv API
export function testAdd() {
    assert.equal(add(1, 2), 3)
}
