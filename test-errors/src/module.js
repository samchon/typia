"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRandom = exports.createValidateEquals = exports.createEquals = exports.createAssertEquals = exports.createValidate = exports.createIs = exports.createAssert = exports.metadata = exports.random = exports.validateEquals = exports.equals = exports.assertEquals = exports.validate = exports.is = exports.assert = exports.tags = exports.protobuf = exports.misc = exports.json = void 0;
const Namespace_1 = require("./functional/Namespace");
exports.json = __importStar(require("./json"));
exports.misc = __importStar(require("./misc"));
exports.protobuf = __importStar(require("./protobuf"));
exports.tags = __importStar(require("./tags"));
__exportStar(require("./schemas/json/IJsonApplication"), exports);
__exportStar(require("./schemas/json/IJsonComponents"), exports);
__exportStar(require("./schemas/json/IJsonSchema"), exports);
__exportStar(require("./IRandomGenerator"), exports);
__exportStar(require("./IValidation"), exports);
__exportStar(require("./Primitive"), exports);
__exportStar(require("./Resolved"), exports);
__exportStar(require("./TypeGuardError"), exports);
/**
 * @internal
 */
function assert() {
    halt("assert");
}
exports.assert = assert;
Object.assign(assert, Namespace_1.Namespace.assert("assert"));
/**
 * @internal
 */
function is() {
    halt("is");
}
exports.is = is;
Object.assign(is, Namespace_1.Namespace.assert("is"));
/**
 * @internal
 */
function validate() {
    halt("validate");
}
exports.validate = validate;
Object.assign(validate, Namespace_1.Namespace.validate());
/**
 * @internal
 */
function assertEquals() {
    halt("assertEquals");
}
exports.assertEquals = assertEquals;
Object.assign(assertEquals, Namespace_1.Namespace.assert("assertEquals"));
/**
 * @internal
 */
function equals() {
    halt("equals");
}
exports.equals = equals;
Object.assign(equals, Namespace_1.Namespace.is());
/**
 * @internal
 */
function validateEquals() {
    halt("validateEquals");
}
exports.validateEquals = validateEquals;
Object.assign(validateEquals, Namespace_1.Namespace.validate());
/**
 * @internal
 */
function random() {
    halt("random");
}
exports.random = random;
Object.assign(random, Namespace_1.Namespace.random());
/**
 * @internal
 */
function metadata() {
    halt("metadata");
}
exports.metadata = metadata;
/**
 * @internal
 */
function createAssert() {
    halt("createAssert");
}
exports.createAssert = createAssert;
Object.assign(createAssert, assert);
/**
 * @internal
 */
function createIs() {
    halt("createIs");
}
exports.createIs = createIs;
Object.assign(createIs, is);
/**
 * @internal
 */
function createValidate() {
    halt("createValidate");
}
exports.createValidate = createValidate;
Object.assign(createValidate, validate);
/**
 * @internal
 */
function createAssertEquals() {
    halt("createAssertEquals");
}
exports.createAssertEquals = createAssertEquals;
Object.assign(createAssertEquals, assertEquals);
/**
 * @internal
 */
function createEquals() {
    halt("createEquals");
}
exports.createEquals = createEquals;
Object.assign(createEquals, equals);
/**
 * @internal
 */
function createValidateEquals() {
    halt("createValidateEquals");
}
exports.createValidateEquals = createValidateEquals;
Object.assign(createValidateEquals, validateEquals);
/**
 * @internal
 */
function createRandom() {
    halt("createRandom");
}
exports.createRandom = createRandom;
Object.assign(createRandom, random);
/**
 * @internal
 */
function halt(name) {
    throw new Error(`Error on typia.${name}(): no transform has been configured. Read and follow https://typia.io/docs/setup please.`);
}
