import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";

import { MetadataAtomic } from "../../schemas/metadata/MetadataAtomic";

import { ITypiaContext } from "../../transformers/ITypiaContext";

import { ICheckEntry } from "../helpers/ICheckEntry";

/**
 * @internal
 */
export const check_bigint = (props: {
  context: ITypiaContext;
  atomic: MetadataAtomic;
  input: ts.Expression;
}): ICheckEntry => {
  const conditions: ICheckEntry.ICondition[][] = check_bigint_type_tags(props);
  return {
    expected: props.atomic.getName(),
    expression: ts.factory.createStrictEquality(
      ts.factory.createStringLiteral("bigint"),
      ts.factory.createTypeOfExpression(props.input),
    ),
    conditions,
  };
};

/**
 * @internal
 */
const check_bigint_type_tags = (props: {
  context: ITypiaContext;
  atomic: MetadataAtomic;
  input: ts.Expression;
}): ICheckEntry.ICondition[][] =>
  props.atomic.tags
    .map((row) => row.filter((tag) => !!tag.validate))
    .filter((row) => !!row.length)
    .map((row) =>
      row.map((tag) => ({
        expected: `bigint & ${tag.name}`,
        expression: (
          tag.predicate ??
          ExpressionFactory.transpile(props.context.transformer, tag.validate!)
        )(props.input),
      })),
    );
