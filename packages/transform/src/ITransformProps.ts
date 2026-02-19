import { ITypiaContext } from "@typia/core";
import ts from "typescript";

export interface ITransformProps {
  context: ITypiaContext;
  modulo: ts.LeftHandSideExpression;
  expression: ts.CallExpression;
}
