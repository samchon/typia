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
import { JsonApplicationTransformer } from "./features/json/JsonApplicationTransformer";
import { JsonAssertParseTransformer } from "./features/json/JsonAssertParseTransformer";
import { JsonAssertStringifyTransformer } from "./features/json/JsonAssertStringifyTransformer";
import { JsonCreateAssertParseTransformer } from "./features/json/JsonCreateAssertParseTransformer";
import { JsonCreateAssertStringifyTransformer } from "./features/json/JsonCreateAssertStringifyTransformer";
import { JsonCreateIsParseTransformer } from "./features/json/JsonCreateIsParseTransformer";
import { JsonCreateIsStringifyTransformer } from "./features/json/JsonCreateIsStringifyTransformer";
import { JsonCreateStringifyTransformer } from "./features/json/JsonCreateStringifyTransformer";
import { JsonCreateValidateParseTransformer } from "./features/json/JsonCreateValidateParseTransformer";
import { JsonCreateValidateStringifyTransformer } from "./features/json/JsonCreateValidateStringifyProgrammer";
import { JsonIsParseTransformer } from "./features/json/JsonIsParseTransformer";
import { JsonIsStringifyTransformer } from "./features/json/JsonIsStringifyTransformer";
import { JsonStringifyTransformer } from "./features/json/JsonStringifyTransformer";
import { JsonValidateParseTransformer } from "./features/json/JsonValidateParseTransformer";
import { JsonValidateStringifyTransformer } from "./features/json/JsonValidateStringifyTransformer";
import { MetadataTransformer } from "./features/misc/MetadataTransformer";
import { MiscAssertCloneTransformer } from "./features/misc/MiscAssertCloneTransformer";
import { MiscAssertPruneTransformer } from "./features/misc/MiscAssertPruneTransformer";
import { MiscCloneTransformer } from "./features/misc/MiscCloneTransformer";
import { MiscCreateAssertCloneTransformer } from "./features/misc/MiscCreateAssertCloneTransformer";
import { MiscCreateAssertPruneTransformer } from "./features/misc/MiscCreateAssertPruneTransformer";
import { MiscCreateCloneTransformer } from "./features/misc/MiscCreateCloneTransformer";
import { MiscCreateIsCloneTransformer } from "./features/misc/MiscCreateIsCloneTransformer";
import { MiscCreateIsPruneTransformer } from "./features/misc/MiscCreateIsPruneTransformer";
import { MiscCreatePruneTransformer } from "./features/misc/MiscCreatePruneTransformer";
import { MiscCreateValidateCloneTransformer } from "./features/misc/MiscCreateValidateCloneTransformer";
import { MiscCreateValidatePruneTransformer } from "./features/misc/MiscCreateValidatePruneTransformer";
import { MiscIsCloneTransformer } from "./features/misc/MiscIsCloneTransformer";
import { MiscIsPruneTransformer } from "./features/misc/MiscIsPruneTransformer";
import { MiscLiteralsTransformer } from "./features/misc/MiscLiteralsTransformer";
import { MiscPruneTransformer } from "./features/misc/MiscPruneTransformer";
import { MiscValidateCloneTransformer } from "./features/misc/MiscValidateCloneTransformer";
import { MiscValidatePruneTransformer } from "./features/misc/MiscValidatePruneTransformer";
import { CreateProtobufAssertDecodeTransformer } from "./features/protobuf/CreateProtobufAssertDecodeTransformer";
import { CreateProtobufAssertEncodeTransformer } from "./features/protobuf/CreateProtobufAssertEncodeTransformer";
import { CreateProtobufDecodeTransformer } from "./features/protobuf/CreateProtobufDecodeTransformer";
import { CreateProtobufEncodeTransformer } from "./features/protobuf/CreateProtobufEncodeTransformer";
import { CreateProtobufIsDecodeTransformer } from "./features/protobuf/CreateProtobufIsDecodeTransformer";
import { CreateProtobufIsEncodeTransformer } from "./features/protobuf/CreateProtobufIsEncodeTransformer";
import { CreateProtobufValidateDecodeTransformer } from "./features/protobuf/CreateProtobufValidateDecodeTransformer";
import { CreateProtobufValidateEncodeTransformer } from "./features/protobuf/CreateProtobufValidateEncodeTransformer";
import { ProtobufAssertDecodeTransformer } from "./features/protobuf/ProtobufAssertDecodeTransformer";
import { ProtobufAssertEncodeTransformer } from "./features/protobuf/ProtobufAssertEncodeTransformer";
import { ProtobufDecodeTransformer } from "./features/protobuf/ProtobufDecodeTransformer";
import { ProtobufEncodeTransformer } from "./features/protobuf/ProtobufEncodeTransformer";
import { ProtobufIsDecodeTransformer } from "./features/protobuf/ProtobufIsDecodeTransformer";
import { ProtobufIsEncodeTransformer } from "./features/protobuf/ProtobufIsEncodeTransformer";
import { ProtobufMessageTransformer } from "./features/protobuf/ProtobufMessageTransformer";
import { ProtobufValidateDecodeTransformer } from "./features/protobuf/ProtobufValidateDecodeTransformer";
import { ProtobufValidateEncodeTransformer } from "./features/protobuf/ProtobufValidateEncodeTransformer";

