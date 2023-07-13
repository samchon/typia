import path from "path";
import ts from "typescript";

import { IProject } from "./IProject";
import { AssertTransformer } from "./features/AssertTransformer";
import { CreateAssertTransformer } from "./features/CreateAssertTransformer";
import { CreateIsTransformer } from "./features/CreateIsTransformer";
import { CreateRandomTransformer } from "./features/CreateRandomTransformer";
import { CreateValidateTransformer } from "./features/CreateValidateTransformer";
import { IsTransformer } from "./features/IsTransformer";
import { RandomTransformer } from "./features/RandomTransformer";
import { ValidateTransformer } from "./features/ValidateTransformer";
import { AssertParseTransformer } from "./features/json/AssertParseTransformer";
import { AssertStringifyTransformer } from "./features/json/AssertStringifyTransformer";
import { CreateAssertParseTransformer } from "./features/json/CreateAssertParseTransformer";
import { CreateAssertStringifyTransformer } from "./features/json/CreateAssertStringifyTransformer";
import { CreateIsParseTransformer } from "./features/json/CreateIsParseTransformer";
import { CreateIsStringifyTransformer } from "./features/json/CreateIsStringifyTransformer";
import { CreateStringifyTransformer } from "./features/json/CreateStringifyTransformer";
import { CreateValidateParseTransformer } from "./features/json/CreateValidateParseTransformer";
import { CreateValidateStringifyTransformer } from "./features/json/CreateValidateStringifyProgrammer";
import { IsParseTransformer } from "./features/json/IsParseTransformer";
import { IsStringifyTransformer } from "./features/json/IsStringifyTransformer";
import { StringifyTransformer } from "./features/json/StringifyTransformer";
import { ValidateParseTransformer } from "./features/json/ValidateParseTransformer";
import { ValidateStringifyTransformer } from "./features/json/ValidateStringifyTransformer";
import { ApplicationTransformer } from "./features/misc/ApplicationTransformer";
import { AssertCloneTransformer } from "./features/misc/AssertCloneTransformer";
import { AssertPruneTransformer } from "./features/misc/AssertPruneTransformer";
import { CloneTransformer } from "./features/misc/CloneTransformer";
import { CreateAssertCloneTransformer } from "./features/misc/CreateAssertCloneTransformer";
import { CreateAssertPruneTransformer } from "./features/misc/CreateAssertPruneTransformer";
import { CreateCloneTransformer } from "./features/misc/CreateCloneTransformer";
import { CreateIsCloneTransformer } from "./features/misc/CreateIsCloneTransformer";
import { CreateIsPruneTransformer } from "./features/misc/CreateIsPruneTransformer";
import { CreatePruneTransformer } from "./features/misc/CreatePruneTransformer";
import { CreateValidateCloneTransformer } from "./features/misc/CreateValidateCloneTransformer";
import { CreateValidatePruneTransformer } from "./features/misc/CreateValidatePruneTransformer";
import { IsCloneTransformer } from "./features/misc/IsCloneTransformer";
import { IsPruneTransformer } from "./features/misc/IsPruneTransformer";
import { LiteralsTransformer } from "./features/misc/LiteralsTransformer";
import { MetadataTransformer } from "./features/misc/MetadataTransformer";
import { PruneTransformer } from "./features/misc/PruneTransformer";
import { ValidateCloneTransformer } from "./features/misc/ValidateCloneTransformer";
import { ValidatePruneTransformer } from "./features/misc/ValidatePruneTransformer";
import { MessageTransformer } from "./features/protobuf/MessageTransformer";

export namespace CallExpressionTransformer {
    export const transform =
        (project: IProject) =>
        (expression: ts.CallExpression): ts.Expression => {
            //----
            // VALIDATIONS
            //----
            // SIGNATURE DECLARATION
            const declaration: ts.Declaration | undefined =
                project.checker.getResolvedSignature(expression)?.declaration;
            if (!declaration) return expression;

            // FILE PATH
            const location: string = path.resolve(
                declaration.getSourceFile().fileName,
            );
            if (isTarget(location) === false) return expression;

            //----
            // TRANSFORMATION
            //----
            // FUNCTION NAME
            const module: string = location
                .split(path.sep)
                .at(-1)!
                .split(".")[0]!;
            const { name } =
                project.checker.getTypeAtLocation(declaration).symbol;

            // FIND TRANSFORMER
            const functor: (() => Task) | undefined = FUNCTORS[module]?.[name];
            if (functor === undefined) return expression;

            // RETURNS WITH TRANSFORMATION
            return functor()(project)(expression.expression)(expression);
        };

