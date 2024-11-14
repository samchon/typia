import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";

import { MetadataArray } from "../../schemas/metadata/MetadataArray";

import { ITypiaContext } from "../../transformers/ITypiaContext";

import { ICheckEntry } from "../helpers/ICheckEntry";

/**
 * @internal
 */
export const check_array_length = (props: {
  context: ITypiaContext;
  array: MetadataArray;
  input: ts.Expression;
}): ICheckEntry => {
  const conditions: ICheckEntry.ICondition[][] = check_array_type_tags(props);
  return {
    expected: props.array.getName(),
    expression: null,
    conditions,
  };
};

/**
 * @internal
 */
const check_array_type_tags = (props: {
  context: ITypiaContext;
  array: MetadataArray;
  input: ts.Expression;
}): ICheckEntry.ICondition[][] =>
  props.array.tags
    .map((row) => row.filter((tag) => !!tag.validate))
    .filter((row) => !!row.length)
    .map((row) =>
      row.map((tag) => ({
        expected: `Array<> & ${tag.name}`,
        expression: ExpressionFactory.transpile({
          transformer: props.context.transformer,
          importer: props.context.importer,
          script: tag.validate!,
        })(props.input),
      })),
    );
