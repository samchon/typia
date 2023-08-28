"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AtomicPredicator = void 0;
const ArrayUtil_1 = require("../../utils/ArrayUtil");
var AtomicPredicator;
(function (AtomicPredicator) {
    AtomicPredicator.constant = (meta) => (name) => !ArrayUtil_1.ArrayUtil.has(meta.atomics, (a) => a.type === name) &&
        !ArrayUtil_1.ArrayUtil.has(meta.natives, (native) => native.toLowerCase() === name);
    AtomicPredicator.atomic = (meta) => (name) => !ArrayUtil_1.ArrayUtil.has(meta.natives, (native) => native.toLowerCase() === name);
    AtomicPredicator.native = (name) => LIKE.has(name.toLowerCase());
    AtomicPredicator.template = (meta) => !ArrayUtil_1.ArrayUtil.has(meta.atomics, (a) => a.type === "string");
})(AtomicPredicator || (exports.AtomicPredicator = AtomicPredicator = {}));
const LIKE = new Set(["boolean", "number", "string"]);