    const isTarget = (location: string): boolean => {
        const files: string[] = Object.keys(FUNCTORS);
        return files.some(
            (f) =>
                location.includes(
                    path.join("node_modules", "typia", "lib", `${f}.d.ts`),
                ) ||
                location ===
                    path.resolve(path.join(__dirname, "..", `${f}.ts`)) ||
                location ===
                    path.resolve(
                        path.join(
                            __dirname,
                            "..",
                            "..",
                            "..",
                            "src",
                            `${f}.ts`,
                        ),
                    ),
        );
    };
}

type Task = (
    project: IProject,
) => (
    modulo: ts.LeftHandSideExpression,
) => (expression: ts.CallExpression) => ts.Expression;

const FUNCTORS: Record<string, Record<string, () => Task>> = {
    module: {
        // BASIC
        assert: () => AssertTransformer.transform(false),
        assertType: () => AssertTransformer.transform(false),
        is: () => IsTransformer.transform(false),
        validate: () => ValidateTransformer.transform(false),

        // STRICT
        assertEquals: () => AssertTransformer.transform(true),
        equals: () => IsTransformer.transform(true),
        validateEquals: () => ValidateTransformer.transform(true),

        // RANDOM + INTERNAL
        random: () => RandomTransformer.transform,
        metadata: () => (P) => () => MetadataTransformer.transform(P),

        // FACTORIES
        createAssert: () => CreateAssertTransformer.transform(false),
        createAssertType: () => CreateAssertTransformer.transform(false),
        createIs: () => CreateIsTransformer.transform(false),
        createValidate: () => CreateValidateTransformer.transform(false),
        createAssertEquals: () => CreateAssertTransformer.transform(true),
        createEquals: () => CreateIsTransformer.transform(true),
        createValidateEquals: () => CreateValidateTransformer.transform(true),
        createRandom: () => CreateRandomTransformer.transform,
    },
    protobuf: {
        message: () => MessageTransformer.transform,
    },
    json: {
        // SCHEMA
        application: () => (P) => () => ApplicationTransformer.transform(P),

        // PARSER
        isParse: () => IsParseTransformer.transform,
        assertParse: () => AssertParseTransformer.transform,
        validateParse: () => ValidateParseTransformer.transform,

        // STRINGIFY
        stringify: () => StringifyTransformer.transform,
        assertStringify: () => AssertStringifyTransformer.transform,
        isStringify: () => IsStringifyTransformer.transform,
        validateStringify: () => ValidateStringifyTransformer.transform,

        // FACTORIES
        createIsParse: () => CreateIsParseTransformer.transform,
        createAssertParse: () => CreateAssertParseTransformer.transform,
        createValidateParse: () => CreateValidateParseTransformer.transform,
        createStringify: () => CreateStringifyTransformer.transform,
        createAssertStringify: () => CreateAssertStringifyTransformer.transform,
        createIsStringify: () => CreateIsStringifyTransformer.transform,
        createValidateStringify: () =>
            CreateValidateStringifyTransformer.transform,
    },
    misc: {
        literals: () => (project) => () =>
            LiteralsTransformer.transform(project),

        // CLONE
        clone: () => CloneTransformer.transform,
        assertClone: () => AssertCloneTransformer.transform,
        isClone: () => IsCloneTransformer.transform,
        validateClone: () => ValidateCloneTransformer.transform,

        // PRUNE
        prune: () => PruneTransformer.transform,
        assertPrune: () => AssertPruneTransformer.transform,
        isPrune: () => IsPruneTransformer.transform,
        validatePrune: () => ValidatePruneTransformer.transform,

        // FACTORIES
        createClone: () => CreateCloneTransformer.transform,
        createAssertClone: () => CreateAssertCloneTransformer.transform,
        createIsClone: () => CreateIsCloneTransformer.transform,
        createValidateClone: () => CreateValidateCloneTransformer.transform,
        createPrune: () => CreatePruneTransformer.transform,
        createAssertPrune: () => CreateAssertPruneTransformer.transform,
        createIsPrune: () => CreateIsPruneTransformer.transform,
        createValidatePrune: () => CreateValidatePruneTransformer.transform,
    },
};
