import ts from "typescript";

import { IProject } from "../structures/IProject";
import { FunctionTransformer } from "./FunctionTransformer";

export namespace NodeTransformer {
    export function transform(project: IProject, expression: ts.Node): ts.Node {
        if (!ts.isCallExpression(expression)) return expression;
        return FunctionTransformer.transform(project, expression);

        // const func: FunctionFactory.Closure | null = FunctionFactory.generate(
        //     project,
        //     expression,
        // );
        // if (func === null) return expression;

        // const node: ts.TypeNode | null =
        //     (expression.typeArguments || [])[0] || null;
        // const type: ts.Type | null = node
        //     ? project.checker.getTypeFromTypeNode(node)
        //     : null;

        // return ts.factory.updateCallExpression(
        //     expression,
        //     expression.expression,
        //     expression.typeArguments,
        //     [...expression.arguments, func(project, expression, type)],
        // );
    }
}
