"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createValidateEncode = exports.createAssertEncode = exports.createIsEncode = exports.createEncode = exports.createValidateDecode = exports.createAssertDecode = exports.createIsDecode = exports.createDecode = exports.validateEncode = exports.isEncode = exports.assertEncode = exports.encode = exports.validateDecode = exports.isDecode = exports.assertDecode = exports.decode = exports.message = void 0;
const Namespace_1 = require("./functional/Namespace");
/**
 * @internal
 */
function message() {
    halt("message");
}
exports.message = message;
/**
 * @internal
 */
function decode() {
    halt("decode");
}
exports.decode = decode;
Object.assign(decode, Namespace_1.Namespace.protobuf.decode("decode"));
/**
 * @internal
 */
function assertDecode() {
    halt("assertDecode");
}
exports.assertDecode = assertDecode;
Object.assign(assertDecode, Namespace_1.Namespace.assert("assertDecode"));
Object.assign(assertDecode, Namespace_1.Namespace.protobuf.decode("assertDecode"));
/**
 * @internal
 */
function isDecode() {
    halt("isDecode");
}
exports.isDecode = isDecode;
Object.assign(isDecode, Namespace_1.Namespace.is());
Object.assign(isDecode, Namespace_1.Namespace.protobuf.decode("isDecode"));
/**
 * @internal
 */
function validateDecode() {
    halt("validateDecode");
}
exports.validateDecode = validateDecode;
Object.assign(validateDecode, Namespace_1.Namespace.validate());
Object.assign(validateDecode, Namespace_1.Namespace.protobuf.decode("validateDecode"));
/**
 * @internal
 */
function encode() {
    halt("encode");
}
exports.encode = encode;
Object.assign(encode, Namespace_1.Namespace.protobuf.encode("encode"));
/**
 * @internal
 */
function assertEncode() {
    halt("assertEncode");
}
exports.assertEncode = assertEncode;
Object.assign(assertEncode, Namespace_1.Namespace.assert("assertEncode"));
Object.assign(assertEncode, Namespace_1.Namespace.protobuf.encode("assertEncode"));
/**
 * @internal
 */
function isEncode() {
    halt("isEncode");
}
exports.isEncode = isEncode;
Object.assign(isEncode, Namespace_1.Namespace.is());
Object.assign(isEncode, Namespace_1.Namespace.protobuf.encode("isEncode"));
/**
 * @internal
 */
function validateEncode() {
    halt("validateEncode");
}
exports.validateEncode = validateEncode;
Object.assign(validateEncode, Namespace_1.Namespace.validate());
Object.assign(validateEncode, Namespace_1.Namespace.protobuf.encode("validateEncode"));
/**
 * @internal
 */
function createDecode() {
    halt("createDecode");
}
exports.createDecode = createDecode;
Object.assign(createDecode, Namespace_1.Namespace.protobuf.decode("createDecode"));
/**
 * @internal
 */
function createIsDecode() {
    halt("createIsDecode");
}
exports.createIsDecode = createIsDecode;
Object.assign(createIsDecode, Namespace_1.Namespace.is());
Object.assign(createIsDecode, Namespace_1.Namespace.protobuf.decode("createIsDecode"));
/**
 * @internal
 */
function createAssertDecode() {
    halt("createAssertDecode");
}
exports.createAssertDecode = createAssertDecode;
Object.assign(createAssertDecode, Namespace_1.Namespace.assert("createAssertDecode"));
Object.assign(createAssertDecode, Namespace_1.Namespace.protobuf.decode("createAssertDecode"));
/**
 * @internal
 */
function createValidateDecode() {
    halt("createValidateDecode");
}
exports.createValidateDecode = createValidateDecode;
Object.assign(createValidateDecode, Namespace_1.Namespace.validate());
Object.assign(createValidateDecode, Namespace_1.Namespace.protobuf.decode("createValidateDecode"));
/**
 * @internal
 */
function createEncode() {
    halt("createEncode");
}
exports.createEncode = createEncode;
Object.assign(createEncode, Namespace_1.Namespace.protobuf.encode("createEncode"));
/**
 * @internal
 */
function createIsEncode() {
    halt("createIsEncode");
}
exports.createIsEncode = createIsEncode;
Object.assign(createIsEncode, Namespace_1.Namespace.is());
Object.assign(createIsEncode, Namespace_1.Namespace.protobuf.encode("createIsEncode"));
/**
 * @internal
 */
function createAssertEncode() {
    halt("createAssertEncode");
}
exports.createAssertEncode = createAssertEncode;
Object.assign(createAssertEncode, Namespace_1.Namespace.assert("createAssertEncode"));
Object.assign(createAssertEncode, Namespace_1.Namespace.protobuf.encode("createAssertEncode"));
/**
 * @internal
 */
function createValidateEncode() {
    halt("createValidateEncode");
}
exports.createValidateEncode = createValidateEncode;
Object.assign(createValidateEncode, Namespace_1.Namespace.validate());
Object.assign(createValidateEncode, Namespace_1.Namespace.protobuf.encode("createValidateEncode"));
/**
 * @internal
 */
function halt(name) {
    throw new Error(`Error on typia.protobuf.${name}(): no transform has been configured. Read and follow https://typia.io/docs/setup please.`);
}
