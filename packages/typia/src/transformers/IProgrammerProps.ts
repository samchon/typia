import ts from "typescript";

import { ITypiaContext } from "./ITypiaContext";

export interface IProgrammerProps {
  context: ITypiaContext;
  modulo: ts.LeftHandSideExpression;
  type: ts.Type;
  name: string | undefined;
  init?: ts.Expression | undefined;
}
