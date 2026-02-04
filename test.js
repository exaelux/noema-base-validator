const Ajv = require('ajv');
const draft2020 = require('ajv/dist/refs/json-schema-2020-12');

// Runtime-only fix: ensure AJV knows the 2020-12 meta-schema.
const ajv = new Ajv({ strict: false });
ajv.addMetaSchema(draft2020);

const { validateBase } = require('./dist');

const cases = [
  {
    name: 'valid (schema + reference present)',
    input: {
      existence: true,
      meaning: 'opaque',
      visibility_abstract: 'public',
      derived_from: 'iota:testnet:mock:tx:0xdeadbeef'
    }
  },
  {
    name: 'fails coherence (missing derived_from)',
    input: {
      existence: true,
      meaning: 'opaque',
      visibility_abstract: 'public'
    }
  },
  {
    name: 'fails schema',
    input: {
      object_id: 'urn:noema:asset:abc'
    }
  }
];

for (const c of cases) {
  const result = validateBase(c.input);
  console.log(`\n=== ${c.name} ===`);
  console.log(JSON.stringify(result, null, 2));
}
