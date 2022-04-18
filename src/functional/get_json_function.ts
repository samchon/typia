import path from "path";
import ts from "typescript";

import { IProject } from "../structures/IProject";
import { argue_stringifier } from "./argue_stringifier";
import { argue_stringify } from "./argue_stringify";

export function get_json_function
    (
        project: IProject,
        node: ts.CallExpression
    ): ((project: IProject, type: ts.Type, node: ts.TypeNode) => ts.Expression) | null
{
    //----
    // VALIDATIONS
    //----
    // ONE GENERIC & ARGUMENT
    if (node.typeArguments?.length !== 1)
        return null;

    // SIGNATURE
    const signature: ts.Signature | undefined = project.checker.getResolvedSignature(node);
    if (!signature || !signature.declaration)
        return null;

    // EXACT FILE
    const file: string = path.resolve(signature.declaration.getSourceFile().fileName);
    if (file !== LIB_PATH && file !== SRC_PATH)
        return null;

    // FIND FUNCTION
    const name: string = project.checker.getTypeAtLocation(signature.declaration).symbol.name;
    const func: IFunction | undefined = FUNCTORS[name];
    
    if (func === undefined)
        return null;
    else if (node.arguments.length !== func.count)
        return null;

    // RETURNS
    return func.argument();
}

const LIB_PATH = path.resolve(path.join(__dirname, "..", "module.d.ts"));
const SRC_PATH = path.resolve(path.join(__dirname, "..", "module.ts"));
const FUNCTORS: Record<string, IFunction> = {
    stringify: {
        count: 1,
        argument: () => argue_stringify,
    },
    createStringifier: {
        count: 0,
        argument: () => argue_stringifier,
    }
}

interface IFunction
{
    count: number;
    argument: () => (project: IProject, type: ts.Type, node: ts.TypeNode) => ts.Expression;
}