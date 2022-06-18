import ts from "typescript";

import { IProject } from "../structures/IProject";
import { CallExpressionTransformer } from "./CallExpressionTransformer";
// import { ExpressionWithArgumentTransformer } from "./ExpressionWithArgumentTransformer";

export namespace NodeTransformer {
    export function transform(project: IProject, expression: ts.Node): ts.Node {
        if (ts.isCallExpression(expression))
            return CallExpressionTransformer.transform(project, expression);
        // else if (ts.isExpressionWithTypeArguments(expression))
        //     return ExpressionWithArgumentTransformer.transform(
        //         project,
        //         expression,
        //     );
        return expression;
    }
}
