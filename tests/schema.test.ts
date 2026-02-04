import test from 'node:test';
import assert from 'node:assert/strict';
import { validateSchema } from '../src/schemaValidator';

test('schema: malformed descriptor fails schema validation', () => {
  const input = {
    // missing required fields: existence, meaning, visibility_abstract
    object_id: 'urn:noema:asset:abc'
  };

  const result = validateSchema(input);
  assert.equal(result.ok, false);
  assert.equal(result.stage, 'schema');
  assert.ok(result.issues.length > 0);
});
