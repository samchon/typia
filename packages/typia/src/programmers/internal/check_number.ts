import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";

import { MetadataAtomic } from "../../schemas/metadata/MetadataAtomic";

import { ITypiaContext } from "../../transformers/ITypiaContext";

import { ICheckEntry } from "../helpers/ICheckEntry";
import { OptionPredicator } from "../helpers/OptionPredicator";

/** @internal */
export const check_number = (props: {
  numeric: boolean;
  context: ITypiaContext;
  atomic: MetadataAtomic;
  input: ts.Expression;
}): ICheckEntry => {
  const base: ts.BinaryExpression = ts.factory.createStrictEquality(
    ts.factory.createStringLiteral("number"),
    ts.factory.createTypeOfExpression(props.input),
  );
  const addition: ts.Expression | null =
    props.numeric === true
      ? OptionPredicator.finite(props.context.options)
        ? ts.factory.createCallExpression(
            ts.factory.createIdentifier("Number.isFinite"),
            undefined,
            [props.input],
          )
        : OptionPredicator.numeric(props.context.options)
          ? ts.factory.createLogicalNot(
              ts.factory.createCallExpression(
                ts.factory.createIdentifier("Number.isNaN"),
                undefined,
                [props.input],
              ),
            )
          : null
      : null;
  const conditions: ICheckEntry.ICondition[][] = check_numeric_type_tags({
    context: props.context,
    atomic: props.atomic,
    input: props.input,
    addition,
  });
  return {
    expected: props.atomic.getName(),
    expression:
      addition !== null && conditions.length === 0
        ? ts.factory.createLogicalAnd(base, addition)
        : base,
    conditions,
  };
};

/** @internal */
const check_numeric_type_tags = (props: {
  context: ITypiaContext;
  atomic: MetadataAtomic;
  addition: ts.Expression | null;
  input: ts.Expression;
}): ICheckEntry.ICondition[][] =>
  props.atomic.tags
    .map((row) => row.filter((tag) => !!tag.validate))
    .filter((row) => !!row.length)
    .map((row) => [
      ...(props.addition === null
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
                tag.kind === "multipleOf" && typeof tag.value === "number",
            ) ||
            (row.some(
              (tag) =>
                (tag.kind === "minimum" || tag.kind === "exclusiveMinimum") &&
                typeof tag.value === "number",
            ) &&
              row.some(
                (tag) =>
                  (tag.kind === "maximum" || tag.kind === "exclusiveMaximum") &&
                  typeof tag.value === "number",
              ))
          ? []
          : [
              {
                expected: "number",
                expression: props.addition!,
              },
            ]),
      ...row.map((tag) => ({
        expected: `number & ${tag.name}`,
        expression: ExpressionFactory.transpile({
          transformer: props.context.transformer,
          importer: props.context.importer,
          script: tag.validate!,
        })(props.input),
      })),
    ]);
