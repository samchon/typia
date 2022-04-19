import ts from "typescript";

import { IProject } from "../structures/IProject";
import { get_json_function } from "../functional/get_json_function";

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
        
        const func = get_json_function(project, expression);
        if (func === null)
            return expression;
        
        const generic: ts.TypeNode = expression.typeArguments![0]!;
        const type: ts.Type = project.checker.getTypeFromTypeNode(generic);
        
        return ts.factory.updateCallExpression
        (
            expression,
            expression.expression,
            expression.typeArguments,
            [ ...expression.arguments, func(project, type, generic) ]
        );
    }
}