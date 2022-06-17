import path from "path";
import ts from "typescript";
import { IModuleImport } from "../structures/IModuleImport";

import { IProject } from "../structures/IProject";

import { ApplicationTransformer } from "./features/ApplicationTransformer";
import { AssertTransformer } from "./features/AssertTransformer";
import { CreateTransformer } from "./features/CreateTransformer";
import { IsTransformer } from "./features/IsTransformer";
import { StringifyTransformer } from "./features/StringifyTransformer";

export namespace FunctionTransformer {
    export function transform(
        project: IProject,
        expression: ts.CallExpression,
        imp: IModuleImport,
    ): ts.Expression {
        //----
        // VALIDATIONS
        //----
        // SIGNATURE
        const signature: ts.Signature | undefined =
            project.checker.getResolvedSignature(expression);
        if (!signature || !signature.declaration) return expression;

        // FILE PATH
        const file: string = path.resolve(
            signature.declaration.getSourceFile().fileName,
        );
        if (file !== LIB_PATH && file !== SRC_PATH) return expression;

        //----
        // TRANSFORMATION
        //----
        // FUNCTION NAME
        const { name } = project.checker.getTypeAtLocation(
            signature.declaration,
        ).symbol;

        // FIND TRANSFORMER
        const functor: (() => Task) | undefined = FUCTORS[name];

        // RETURNS WITH TRANSFORMATION
        if (functor === undefined) return expression;
        return functor()(project, expression, imp);
    }
}

type Task = (
    project: IProject,
    expression: ts.CallExpression,
    imp: IModuleImport,
) => ts.Expression;

const LIB_PATH = path.resolve(path.join(__dirname, "..", "module.d.ts"));
const SRC_PATH = path.resolve(path.join(__dirname, "..", "module.ts"));

const FUCTORS: Record<string, () => Task> = {
    assert: () => AssertTransformer.transform,
    is: () => IsTransformer.transform,
    stringify: () => StringifyTransformer.transform,

    application: () => ApplicationTransformer.transform,
    create: () => CreateTransformer.transform,
};
