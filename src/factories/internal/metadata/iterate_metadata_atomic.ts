import ts from "typescript";

import { Metadata } from "../../../metadata/Metadata";

import { Atomic } from "../../../typings/Atomic";

import { ArrayUtil } from "../../../utils/ArrayUtil";

const same = (type: ts.Type | null) => {
    if (type === null) return () => false;
    return (flag: ts.TypeFlags) => (type.getFlags() & flag) !== 0;
};

export const iterate_metadata_atomic = (
    meta: Metadata,
    type: ts.Type,
): boolean => {
    // PREPARE INTERNAL FUNCTIONS
    const filter = same(type);
    const check = (info: IAtomicInfo) => {
        if (filter(info.atomic) || filter(info.literal)) {
            ArrayUtil.add(meta.atomics, info.name);
            return true;
        }
        return false;
    };

    // CHECK EACH TYPES
    return ATOMICS.some((info) => check(info));
};

const ATOMICS: IAtomicInfo[] = [
    {
        name: "boolean",
        atomic: ts.TypeFlags.BooleanLike,
        literal: ts.TypeFlags.BooleanLiteral,
    },
    {
        name: "number",
        atomic: ts.TypeFlags.NumberLike,
        literal: ts.TypeFlags.NumberLiteral,
    },
    {
        name: "bigint",
        atomic: ts.TypeFlags.BigInt,
        literal: ts.TypeFlags.BigIntLiteral,
    },
    {
        name: "string",
        atomic: ts.TypeFlags.StringLike,
        literal: ts.TypeFlags.StringLiteral,
    },
];

interface IAtomicInfo {
    name: Atomic.Literal;
    atomic: ts.TypeFlags;
    literal: ts.TypeFlags;
}
