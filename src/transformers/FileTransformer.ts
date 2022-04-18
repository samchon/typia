import NestedError from "nested-error-stacks";
import ts from "typescript";

import { IProject } from "../structures/IProject";
import { NodeTransformer } from "./NodeTransformer";

export namespace FileTransformer
{
    export function transform
        (
            project: IProject, 
            context: ts.TransformationContext,
            file: ts.SourceFile
        ): ts.SourceFile
    {
        return ts.visitEachChild
        (
            file, 
            node => iterate_node(project, context, node), 
            context
        );
    }

    function iterate_node
        (
            project: IProject, 
            context: ts.TransformationContext, 
            node: ts.Node
        ): ts.Node
    {
        return ts.visitEachChild
        (
            try_transform_node(project, node), 
            child => iterate_node(project, context, child), 
            context
        );
    }

    function try_transform_node
        (
            project: IProject, 
            node: ts.Node
        ): ts.Node
    {
        try
        {
            return NodeTransformer.transform(project, node);
        }
        catch (exp)
        {
            const file: ts.SourceFile = node.getSourceFile();
            const { line, character } = file.getLineAndCharacterOfPosition(node.pos);

            throw new NestedError(`Error on typescript-json.tranformer(): failed to transform - ${file.fileName}:${line + 1}:${character +1}`, exp as Error);    
        }
    }
}