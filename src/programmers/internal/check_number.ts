import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";

import { IMetadataCommentTag } from "../../schemas/metadata/IMetadataCommentTag";
import { IMetadataTypeTag } from "../../schemas/metadata/IMetadataTypeTag";

import { IProject } from "../../transformers/IProject";

import { ICheckEntry } from "../helpers/ICheckEntry";
import { OptionPredicator } from "../helpers/OptionPredicator";

/**
 * @internal
 */
export const check_number =
    (project: IProject, numeric: boolean) =>
    (matrix: IMetadataTypeTag[][], metaTags: IMetadataCommentTag[]) =>
    (input: ts.Expression): ICheckEntry => {
        const entries: [IMetadataCommentTag, ts.Expression][] = [];
        for (const mt of metaTags)
            if (mt.kind === "type") {
                // MUST BE INTEGER
                if (
                    mt.value === "int" ||
                    mt.value === "uint" ||
                    mt.value === "int32" ||
                    mt.value === "uint32" ||
                    mt.value === "int64" ||
                    mt.value === "uint64"
                )
                    entries.push([
                        mt,
                        ts.factory.createStrictEquality(
                            ts.factory.createCallExpression(
                                ts.factory.createIdentifier("Math.floor"),
                                undefined,
                                [input],
                            ),
                            input,
                        ),
                    ]);
                // GREATER THAN OR EQUAL TO ZERO
                if (
                    mt.value === "uint" ||
                    mt.value === "uint32" ||
                    mt.value === "uint64"
                )
                    entries.push([
                        mt,
                        ts.factory.createLessThanEquals(
                            ts.factory.createNumericLiteral(0),
                            input,
                        ),
                    ]);
                // RANGE LIMIT
                if (mt.value === "uint" || mt.value === "uint32")
                    entries.push([
                        mt,
                        ts.factory.createLessThanEquals(
                            input,
                            ts.factory.createNumericLiteral(4294967295),
                        ),
                    ]);
                else if (mt.value === "uint64")
                    entries.push([
                        mt,
                        ts.factory.createLessThanEquals(
                            input,
                            ts.factory.createNumericLiteral(
                                18446744073709551615,
                            ),
                        ),
                    ]);
                else if (mt.value === "int64")
                    entries.push([
                        mt,
                        ts.factory.createLogicalAnd(
                            ts.factory.createLessThanEquals(
                                ts.factory.createNumericLiteral(
                                    -9223372036854775808,
                                ),
                                input,
                            ),
                            ts.factory.createLessThanEquals(
                                input,
                                ts.factory.createNumericLiteral(
                                    9223372036854775807,
                                ),
                            ),
                        ),
                    ]);
                else if (mt.value === "int" || mt.value === "int32")
                    entries.push([
                        mt,
                        ts.factory.createLogicalAnd(
                            ts.factory.createLessThanEquals(
                                ts.factory.createNumericLiteral(-2147483648),
                                input,
                            ),
                            ts.factory.createLessThanEquals(
                                input,
                                ts.factory.createNumericLiteral(2147483647),
                            ),
                        ),
                    ]);
                else if (mt.value === "float")
                    entries.push([
                        mt,
                        ts.factory.createLogicalAnd(
                            ts.factory.createLessThanEquals(
                                ts.factory.createNumericLiteral(
                                    -1.175494351e38,
                                ),
                                input,
                            ),
                            ts.factory.createLessThanEquals(
                                input,
                                ts.factory.createNumericLiteral(3.4028235e38),
                            ),
                        ),
                    ]);
            } else if (mt.kind === "multipleOf")
                entries.push([
                    mt,
                    ts.factory.createStrictEquality(
                        ts.factory.createNumericLiteral(0),
                        ts.factory.createModulo(
                            input,
                            ts.factory.createNumericLiteral(mt.value),
                        ),
                    ),
                ]);
            else if (mt.kind === "step") {
                const modulo = ts.factory.createModulo(
                    input,
                    ts.factory.createNumericLiteral(mt.value),
                );
                const minimum =
                    (metaTags.find(
                        (tag) =>
                            tag.kind === "minimum" ||
                            tag.kind === "exclusiveMinimum",
                    )?.value as number | undefined) ?? undefined;
                entries.push([
                    mt,
                    ts.factory.createStrictEquality(
                        ts.factory.createNumericLiteral(0),
                        minimum !== undefined
                            ? ts.factory.createSubtract(
                                  modulo,
                                  ts.factory.createNumericLiteral(minimum),
                              )
                            : modulo,
                    ),
                ]);
            } else if (mt.kind === "minimum")
                entries.push([
                    mt,
                    ts.factory.createLessThanEquals(
                        ts.factory.createNumericLiteral(mt.value),
                        input,
                    ),
                ]);
            else if (mt.kind === "maximum")
                entries.push([
                    mt,
                    ts.factory.createGreaterThanEquals(
                        ts.factory.createNumericLiteral(mt.value),
                        input,
                    ),
                ]);
            else if (mt.kind === "exclusiveMinimum")
                entries.push([
                    mt,
                    ts.factory.createLessThan(
                        ts.factory.createNumericLiteral(mt.value),
                        input,
                    ),
                ]);
            else if (mt.kind === "exclusiveMaximum")
                entries.push([
                    mt,
                    ts.factory.createGreaterThan(
                        ts.factory.createNumericLiteral(mt.value),
                        input,
                    ),
                ]);

        return {
            expression: is_number(project, numeric)(matrix, metaTags)(input),
            tags: matrix.length
                ? []
                : entries.map(([tag, expression]) => ({
                      expected: `number (@${tag.kind} ${tag.value})`,
                      expression,
                  })),
        };
    };

