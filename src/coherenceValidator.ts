import { JsonObject, ValidationIssue, ValidationResult, CoherenceDetail } from './types';

const isRecord = (value: unknown): value is JsonObject =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

const isNonEmptyString = (value: unknown): value is string =>
  typeof value === 'string' && value.trim().length > 0;

const isNonEmptyStringArray = (value: unknown): value is string[] =>
  Array.isArray(value) && value.length > 0 && value.every(isNonEmptyString);

/**
 * Coherence v0 (reference-only):
 * - Does not verify external objects or proofs.
 * - Requires explicit reference placeholders only.
 */
export const validateCoherence = (input: unknown): ValidationResult => {
  const issues: ValidationIssue[] = [];
  const coherenceDetails: CoherenceDetail[] = [];

  if (!isRecord(input)) {
    issues.push({
      code: 'type',
      message: 'Expected a JSON object at root',
      path: '$'
    });
    coherenceDetails.push({
      code: 'coherence.root_type',
      message: 'Root must be an object for coherence checks',
      path: '$'
    });
    return { ok: false, stage: 'coherence', issues, coherenceDetails };
  }

  const derived = (input as JsonObject).derived_from;

  const hasReference =
    isNonEmptyString(derived) || isNonEmptyStringArray(derived);

  if (!hasReference) {
    issues.push({
      code: 'missing_reference',
      message: 'Missing explicit reference placeholder: derived_from is required for coherence',
      path: '$.derived_from'
    });
    coherenceDetails.push({
      code: 'coherence.reference.required',
      message: 'Coherence requires explicit reference placeholder in derived_from',
      path: '$.derived_from'
    });
  }

  return {
    ok: issues.length === 0,
    stage: 'coherence',
    issues,
    coherenceDetails: coherenceDetails.length > 0 ? coherenceDetails : undefined
  };
};
