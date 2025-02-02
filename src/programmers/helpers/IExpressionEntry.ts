import type ts from "typescript";

import type { Metadata } from "../../schemas/metadata/Metadata";

export interface IExpressionEntry<
  Expression extends ts.ConciseBody = ts.ConciseBody,
> {
  input: ts.Expression;
  key: Metadata;
  meta: Metadata;
  expression: Expression;
}
