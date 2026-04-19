"use strict";
/* @typia-ttsc-rewritten */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate_user = exports.validate_string = exports.assert_user = exports.assert_string = void 0;
const assert_string = (input) => ((input) => ("string" === typeof input) ? input : (() => { const __err = new Error("typia.assert: expected string, got " + typeof input + " " + JSON.stringify(input)); __err.name = "TypeGuardError"; throw __err; })())(input);
exports.assert_string = assert_string;
const assert_user = (input) => ((input) => (("object" === typeof input && null !== input && false === Array.isArray(input) && ("number" === typeof input.age && 0 <= input.age && input.age <= 150) && "string" === typeof input.id && "string" === typeof input.name)) ? input : (() => { const __err = new Error("typia.assert: expected User, got " + typeof input + " " + JSON.stringify(input)); __err.name = "TypeGuardError"; throw __err; })())(input);
exports.assert_user = assert_user;
const validate_string = (input) => ((input) => { const __ok = ("string" === typeof input); return __ok ? { success: true, data: input, errors: [] } : { success: false, data: input, errors: [{ path: "$input", expected: "string", value: input }] }; })(input);
exports.validate_string = validate_string;
const validate_user = (input) => ((input) => { const __ok = (("object" === typeof input && null !== input && false === Array.isArray(input) && ("number" === typeof input.age && 0 <= input.age && input.age <= 150) && "string" === typeof input.id && "string" === typeof input.name)); return __ok ? { success: true, data: input, errors: [] } : { success: false, data: input, errors: [{ path: "$input", expected: "User", value: input }] }; })(input);
exports.validate_user = validate_user;
