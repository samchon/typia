import ts from "typescript";

import { ITypiaContext } from "./ITypiaContext";

export interface ITransformProps {
  context: ITypiaContext;
  modulo: ts.LeftHandSideExpression;
  expression: ts.CallExpression;
}
