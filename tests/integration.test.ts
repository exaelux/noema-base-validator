import test from 'node:test';
import assert from 'node:assert/strict';
import { validateBase } from '../src/baseValidator';

test('integration: well-formed + coherent descriptor passes', () => {
  // Mock IOTA reference (no network usage)
  const input = {
    existence: true,
    meaning: 'opaque',
    visibility_abstract: 'public',
    derived_from: 'iota:testnet:mock:tx:0xdeadbeef'
  };

  const result = validateBase(input);
  assert.equal(result.ok, true);
  assert.equal(result.stage, 'coherence');
  assert.equal(result.issues.length, 0);
});
