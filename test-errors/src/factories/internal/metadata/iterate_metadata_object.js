"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.iterate_metadata_object = void 0;
const typescript_1 = __importDefault(require("typescript"));
const ArrayUtil_1 = require("../../../utils/ArrayUtil");
const emplace_metadata_object_1 = require("./emplace_metadata_object");
const iterate_metadata_object = (checker) => (options) => (collection) => (errors) => (meta, type, ensure = false) => {
    if (ensure === false) {
        const filter = (flag) => (type.getFlags() & flag) !== 0;
        if (!filter(typescript_1.default.TypeFlags.Object) &&
            !type.isIntersection() &&
            type.intrinsicName !== "object")
            return false;
        // else if (
        //     type.isIntersection() &&
        //     !type.types.every(
        //         (child) =>
        //             (child.getFlags() & ts.TypeFlags.Object) !== 0 &&
        //             !checker.isArrayType(child) &&
        //             !checker.isTupleType(child),
        //     )
        // )
        //     return false;
    }
    const obj = (0, emplace_metadata_object_1.emplace_metadata_object)(checker)(options)(collection)(errors)(type, meta.nullable);
    ArrayUtil_1.ArrayUtil.add(meta.objects, obj, (elem) => elem.name === obj.name);
    return true;
};
exports.iterate_metadata_object = iterate_metadata_object;
