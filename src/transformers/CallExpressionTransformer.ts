import path from "path";
import ts from "typescript";

import { IProject } from "./IProject";
import { AssertCloneTransformer } from "./features/cloners/AssertCloneTransformer";
import { CloneTransformer } from "./features/cloners/CloneTransformer";
import { CreateAssertCloneTransformer } from "./features/cloners/CreateAssertCloneTransformer";
import { CreateCloneTransformer } from "./features/cloners/CreateCloneTransformer";
import { CreateIsCloneTransformer } from "./features/cloners/CreateIsCloneTransformer";
import { CreateValidateCloneTransformer } from "./features/cloners/CreateValidateCloneTransformer";
import { IsCloneTransformer } from "./features/cloners/IsCloneTransformer";
import { ValidateCloneTransformer } from "./features/cloners/ValidateCloneTransformer";
import { ApplicationTransformer } from "./features/miscellaneous/ApplicationTransformer";
import { CreateInstanceTransformer } from "./features/miscellaneous/CreateInstanceTransformer";
import { MetadataTransformer } from "./features/miscellaneous/MetadataTransformer";
import { AssertStringifyTransformer } from "./features/stringifiers/AssertStringifyTransformer";
import { CreateAssertStringifyTransformer } from "./features/stringifiers/CreateAssertStringifyTransformer";
import { CreateIsStringifyTransformer } from "./features/stringifiers/CreateIsStringifyTransformer";
import { CreateStringifyTransformer } from "./features/stringifiers/CreateStringifyTransformer";
import { CreateValidateStringifyTransformer } from "./features/stringifiers/CreateValidateStringifyProgrammer";
import { IsStringifyTransformer } from "./features/stringifiers/IsStringifyTransformer";
import { StringifyTransformer } from "./features/stringifiers/StringifyTransformer";
import { ValidateStringifyTransformer } from "./features/stringifiers/ValidateStringifyTransformer";
import { AssertTransformer } from "./features/validators/AssertTransformer";
import { CreateAssertTransformer } from "./features/validators/CreateAssertTransformer";
import { CreateIsTransformer } from "./features/validators/CreateIsTransformer";
import { CreateValidateTransformer } from "./features/validators/CreateValidateTransformer";
import { IsTransformer } from "./features/validators/IsTransformer";
import { ValidateTransformer } from "./features/validators/ValidateTransformer";

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
    assert: () => AssertTransformer.transform(false),
    assertType: () => AssertTransformer.transform(false),
    is: () => IsTransformer.transform(false),
    validate: () => ValidateTransformer.transform(false),

    // STRICT VALIDATORS
    assertEquals: () => AssertTransformer.transform(true),
    equals: () => IsTransformer.transform(true),
    validateEquals: () => ValidateTransformer.transform(true),

    // STRINGIFY FUNCTIONS
    stringify: () => StringifyTransformer.transform,
    assertStringify: () => AssertStringifyTransformer.transform,
    isStringify: () => IsStringifyTransformer.transform,
    validateStringify: () => ValidateStringifyTransformer.transform,

    // CLONE FUNCTIONS
    clone: () => CloneTransformer.transform,
    assertClone: () => AssertCloneTransformer.transform,
    isClone: () => IsCloneTransformer.transform,
    validateClone: () => ValidateCloneTransformer.transform,

    // MISC
    application: () => ApplicationTransformer.transform,

    //----
    // FACTORY FUNCTIONS
    //----
    // BASIC VALIDATORS
    createAssert: () => CreateAssertTransformer.transform(false),
    createAssertType: () => CreateAssertTransformer.transform(false),
    createIs: () => CreateIsTransformer.transform(false),
    createValidate: () => CreateValidateTransformer.transform(false),

    // STRICT VALIDATORS
    createAssertEquals: () => CreateAssertTransformer.transform(true),
    createEquals: () => CreateIsTransformer.transform(true),
    createValidateEquals: () => CreateValidateTransformer.transform(true),

    // STRINGIFY FUNCTIONS
    createStringify: () => CreateStringifyTransformer.transform,
    createAssertStringify: () => CreateAssertStringifyTransformer.transform,
    createIsStringify: () => CreateIsStringifyTransformer.transform,
    createValidateStringify: () => CreateValidateStringifyTransformer.transform,

    // CLONE
    createClone: () => CreateCloneTransformer.transform,
    createAssertClone: () => CreateAssertCloneTransformer.transform,
    createIsClone: () => CreateIsCloneTransformer.transform,
    createValidateClone: () => CreateValidateCloneTransformer.transform,

    // MISC
    createObject: () => CreateInstanceTransformer.transform,
    metadata: () => MetadataTransformer.transform,
};
