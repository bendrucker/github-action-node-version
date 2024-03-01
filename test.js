import * as assert from 'node:assert/strict'
import nodeVersion from './index.js'

process.env['INPUT_PATH'] = './action.yml'
assert.equal(await nodeVersion(), 20)