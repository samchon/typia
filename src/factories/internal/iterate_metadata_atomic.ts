import ts from "typescript";

import { Metadata } from "../../metadata/Metadata";

import { ArrayUtil } from "../../utils/ArrayUtil";

export const iterate_metadata_atomic = (
    meta: Metadata,
    type: ts.Type,
): boolean => {
    // PREPARE INTERNAL FUNCTIONS
    const filter = (flag: ts.TypeFlags) => (type.getFlags() & flag) !== 0;
    const check = (
        flag: ts.TypeFlags,
        literal: ts.TypeFlags,
        className: string,
    ) => {
        if (
            filter(flag) ||
            filter(literal) ||
            type.symbol?.escapedName === className
        ) {
            ArrayUtil.add(meta.atomics, className.toLowerCase());
            return true;
        }
        return false;
    };

    // CHECK EACH TYPES
    for (const [flag, literal, className] of ATOMICS)
        if (check(flag, literal, className) === true) {
            return true;
        }
    return false;
};

const ATOMICS: [ts.TypeFlags, ts.TypeFlags, string][] = [
    [ts.TypeFlags.BooleanLike, ts.TypeFlags.BooleanLiteral, "Boolean"],
    [ts.TypeFlags.NumberLike, ts.TypeFlags.NumberLiteral, "Number"],
    [ts.TypeFlags.BigIntLike, ts.TypeFlags.BigIntLiteral, "BigInt"],
    [ts.TypeFlags.StringLike, ts.TypeFlags.StringLiteral, "String"],
];
