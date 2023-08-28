"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createValidatePrune = exports.createIsPrune = exports.createAssertPrune = exports.createPrune = exports.createValidateClone = exports.createIsClone = exports.createAssertClone = exports.createClone = exports.validatePrune = exports.isPrune = exports.assertPrune = exports.prune = exports.validateClone = exports.isClone = exports.assertClone = exports.clone = exports.literals = void 0;
/* ===========================================================
    MISCELLAENOUS
      - LITERALS
      - CLONE
      - PRUNE
      - FACTORY FUNCTIONS
==============================================================
    LITERALS
----------------------------------------------------------- */
const Namespace_1 = require("./functional/Namespace");
/**
 * @internal
 */
function literals() {
    halt("literals");
}
exports.literals = literals;
/**
 * @internal
 */
function clone() {
    halt("clone");
}
exports.clone = clone;
Object.assign(clone, Namespace_1.Namespace.misc.clone("clone"));
/**
 * @internal
 */
function assertClone() {
    halt("assertClone");
}
exports.assertClone = assertClone;
Object.assign(assertClone, Namespace_1.Namespace.assert("assertClone"));
Object.assign(assertClone, Namespace_1.Namespace.misc.clone("assertClone"));
/**
 * @internal
 */
function isClone() {
    halt("isClone");
}
exports.isClone = isClone;
Object.assign(isClone, Namespace_1.Namespace.is());
Object.assign(isClone, Namespace_1.Namespace.misc.clone("isClone"));
/**
 * @internal
 */
function validateClone() {
    halt("validateClone");
}
exports.validateClone = validateClone;
Object.assign(validateClone, Namespace_1.Namespace.validate());
Object.assign(validateClone, Namespace_1.Namespace.misc.clone("validateClone"));
/**
 * @internal
 */
function prune() {
    halt("prune");
}
exports.prune = prune;
Object.assign(prune, Namespace_1.Namespace.misc.prune("prune"));
/**
 * @internal
 */
function assertPrune() {
    halt("assertPrune");
}
exports.assertPrune = assertPrune;
Object.assign(assertPrune, Namespace_1.Namespace.assert("assertPrune"));
Object.assign(assertPrune, Namespace_1.Namespace.misc.prune("assertPrune"));
/**
 * @internal
 */
function isPrune() {
    halt("isPrune");
}
exports.isPrune = isPrune;
Object.assign(isPrune, Namespace_1.Namespace.is());
Object.assign(isPrune, Namespace_1.Namespace.misc.prune("isPrune"));
/**
 * @internal
 */
function validatePrune() {
    halt("validatePrune");
}
exports.validatePrune = validatePrune;
Object.assign(validatePrune, Namespace_1.Namespace.misc.prune("validatePrune"));
Object.assign(validatePrune, Namespace_1.Namespace.validate());
/**
 * @internal
 */
function createClone() {
    halt("createClone");
}
exports.createClone = createClone;
Object.assign(createClone, clone);
/**
 * @internal
 */
function createAssertClone() {
    halt("createAssertClone");
}
exports.createAssertClone = createAssertClone;
Object.assign(createAssertClone, assertClone);
/**
 * @internal
 */
function createIsClone() {
    halt("createIsClone");
}
exports.createIsClone = createIsClone;
Object.assign(createIsClone, isClone);
/**
 * @internal
 */
function createValidateClone() {
    halt("createValidateClone");
}
exports.createValidateClone = createValidateClone;
Object.assign(createValidateClone, validateClone);
/**
 * @internal
 */
function createPrune() {
    halt("createPrune");
}
exports.createPrune = createPrune;
Object.assign(createPrune, prune);
/**
 * @internal
 */
function createAssertPrune() {
    halt("createAssertPrune");
}
exports.createAssertPrune = createAssertPrune;
Object.assign(createAssertPrune, assertPrune);
/**
 * @internal
 */
function createIsPrune() {
    halt("createIsPrune");
}
exports.createIsPrune = createIsPrune;
Object.assign(createIsPrune, isPrune);
/**
 * @internal
 */
function createValidatePrune() {
    halt("createValidatePrune");
}
exports.createValidatePrune = createValidatePrune;
Object.assign(createValidatePrune, validatePrune);
/**
 * @internal
 */
function halt(name) {
    throw new Error(`Error on typia.misc.${name}(): no transform has been configured. Read and follow https://typia.misc.io/docs/setup please.`);
}
