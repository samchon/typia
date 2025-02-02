import type ts from "typescript";

import type { ITypiaContext } from "./ITypiaContext";

export interface ITransformProps {
  context: ITypiaContext;
  modulo: ts.LeftHandSideExpression;
  expression: ts.CallExpression;
}
