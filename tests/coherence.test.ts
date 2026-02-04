import test from 'node:test';
import assert from 'node:assert/strict';
import { validateCoherence } from '../src/coherenceValidator';

test('coherence: well-formed descriptor without reference fails coherence', () => {
  const input = {
    existence: true,
    meaning: 'opaque',
    visibility_abstract: 'public'
  };

  const result = validateCoherence(input);
  assert.equal(result.ok, false);
  assert.equal(result.stage, 'coherence');
  assert.ok(result.issues.some((i) => i.code === 'missing_reference'));
});
