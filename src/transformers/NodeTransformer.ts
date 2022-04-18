import ts from "typescript";

import { IProject } from "../structures/IProject";
import { get_json_function } from "../functional/get_json_function";

export namespace NodeTransformer
{
    export function transform
        (
            project: IProject,
            node: ts.Node
        ): ts.Node
    {
        if (!ts.isCallExpression(node))
            return node;
        
        const func = get_json_function(project, node);
        if (func === null)
            return node;
        
        const generic: ts.TypeNode = node.typeArguments![0]!;
        const type: ts.Type = project.checker.getTypeFromTypeNode(generic);
        
        return ts.factory.updateCallExpression
        (
            node,
            node.expression,
            node.typeArguments,
            [ ...node.arguments, func(project, type, generic) ]
        );
    }
}