import { ValidationResult } from './types';
/**
 * Coherence v0 (reference-only):
 * - Does not verify external objects or proofs.
 * - Requires explicit reference placeholders only.
 */
export declare const validateCoherence: (input: unknown) => ValidationResult;
