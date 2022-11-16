import ts from "typescript";

import { Metadata } from "../../metadata/Metadata";

import { ArrayUtil } from "../../utils/ArrayUtil";

import { TypeFactory } from "../TypeFactory";

const same = (type: ts.Type | null) => {
    if (type === null) return () => false;
    return (flag: ts.TypeFlags) => (type.getFlags() & flag) !== 0;
};

export const iterate_metadata_atomic =
    (checker: ts.TypeChecker) =>
    (meta: Metadata, type: ts.Type): boolean => {
        // PREPARE INTERNAL FUNCTIONS
        const filter = same(type);
        const check = (info: IAtomicInfo) => {
            if (
                filter(info.atomic) ||
                filter(info.literal) ||
                (type.symbol?.escapedName === info.class.name &&
                    same(TypeFactory.getReturnType(checker, type, "valueOf"))(
                        info.atomic,
                    ) &&
                    info.class.methods.every((method) =>
                        same(
                            TypeFactory.getReturnType(
                                checker,
                                type,
                                method.name,
                            ),
                        )(method.return),
                    ))
            ) {
                ArrayUtil.add(meta.atomics, info.class.name.toLowerCase());
                return true;
            }
            return false;
        };

        // CHECK EACH TYPES
        return ATOMICS.some((info) => check(info));
    };

const ATOMICS: IAtomicInfo[] = [
    {
        atomic: ts.TypeFlags.BooleanLike,
        literal: ts.TypeFlags.BooleanLiteral,
        class: {
            name: "Boolean",
            methods: [],
        },
    },
    {
        atomic: ts.TypeFlags.NumberLike,
        literal: ts.TypeFlags.NumberLiteral,
        class: {
            name: "Number",
            methods: [
                {
                    name: "toLocaleString",
                    return: ts.TypeFlags.String,
                },
            ],
        },
    },
    {
        atomic: ts.TypeFlags.BigInt,
        literal: ts.TypeFlags.BigIntLiteral,
        class: {
            name: "BigInt",
            methods: [
                {
                    name: "toLocaleString",
                    return: ts.TypeFlags.String,
                },
            ],
        },
    },
    {
        atomic: ts.TypeFlags.StringLike,
        literal: ts.TypeFlags.StringLiteral,
        class: {
            name: "String",
            methods: [
                {
                    name: "toLowerCase",
                    return: ts.TypeFlags.String,
                },
            ],
        },
    },
];

interface IAtomicInfo {
    atomic: ts.TypeFlags;
    literal: ts.TypeFlags;
    class: IClass;
}
interface IClass {
    name: string;
    methods: IMethod[];
}
interface IMethod {
    name: string;
    return: ts.TypeFlags;
}
