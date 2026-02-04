export interface ErrorContext {
    path?: string;
    detail?: string;
}
export declare abstract class NoemaError extends Error {
    readonly code: string;
    readonly context?: ErrorContext;
    constructor(code: string, message: string, context?: ErrorContext);
}
export declare class InvalidSchemaError extends NoemaError {
    constructor(message: string, context?: ErrorContext);
}
export declare class UnverifiableReferenceError extends NoemaError {
    constructor(message: string, context?: ErrorContext);
}
export declare class SignatureMismatchError extends NoemaError {
    constructor(message: string, context?: ErrorContext);
}
export declare class IntegrityMismatchError extends NoemaError {
    constructor(message: string, context?: ErrorContext);
}
