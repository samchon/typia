import path from "path";
import ts from "typescript";

import { IProject } from "./IProject";
import { ApplicationTransformer } from "./features/ApplicationTransformer";
import { AssertTransformer } from "./features/AssertTransformer";
import { AssertStringifyTransformer } from "./features/AssertStringifyTransformer";
import { CreateAssertStringifyTransformer } from "./features/CreateAssertStringifyTransformer";
import { CreateAssertTransformer } from "./features/CreateAssertTransformer";
import { CreateInstanceTransformer } from "./features/CreateInstanceTransformer";
import { CreateIsStringifyTransformer } from "./features/CreateIsStringifyTransformer";
import { CreateIsTransformer } from "./features/CreateIsTransformer";
import { CreateStringifyTransformer } from "./features/CreateStringifyTransformer";
import { CreateValidateTransformer } from "./features/CreateValidateTransformer";
import { IsStringifyTransformer } from "./features/IsStringifyTransformer";
import { IsTransformer } from "./features/IsTransformer";
import { StringifyTransformer } from "./features/StringifyTransformer";
import { ValidateTransformer } from "./features/ValidateTransformer";

export namespace CallExpressionTransformer {
    export function transform(
        project: IProject,
        expression: ts.CallExpression,
    ): ts.Expression {
        //----
        // VALIDATIONS
        //----
        // SIGNATURE DECLARATION
        const declaration: ts.Declaration | undefined =
            project.checker.getResolvedSignature(expression)?.declaration;
        if (!declaration) return expression;

        // FILE PATH
        const file: string = path.resolve(declaration.getSourceFile().fileName);
        if (file !== LIB_PATH && file !== SRC_PATH) return expression;

        //----
        // TRANSFORMATION
        //----
        // FUNCTION NAME
        const { name } = project.checker.getTypeAtLocation(declaration).symbol;

        // FIND TRANSFORMER
        const functor: (() => Task) | undefined = FUNCTORS[name];
        if (functor === undefined) return expression;

        // RETURNS WITH TRANSFORMATION
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
const FUNCTORS: Record<string, () => Task> = {
    //----
    // SINGLE FUNCTIONS
    //----
    // BASIC VALIDATORS
    assertType: () => AssertTransformer.transform(false),
    is: () => IsTransformer.transform(false),
    validate: () => ValidateTransformer.transform(false),

    // STRICT VALIDATORS
    assertEquals: () => AssertTransformer.transform(true),
    equals: () => IsTransformer.transform(true),
    validateEquals: () => ValidateTransformer.transform(true),

    // APPENDIX FUNCTIONS
    stringify: () => StringifyTransformer.transform,
    assertStringify: () => AssertStringifyTransformer.transform,
    isStringify: () => IsStringifyTransformer.transform,
    application: () => ApplicationTransformer.transform,

    //----
    // FACTORY FUNCTIONS
    //----
    // BASIC VALIDATORS
    createAssertType: () => CreateAssertTransformer.transform(false),
    createIs: () => CreateIsTransformer.transform(false),
    createValidate: () => CreateValidateTransformer.transform(false),

    // STRICT VALIDATORS
    createAssertEquals: () => CreateAssertTransformer.transform(true),
    createEquals: () => CreateIsTransformer.transform(true),
    createValidateEquals: () => CreateValidateTransformer.transform(true),

    // APPENDIX FUNCTIONS
    createStringify: () => CreateStringifyTransformer.transform,
    createAssertStringify: () => CreateAssertStringifyTransformer.transform,
    createIsStringify: () => CreateIsStringifyTransformer.transform,
    createObject: () => CreateInstanceTransformer.transform,
};
