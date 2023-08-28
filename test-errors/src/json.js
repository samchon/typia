"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createValidateStringify = exports.createIsStringify = exports.createAssertStringify = exports.createStringify = exports.createValidateParse = exports.createAssertParse = exports.createIsParse = exports.validateStringify = exports.isStringify = exports.assertStringify = exports.stringify = exports.validateParse = exports.isParse = exports.assertParse = exports.application = void 0;
const Namespace_1 = require("./functional/Namespace");
/**
 * @internal
 */
function application() {
    halt("application");
}
exports.application = application;
/**
 * @internal
 */
function assertParse() {
    halt("assertParse");
}
exports.assertParse = assertParse;
Object.assign(assertParse, Namespace_1.Namespace.assert("assertParse"));
/**
 * @internal
 */
function isParse() {
    halt("isParse");
}
exports.isParse = isParse;
Object.assign(isParse, Namespace_1.Namespace.is());
/**
 * @internal
 */
function validateParse() {
    halt("validateParse");
}
exports.validateParse = validateParse;
Object.assign(validateParse, Namespace_1.Namespace.validate());
/**
 * @internal
 */
function stringify() {
    halt("stringify");
}
exports.stringify = stringify;
Object.assign(stringify, Namespace_1.Namespace.json.stringify("stringify"));
/**
 * @internal
 */
function assertStringify() {
    halt("assertStringify");
}
exports.assertStringify = assertStringify;
Object.assign(assertStringify, Namespace_1.Namespace.assert("assertStringify"));
Object.assign(assertStringify, Namespace_1.Namespace.json.stringify("assertStringify"));
/**
 * @internal
 */
function isStringify() {
    halt("isStringify");
}
exports.isStringify = isStringify;
Object.assign(isStringify, Namespace_1.Namespace.is());
Object.assign(isStringify, Namespace_1.Namespace.json.stringify("isStringify"));
/**
 * @internal
 */
function validateStringify() {
    halt("validateStringify");
}
exports.validateStringify = validateStringify;
Object.assign(validateStringify, Namespace_1.Namespace.validate());
Object.assign(validateStringify, Namespace_1.Namespace.json.stringify("validateStringify"));
/**
 * @internal
 */
function createIsParse() {
    halt("createIsParse");
}
exports.createIsParse = createIsParse;
Object.assign(createIsParse, isParse);
/**
 * @internal
 */
function createAssertParse() {
    halt("createAssertParse");
}
exports.createAssertParse = createAssertParse;
Object.assign(createAssertParse, assertParse);
/**
 * @internal
 */
function createValidateParse() {
    halt("createValidateParse");
}
exports.createValidateParse = createValidateParse;
Object.assign(createValidateParse, validateParse);
/**
 * @internal
 */
function createStringify() {
    halt("createStringify");
}
exports.createStringify = createStringify;
Object.assign(createStringify, stringify);
/**
 * @internal
 */
function createAssertStringify() {
    halt("createAssertStringify");
}
exports.createAssertStringify = createAssertStringify;
Object.assign(createAssertStringify, assertStringify);
/**
 * @internal
 */
function createIsStringify() {
    halt("createIsStringify");
}
exports.createIsStringify = createIsStringify;
Object.assign(createIsStringify, isStringify);
/**
 * @internal
 */
function createValidateStringify() {
    halt("createValidateStringify");
}
exports.createValidateStringify = createValidateStringify;
Object.assign(createValidateStringify, validateStringify);
/**
 * @internal
 */
function halt(name) {
    throw new Error(`Error on typia.json.${name}(): no transform has been configured. Read and follow https://typia.json.io/docs/setup please.`);
}
