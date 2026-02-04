# Noema Base Validator

Noema Base Validator is a minimal reference module that validates Noema Core descriptors as a mandatory base for any Noema tool.

## What it validates

- Structural validity against the Noema Core Pure schema.
- Minimal coherence requirements based on explicit references (placeholders only).

## What it does NOT validate

- It does not verify external objects, signatures, or hashes.
- It does not interpret meaning.
- It does not enforce policies or make semantic decisions.
- It does not access or require sensitive content.

This tool validates structure and factual coherence.
It does not interpret meaning or enforce policies.

## Base usage

Use this module as the required entry point for any Noema tool:

```ts
import { validateBase } from './src';

const result = validateBase({
  existence: true,
  meaning: 'opaque',
  visibility_abstract: 'public',
  derived_from: 'iota:testnet:mock:tx:0xdeadbeef'
});

if (!result.ok) {
  console.log(result.stage, result.issues);
}
```

## Notes

- This is a reference implementation.
- Noema Core definitions are maintained in the Noema Core repository.
