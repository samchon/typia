import ts from "typescript";

import { MetadataSchema } from "../../schemas/metadata/MetadataSchema";

export interface IExpressionEntry<
  Expression extends ts.ConciseBody = ts.ConciseBody,
> {
  input: ts.Expression;
  key: MetadataSchema;
  meta: MetadataSchema;
  expression: Expression;
}
