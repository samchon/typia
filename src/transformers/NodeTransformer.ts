import ts from "typescript";

import { CallExpressionTransformer } from "./CallExpressionTransformer";
import { IProject } from "./IProject";

export namespace NodeTransformer {
    export const transform =
        (project: IProject) =>
        (expression: ts.Node): ts.Node | null =>
            ts.isCallExpression(expression) && expression.parent
                ? CallExpressionTransformer.transform(project)(expression)
                : expression;
}
