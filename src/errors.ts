export interface ErrorContext {
  path?: string;
  detail?: string;
}

export abstract class NoemaError extends Error {
  readonly code: string;
  readonly context?: ErrorContext;

  constructor(code: string, message: string, context?: ErrorContext) {
    super(message);
    this.name = this.constructor.name;
    this.code = code;
    this.context = context;
  }
}

export class InvalidSchemaError extends NoemaError {
  constructor(message: string, context?: ErrorContext) {
    super('invalid_schema', message, context);
  }
}

export class UnverifiableReferenceError extends NoemaError {
  constructor(message: string, context?: ErrorContext) {
    super('unverifiable_reference', message, context);
  }
}

export class SignatureMismatchError extends NoemaError {
  constructor(message: string, context?: ErrorContext) {
    super('signature_mismatch', message, context);
  }
}

export class IntegrityMismatchError extends NoemaError {
  constructor(message: string, context?: ErrorContext) {
    super('integrity_mismatch', message, context);
  }
}