export namespace CallExpressionTransformer {
    export const transform =
        (project: IProject) =>
        (expression: ts.CallExpression): ts.Expression | null => {
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
            const result: ts.Expression | null = functor()(project)(
                expression.expression,
            )(expression);
            return result ?? expression;
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
) => (expression: ts.CallExpression) => ts.Expression | null;

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
    json: {
        // SCHEMA
        application: () => (P) => () => JsonApplicationTransformer.transform(P),

        // PARSER
        isParse: () => JsonIsParseTransformer.transform,
        assertParse: () => JsonAssertParseTransformer.transform,
        validateParse: () => JsonValidateParseTransformer.transform,

        // STRINGIFY
        stringify: () => JsonStringifyTransformer.transform,
        assertStringify: () => JsonAssertStringifyTransformer.transform,
        isStringify: () => JsonIsStringifyTransformer.transform,
        validateStringify: () => JsonValidateStringifyTransformer.transform,

        // FACTORIES
        createIsParse: () => JsonCreateIsParseTransformer.transform,
        createAssertParse: () => JsonCreateAssertParseTransformer.transform,
        createValidateParse: () => JsonCreateValidateParseTransformer.transform,
        createStringify: () => JsonCreateStringifyTransformer.transform,
        createAssertStringify: () =>
            JsonCreateAssertStringifyTransformer.transform,
        createIsStringify: () => JsonCreateIsStringifyTransformer.transform,
        createValidateStringify: () =>
            JsonCreateValidateStringifyTransformer.transform,
    },
    protobuf: {
        // SCHEMA
        message: () => ProtobufMessageTransformer.transform,

        // ENCODE
        encode: () => ProtobufEncodeTransformer.transform,
        assertEncode: () => ProtobufAssertEncodeTransformer.transform,
        isEncode: () => ProtobufIsEncodeTransformer.transform,
        validateEncode: () => ProtobufValidateEncodeTransformer.transform,

        // DECODE
        decode: () => ProtobufDecodeTransformer.transform,
        assertDecode: () => ProtobufAssertDecodeTransformer.transform,
        isDecode: () => ProtobufIsDecodeTransformer.transform,
        validateDecode: () => ProtobufValidateDecodeTransformer.transform,

        // FACTORIES
        createEncode: () => CreateProtobufEncodeTransformer.transform,
        createAssertEncode: () =>
            CreateProtobufAssertEncodeTransformer.transform,
        createIsEncode: () => CreateProtobufIsEncodeTransformer.transform,
        createValidateEncode: () =>
            CreateProtobufValidateEncodeTransformer.transform,
        createDecode: () => CreateProtobufDecodeTransformer.transform,
        createAssertDecode: () =>
            CreateProtobufAssertDecodeTransformer.transform,
        createIsDecode: () => CreateProtobufIsDecodeTransformer.transform,
        createValidateDecode: () =>
            CreateProtobufValidateDecodeTransformer.transform,
    },
    misc: {
        literals: () => (project) => () =>
            MiscLiteralsTransformer.transform(project),

        // CLONE
        clone: () => MiscCloneTransformer.transform,
        assertClone: () => MiscAssertCloneTransformer.transform,
        isClone: () => MiscIsCloneTransformer.transform,
        validateClone: () => MiscValidateCloneTransformer.transform,

        // PRUNE
        prune: () => MiscPruneTransformer.transform,
        assertPrune: () => MiscAssertPruneTransformer.transform,
        isPrune: () => MiscIsPruneTransformer.transform,
        validatePrune: () => MiscValidatePruneTransformer.transform,

        // FACTORIES
        createClone: () => MiscCreateCloneTransformer.transform,
        createAssertClone: () => MiscCreateAssertCloneTransformer.transform,
        createIsClone: () => MiscCreateIsCloneTransformer.transform,
        createValidateClone: () => MiscCreateValidateCloneTransformer.transform,
        createPrune: () => MiscCreatePruneTransformer.transform,
        createAssertPrune: () => MiscCreateAssertPruneTransformer.transform,
        createIsPrune: () => MiscCreateIsPruneTransformer.transform,
        createValidatePrune: () => MiscCreateValidatePruneTransformer.transform,
    },
};
