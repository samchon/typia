import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";
import { MetadataCollection } from "../../factories/MetadataCollection";
import { MetadataFactory } from "../../factories/MetadataFactory";

import { Metadata } from "../../schemas/metadata/Metadata";

import { IProject } from "../../transformers/IProject";
import { TransformerError } from "../../transformers/TransformerError";

import { Atomic } from "../../typings/Atomic";

import { ArrayUtil } from "../../utils/ArrayUtil";

export namespace MiscLiteralsProgrammer {
    export const write = (project: IProject) => (type: ts.Type) => {
        const result = MetadataFactory.analyze(project.checker)({
            escape: true,
            constant: true,
            absorb: true,
            validate: (meta) => {
                const length: number =
                    meta.constants
                        .map((c) => c.values.length)
                        .reduce((a, b) => a + b, 0) +
                    meta.atomics.filter((a) => a.type === "boolean").length;
                if (0 === length) return [ErrorMessages.NO];
                else if (meta.size() !== length) return [ErrorMessages.ONLY];
                return [];
            },
        })(new MetadataCollection())(type);
        if (result.success === false)
            throw TransformerError.from(`typia.misc.literals`)(result.errors);

        const meta: Metadata = result.data;
        const values: Set<Atomic.Type | null> = new Set([
            ...ArrayUtil.flat<Atomic.Type>(meta.constants.map((c) => c.values)),
            ...(meta.atomics.filter((a) => a.type === "boolean").length
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
    NO = "no constant literal type found.",
    ONLY = "only constant literal types are allowed.",
}
