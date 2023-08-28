"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.iterate_metadata_atomic = void 0;
const typescript_1 = __importDefault(require("typescript"));
const MetadataAtomic_1 = require("../../../schemas/metadata/MetadataAtomic");
const ArrayUtil_1 = require("../../../utils/ArrayUtil");
const same = (type) => {
    if (type === null)
        return () => false;
    return (flag) => (type.getFlags() & flag) !== 0;
};
const iterate_metadata_atomic = (meta, type) => {
    // PREPARE INTERNAL FUNCTIONS
    const filter = same(type);
    const check = (info) => {
        if (filter(info.atomic) || filter(info.literal)) {
            ArrayUtil_1.ArrayUtil.add(meta.atomics, MetadataAtomic_1.MetadataAtomic.create({ type: info.name, tags: [] }), (x, y) => x.type === y.type);
            return true;
        }
        return false;
    };
    // CHECK EACH TYPES
    return ATOMICS.some((info) => check(info));
};
exports.iterate_metadata_atomic = iterate_metadata_atomic;
const ATOMICS = [
    {
        name: "boolean",
        atomic: typescript_1.default.TypeFlags.BooleanLike,
        literal: typescript_1.default.TypeFlags.BooleanLiteral,
    },
    {
        name: "number",
        atomic: typescript_1.default.TypeFlags.NumberLike,
        literal: typescript_1.default.TypeFlags.NumberLiteral,
    },
    {
        name: "bigint",
        atomic: typescript_1.default.TypeFlags.BigInt,
        literal: typescript_1.default.TypeFlags.BigIntLiteral,
    },
    {
        name: "string",
        atomic: typescript_1.default.TypeFlags.StringLike,
        literal: typescript_1.default.TypeFlags.StringLiteral,
    },
];
