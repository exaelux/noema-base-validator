import Ajv, { ErrorObject } from 'ajv';
import schema from '../../noema-core-v0/Schemas/noema-core-pure.schema.json';
import { JsonObject, ValidationIssue, ValidationResult } from './types';

const ajv = new Ajv({ allErrors: true, strict: true });
const validate = ajv.compile(schema as JsonObject);

const toIssues = (errors: ErrorObject[] | null | undefined): ValidationIssue[] => {
  if (!errors) return [];
  return errors.map((err) => {
    const path = err.instancePath && err.instancePath.length > 0 ? `$${err.instancePath}` : '$';
    const message = err.message ? err.message : 'Schema validation error';
    return {
      code: err.keyword,
      message,
      path
    };
  });
};

export const validateSchema = (input: unknown): ValidationResult => {
  const ok = validate(input as unknown);
  if (ok) {
    return { ok: true, stage: 'schema', issues: [] };
  }

  const issues = toIssues(validate.errors);
  return { ok: false, stage: 'schema', issues };
};
