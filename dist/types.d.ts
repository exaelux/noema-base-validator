export type JsonPrimitive = string | number | boolean | null;
export type JsonValue = JsonPrimitive | JsonObject | JsonArray;
export type JsonObject = {
    [key: string]: JsonValue;
};
export type JsonArray = JsonValue[];
export type ValidationStage = 'schema' | 'coherence';
export interface CoherenceDetail {
    code: string;
    message: string;
    path: string;
}
export interface ValidationIssue {
    code: string;
    message: string;
    path: string;
}
export interface ValidationResult {
    ok: boolean;
    stage: ValidationStage;
    issues: ValidationIssue[];
    coherenceDetails?: CoherenceDetail[];
}
