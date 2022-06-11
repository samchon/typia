import path from "path";
import ts from "typescript";
import { IProject } from "../structures/IProject";
import { ApplicationFunctionTransformer } from "./ApplicationFunctionTransformer";
import { CreateFunctionTransformer } from "./CreateFunctionTransformer";

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
        const func: Task | null =
            name === "create"
                ? CreateFunctionTransformer.transform
                : name === "application"
                ? ApplicationFunctionTransformer.transform
                : null;

        // RETURNS WITH TRANSFORMATION
        if (func === null) return expression;
        return func(project, expression);
    }
}

type Task = (project: IProject, expression: ts.CallExpression) => ts.Expression;
const LIB_PATH = path.resolve(path.join(__dirname, "..", "module.d.ts"));
const SRC_PATH = path.resolve(path.join(__dirname, "..", "module.ts"));
