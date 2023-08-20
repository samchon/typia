import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";
import { MetadataCollection } from "../../factories/MetadataCollection";
import { MetadataFactory } from "../../factories/MetadataFactory";

import { Metadata } from "../../schemas/metadata/Metadata";

import { IProject } from "../../transformers/IProject";

import { Atomic } from "../../typings/Atomic";

import { ArrayUtil } from "../../utils/ArrayUtil";

export namespace MiscLiteralsProgrammer {
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
        const values: Set<Atomic.Type | null> = new Set([
            ...ArrayUtil.flat<Atomic.Type>(meta.constants.map((c) => c.values)),
            ...(meta.atomics.filter((type) => type === "boolean").length
                ? [true, false]
                : []),
            ...(meta.nullable ? [null] : []),
        ]);
        return ts.factory.createAsExpression(
            ts.factory.createArrayLiteralExpression(
                [...values].map((v) =>
                    v === null
                        ? ts.factory.createNull()
                        : typeof v === "boolean"
                        ? v
                            ? ts.factory.createTrue()
                            : ts.factory.createFalse()
                        : typeof v === "number"
                        ? ts.factory.createNumericLiteral(v)
                        : typeof v === "bigint"
                        ? ExpressionFactory.bigint(Number(v))
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
