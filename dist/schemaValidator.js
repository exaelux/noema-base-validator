"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSchema = void 0;
const ajv_1 = __importDefault(require("ajv"));
const noema_core_pure_schema_json_1 = __importDefault(require("../../noema-core-v0/Schemas/noema-core-pure.schema.json"));
const ajv = new ajv_1.default({ allErrors: true, strict: true });
const validate = ajv.compile(noema_core_pure_schema_json_1.default);
const toIssues = (errors) => {
    if (!errors)
        return [];
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
const validateSchema = (input) => {
    const ok = validate(input);
    if (ok) {
        return { ok: true, stage: 'schema', issues: [] };
    }
    const issues = toIssues(validate.errors);
    return { ok: false, stage: 'schema', issues };
};
exports.validateSchema = validateSchema;
