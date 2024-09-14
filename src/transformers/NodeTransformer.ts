import ts from "typescript";

import { CallExpressionTransformer } from "./CallExpressionTransformer";
import { ITypiaContext } from "./ITypiaContext";

export namespace NodeTransformer {
  export const transform =
    (project: ITypiaContext) =>
    (expression: ts.Node): ts.Node | null =>
      ts.isCallExpression(expression) && expression.parent
        ? CallExpressionTransformer.transform(project)(expression)
        : expression;
}
