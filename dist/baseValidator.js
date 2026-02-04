"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBase = void 0;
const schemaValidator_1 = require("./schemaValidator");
const coherenceValidator_1 = require("./coherenceValidator");
const validateBase = (input) => {
    const schemaResult = (0, schemaValidator_1.validateSchema)(input);
    if (!schemaResult.ok) {
        return schemaResult;
    }
    const coherenceResult = (0, coherenceValidator_1.validateCoherence)(input);
    if (!coherenceResult.ok) {
        return coherenceResult;
    }
    return { ok: true, stage: 'coherence', issues: [] };
};
exports.validateBase = validateBase;
