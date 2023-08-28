"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.iterate_metadata_constant = void 0;
const typescript_1 = __importDefault(require("typescript"));
const ArrayUtil_1 = require("../../../utils/ArrayUtil");
const iterate_metadata_constant = (checker) => (options) => (meta, type) => {
    if (!options.constant)
        return false;
    const filter = (flag) => (type.getFlags() & flag) !== 0;
    if (type.isLiteral()) {
        const value = typeof type.value === "object"
            ? BigInt(`${type.value.negative ? "-" : ""}${type.value.base10Value}`)
            : type.value;
        const constant = ArrayUtil_1.ArrayUtil.take(meta.constants, (elem) => elem.type === typeof value, () => ({
            type: typeof value,
            values: [],
        }));
        ArrayUtil_1.ArrayUtil.add(constant.values, value, (a, b) => a === b);
        return true;
    }
    else if (filter(typescript_1.default.TypeFlags.BooleanLiteral)) {
        const value = checker.typeToString(type) === "true";
        const constant = ArrayUtil_1.ArrayUtil.take(meta.constants, (elem) => elem.type === "boolean", () => ({
            type: "boolean",
            values: [],
        }));
        ArrayUtil_1.ArrayUtil.add(constant.values, value, (a, b) => a === b);
        return true;
    }
    return false;
};
exports.iterate_metadata_constant = iterate_metadata_constant;
