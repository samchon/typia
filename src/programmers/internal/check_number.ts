import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";

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

        const conditions: ICheckEntry.ICondition[][] =
            check_numeric_type_tags(project)(atomic)(addition)(input);

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
                : row.some(
                      (tag) =>
                          tag.kind === "type" &&
                          (tag.value === "int32" ||
                              tag.value === "uint32" ||
                              tag.value === "int64" ||
                              tag.value === "uint64" ||
                              tag.value === "float"),
                  ) ||
                  row.some(
                      (tag) =>
                          tag.kind === "multipleOf" &&
                          typeof tag.value === "number",
                  ) ||
                  (row.some(
                      (tag) =>
                          (tag.kind === "minimum" ||
                              tag.kind === "exclusiveMinimum") &&
                          typeof tag.value === "number",
                  ) &&
                      row.some(
                          (tag) =>
                              (tag.kind === "maximum" ||
                                  tag.kind === "exclusiveMaximum") &&
                              typeof tag.value === "number",
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
