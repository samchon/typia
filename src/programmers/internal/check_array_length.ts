import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";

import { IMetadataTypeTag } from "../../schemas/metadata/IMetadataTypeTag";
import { MetadataArray } from "../../schemas/metadata/MetadataArray";

import { ITypiaContext } from "../../transformers/ITypiaContext";

import { ICheckEntry } from "../helpers/ICheckEntry";

/**
 * @internal
 */
export const check_array_length =
  (project: ITypiaContext) =>
  (array: MetadataArray) =>
  (input: ts.Expression): ICheckEntry => {
    const conditions: ICheckEntry.ICondition[][] = check_string_type_tags(
      project,
    )(array.tags)(input);

    return {
      expected: array.getName(),
      expression: null,
      conditions,
    };
  };

const check_string_type_tags =
  (project: ITypiaContext) =>
  (matrix: IMetadataTypeTag[][]) =>
  (input: ts.Expression): ICheckEntry.ICondition[][] =>
    matrix
      .map((row) => row.filter((tag) => !!tag.validate))
      .filter((row) => !!row.length)
      .map((row) =>
        row.map((tag) => ({
          expected: `Array<> & ${tag.name}`,
          expression: (
            tag.predicate ??
            ExpressionFactory.transpile(project.transformer)(tag.validate!)
          )(input),
        })),
      );
