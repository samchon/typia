import ts from "typescript";

import { FunctionFactory } from "../factories/FunctionFactory";
import { IProject } from "../structures/IProject";

export namespace NodeTransformer
{
    export function transform
        (
            project: IProject,
            expression: ts.Node
        ): ts.Node
    {
        if (!ts.isCallExpression(expression))
            return expression;
        
        const func: FunctionFactory.Closure | null = FunctionFactory.generate
        (
            project, 
            expression
        );
        if (func === null)
            return expression;
        
        const noe: ts.TypeNode | null = (expression.typeArguments || [])[0] || null;
        const type: ts.Type | null = noe 
            ? project.checker.getTypeFromTypeNode(noe) 
            : null;
        
        return ts.factory.updateCallExpression
        (
            expression,
            expression.expression,
            expression.typeArguments,
            [ ...expression.arguments, func(project, expression, type) ]
        );
    }
}