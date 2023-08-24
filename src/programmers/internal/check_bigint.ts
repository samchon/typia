import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";

import { IMetadataCommentTag } from "../../schemas/metadata/IMetadataCommentTag";
import { IMetadataTypeTag } from "../../schemas/metadata/IMetadataTypeTag";

import { IProject } from "../../transformers/IProject";

import { ICheckEntry } from "../helpers/ICheckEntry";

/**
 * @internal
 */
export const check_bigint =
    (project: IProject) =>
    (matrix: IMetadataTypeTag[][], metaTags: IMetadataCommentTag[]) =>
    (input: ts.Expression): ICheckEntry => {
        const entries: [IMetadataCommentTag, ts.Expression][] = [];
        for (const tag of metaTags) {
            if (tag.kind === "type" && tag.value === "uint64")
                entries.push([
                    tag,
                    ts.factory.createLessThanEquals(
                        ExpressionFactory.bigint(0),
                        input,
                    ),
                ]);
            else if (tag.kind === "multipleOf")
                entries.push([
                    tag,
                    ts.factory.createStrictEquality(
                        ExpressionFactory.bigint(0),
                        ts.factory.createModulo(
                            input,
                            ExpressionFactory.bigint(tag.value),
                        ),
                    ),
                ]);
            else if (tag.kind === "step") {
                const modulo = ts.factory.createModulo(
                    input,
                    ExpressionFactory.bigint(tag.value),
                );
                const minimum =
                    (metaTags.find(
                        (tag) =>
                            tag.kind === "minimum" ||
                            tag.kind === "exclusiveMinimum",
                    )?.value as number | undefined) ?? undefined;
                entries.push([
                    tag,
                    ts.factory.createStrictEquality(
                        ExpressionFactory.bigint(0),
                        minimum !== undefined
                            ? ts.factory.createSubtract(
                                  modulo,
                                  ExpressionFactory.bigint(minimum),
                              )
                            : modulo,
                    ),
                ]);
            } else if (tag.kind === "minimum")
                entries.push([
                    tag,
                    ts.factory.createLessThanEquals(
                        ExpressionFactory.bigint(tag.value),
                        input,
                    ),
                ]);
            else if (tag.kind === "maximum")
                entries.push([
                    tag,
                    ts.factory.createGreaterThanEquals(
                        ExpressionFactory.bigint(tag.value),
                        input,
                    ),
                ]);
            else if (tag.kind === "exclusiveMinimum")
                entries.push([
                    tag,
                    ts.factory.createLessThan(
                        ExpressionFactory.bigint(tag.value),
                        input,
                    ),
                ]);
            else if (tag.kind === "exclusiveMaximum")
                entries.push([
                    tag,
                    ts.factory.createGreaterThan(
                        ExpressionFactory.bigint(tag.value),
                        input,
                    ),
                ]);
        }
        return {
            expression: is_bigint(project)(matrix)(input),
            tags: matrix.length
                ? []
                : entries.map(([tag, expression]) => ({
                      expected: `bigint (@${tag.kind} ${tag.value})`,
                      expression,
                  })),
        };
    };

const is_bigint =
    (project: IProject) =>
    (matrix: IMetadataTypeTag[][]) =>
    (input: ts.Expression) => {
        // BASIC TYPEOF EXPRESSION
        const conditions: ts.Expression[] = [
            ts.factory.createStrictEquality(
                ts.factory.createStringLiteral("bigint"),
                ts.factory.createTypeOfExpression(input),
            ),
        ];

        // ADJUST TYPED TAGS
        if (matrix.length) {
            const logic: ts.Expression = matrix
                .map((row) =>
                    row
                        .map((tag) =>
                            ExpressionFactory.transpile(project.context)(
                                tag.validate,
                            )(input),
                        )
                        .reduce((a, b) => ts.factory.createLogicalAnd(a, b)),
                )
                .reduce((a, b) => ts.factory.createLogicalOr(a, b));
            conditions.push(logic);
        }

        return conditions.length === 1
            ? conditions[0]!
            : conditions.reduce((x, y) => ts.factory.createLogicalAnd(x, y));
    };