/**
 * @internal
 */
const is_number =
    (project: IProject, numeric: boolean) =>
    (matrix: IMetadataTypeTag[][], metaTags: IMetadataCommentTag[]) =>
    (input: ts.Expression) => {
        // TYPEOF STATEMENT
        const conditions: ts.Expression[] = [
            ts.factory.createStrictEquality(
                ts.factory.createStringLiteral("number"),
                ts.factory.createTypeOfExpression(input),
            ),
        ];

        // CHECK FINITE AND NAN
        const ranged: boolean =
            !!metaTags.find(
                (tag) =>
                    tag.kind === "minimum" || tag.kind === "exclusiveMinimum",
            ) &&
            !!metaTags.find(
                (tag) =>
                    tag.kind === "maximum" || tag.kind === "exclusiveMaximum",
            ) &&
            !!metaTags.find((tag) => tag.kind === "type") &&
            !matrix.every((row) => row.some((tag) => tag.kind === "type")) &&
            !matrix.every(
                (row) =>
                    row.some(
                        (tag) =>
                            tag.kind === "minimum" ||
                            tag.kind === "exclusiveMinimum",
                    ) &&
                    row.some(
                        (tag) =>
                            tag.kind === "maximum" ||
                            tag.kind === "exclusiveMaximum",
                    ),
            );

        if (numeric === true && ranged === false)
            if (OptionPredicator.finite(project.options))
                conditions.push(
                    ts.factory.createCallExpression(
                        ts.factory.createIdentifier("Number.isFinite"),
                        undefined,
                        [input],
                    ),
                );
            else if (
                OptionPredicator.numeric(project.options) &&
                ranged === false
            )
                conditions.push(
                    ts.factory.createLogicalNot(
                        ts.factory.createCallExpression(
                            ts.factory.createIdentifier("Number.isNaN"),
                            undefined,
                            [input],
                        ),
                    ),
                );

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

        // COMBINATE
        return conditions.length === 1
            ? conditions[0]!
            : conditions.reduce((x, y) => ts.factory.createLogicalAnd(x, y));
    };
