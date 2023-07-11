import ts from "typescript";

import { MetadataCollection } from "../factories/MetadataCollection";
import { MetadataFactory } from "../factories/MetadataFactory";

import { Metadata } from "../metadata/Metadata";

import { IProject } from "../transformers/IProject";

import { Atomic } from "../typings/Atomic";

import { ArrayUtil } from "../utils/ArrayUtil";

export namespace LiteralsProgrammer {
    export const write = (project: IProject) => (type: ts.Type) => {
        const meta: Metadata = MetadataFactory.analyze(project.checker)({
            resolve: true,
            constant: true,
            absorb: true,
            validate: (meta) => {
                const length: number =
                    meta.constants
                        .map((c) => c.values.length)
                        .reduce((a, b) => a + b, 0) +
                    meta.atomics.filter((type) => type === "boolean").length;
                if (0 === length) throw new Error(ErrorMessages.NO);
                else if (meta.size() !== length)
                    throw new Error(ErrorMessages.ONLY);
            },
        })(new MetadataCollection())(type);
        const values: Set<Atomic.Type> = new Set([
            ...ArrayUtil.flat<Atomic.Type>(meta.constants.map((c) => c.values)),
            ...(meta.atomics.filter((type) => type === "boolean").length
                ? [true, false]
                : []),
        ]);
        return ts.factory.createAsExpression(
            ts.factory.createArrayLiteralExpression(
                [...values].map((v) =>
                    typeof v === "boolean"
                        ? v
                            ? ts.factory.createTrue()
                            : ts.factory.createFalse()
                        : typeof v === "number"
                        ? ts.factory.createNumericLiteral(v)
                        : typeof v === "bigint"
                        ? ts.factory.createBigIntLiteral(v.toString())
                        : ts.factory.createStringLiteral(v),
                ),
                true,
            ),
            ts.factory.createTypeReferenceNode("const"),
        );
    };
}

enum ErrorMessages {
    NO = "Error on typia.literals(): no literal type found.",
    ONLY = "Error on typia.literals(): only literal type allowed.",
}
