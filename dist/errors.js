"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrityMismatchError = exports.SignatureMismatchError = exports.UnverifiableReferenceError = exports.InvalidSchemaError = exports.NoemaError = void 0;
class NoemaError extends Error {
    constructor(code, message, context) {
        super(message);
        this.name = this.constructor.name;
        this.code = code;
        this.context = context;
    }
}
exports.NoemaError = NoemaError;
class InvalidSchemaError extends NoemaError {
    constructor(message, context) {
        super('invalid_schema', message, context);
    }
}
exports.InvalidSchemaError = InvalidSchemaError;
class UnverifiableReferenceError extends NoemaError {
    constructor(message, context) {
        super('unverifiable_reference', message, context);
    }
}
exports.UnverifiableReferenceError = UnverifiableReferenceError;
class SignatureMismatchError extends NoemaError {
    constructor(message, context) {
        super('signature_mismatch', message, context);
    }
}
exports.SignatureMismatchError = SignatureMismatchError;
class IntegrityMismatchError extends NoemaError {
    constructor(message, context) {
        super('integrity_mismatch', message, context);
    }
}
exports.IntegrityMismatchError = IntegrityMismatchError;
