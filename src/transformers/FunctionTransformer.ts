import path from "path";
import ts from "typescript";

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
    ): ts.Expression {
        //----
        // VALIDATIONS
        //----
        // SIGNATURE
        const signature: ts.Signature | undefined =
            project.checker.getResolvedSignature(expression);
        if (!signature || !signature.declaration) return expression;

        // FILE PATH
        const declaration: ts.Declaration = signature.declaration;
        const file: string = path.resolve(declaration.getSourceFile().fileName);
        if (file !== LIB_PATH && file !== SRC_PATH) return expression;

        //----
        // TRANSFORMATION
        //----
        // FUNCTION NAME
        const { name } = project.checker.getTypeAtLocation(declaration).symbol;

        // FIND TRANSFORMER
        const functor: (() => Task) | undefined = FUCTORS[name];

        // RETURNS WITH TRANSFORMATION
        if (functor === undefined) return expression;
        return functor()(project, expression.expression, expression);
    }
}

type Task = (
    project: IProject,
    modulo: ts.LeftHandSideExpression,
    expression: ts.CallExpression,
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
