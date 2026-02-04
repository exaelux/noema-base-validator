import { validateSchema } from './schemaValidator';
import { validateCoherence } from './coherenceValidator';
import { ValidationResult } from './types';

export const validateBase = (input: unknown): ValidationResult => {
  const schemaResult = validateSchema(input);
  if (!schemaResult.ok) {
    return schemaResult;
  }

  const coherenceResult = validateCoherence(input);
  if (!coherenceResult.ok) {
    return coherenceResult;
  }

  return { ok: true, stage: 'coherence', issues: [] };
};
