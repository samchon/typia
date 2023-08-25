import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";

import { IMetadataCommentTag } from "../../schemas/metadata/IMetadataCommentTag";
import { MetadataAtomic } from "../../schemas/metadata/MetadataAtomic";

import { IProject } from "../../transformers/IProject";

import { ICheckEntry } from "../helpers/ICheckEntry";
import { OptionPredicator } from "../helpers/OptionPredicator";

/**
 * @internal
 */
export const check_number =
    (project: IProject, numeric: boolean) =>
    (atomic: MetadataAtomic) =>
    (metaTags: IMetadataCommentTag[]) =>
    (input: ts.Expression): ICheckEntry => {
        const base = ts.factory.createStrictEquality(
            ts.factory.createStringLiteral("number"),
            ts.factory.createTypeOfExpression(input),
        );
        const addition: ts.Expression | null =
            numeric === true
                ? OptionPredicator.finite(project.options)
                    ? ts.factory.createCallExpression(
                          ts.factory.createIdentifier("Number.isFinite"),
                          undefined,
                          [input],
                      )
                    : OptionPredicator.numeric(project.options)
                    ? ts.factory.createLogicalNot(
                          ts.factory.createCallExpression(
                              ts.factory.createIdentifier("Number.isNaN"),
                              undefined,
                              [input],
                          ),
                      )
                    : null
                : null;

        const ofTypes: ICheckEntry.ICondition[][] =
            check_numeric_type_tags(project)(atomic)(addition)(input);
        const ofComment: ICheckEntry.ICondition[] =
            check_numeric_comment_tags(metaTags)(addition)(input);
        const conditions: ICheckEntry.ICondition[][] = ofTypes.length
            ? ofComment.length
                ? ofTypes.map((row) => [...row, ...ofComment])
                : ofTypes
            : ofComment.length
            ? [ofComment]
            : [];

        return {
            expected: atomic.getName(),
            expression:
                addition !== null && conditions.length === 0
                    ? ts.factory.createLogicalAnd(base, addition)
                    : base,
            conditions,
        };
    };

/**
 * @internal
 */
const check_numeric_type_tags =
    (project: IProject) =>
    (atomic: MetadataAtomic) =>
    (addition: ts.Expression | null) =>
    (input: ts.Expression): ICheckEntry.ICondition[][] =>
        atomic.tags.map((row) => [
            ...(addition === null
                ? []
                : row.some((tag) => tag.kind === "type") ||
                  row.some((tag) => tag.kind === "multipleOf") ||
                  (row.some(
                      (tag) =>
                          tag.kind === "minimum" ||
                          tag.kind === "exclusiveMinimum",
                  ) &&
                      row.some(
                          (tag) =>
                              tag.kind === "maximum" ||
                              tag.kind === "exclusiveMaximum",
                      ))
                ? []
                : [
                      {
                          expected: "number",
                          expression: addition!,
                      },
                  ]),
            ...row.map((tag) => ({
                expected: `number & ${tag.name}`,
                expression: ExpressionFactory.transpile(project.context)(
                    tag.validate,
                )(input),
            })),
        ]);

/**
 * @internal
 */
const check_numeric_comment_tags =
    (metaTags: IMetadataCommentTag[]) =>
    (addition: ts.Expression | null) =>
    (input: ts.Expression): ICheckEntry.ICondition[] => {
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

        return [
            ...(addition === null
                ? []
                : metaTags.some((tag) => tag.kind === "type") ||
                  metaTags.some((tag) => tag.kind === "multipleOf") ||
                  (metaTags.some(
                      (tag) =>
                          tag.kind === "minimum" ||
                          tag.kind === "exclusiveMinimum",
                  ) &&
                      metaTags.some(
                          (tag) =>
                              tag.kind === "maximum" ||
                              tag.kind === "exclusiveMaximum",
                      ))
                ? []
                : [
                      {
                          expected: "number",
                          expression: addition,
                      },
                  ]),
            ...entries.map(([tag, expression]) => ({
                expression,
                expected: `number (@${tag.kind})`,
            })),
        ];
    };
