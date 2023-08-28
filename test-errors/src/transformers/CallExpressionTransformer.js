"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallExpressionTransformer = void 0;
const path_1 = __importDefault(require("path"));
const AssertTransformer_1 = require("./features/AssertTransformer");
const CreateAssertTransformer_1 = require("./features/CreateAssertTransformer");
const CreateIsTransformer_1 = require("./features/CreateIsTransformer");
const CreateRandomTransformer_1 = require("./features/CreateRandomTransformer");
const CreateValidateTransformer_1 = require("./features/CreateValidateTransformer");
const IsTransformer_1 = require("./features/IsTransformer");
const RandomTransformer_1 = require("./features/RandomTransformer");
const ValidateTransformer_1 = require("./features/ValidateTransformer");
const JsonApplicationTransformer_1 = require("./features/json/JsonApplicationTransformer");
const JsonAssertParseTransformer_1 = require("./features/json/JsonAssertParseTransformer");
const JsonAssertStringifyTransformer_1 = require("./features/json/JsonAssertStringifyTransformer");
const JsonCreateAssertParseTransformer_1 = require("./features/json/JsonCreateAssertParseTransformer");
const JsonCreateAssertStringifyTransformer_1 = require("./features/json/JsonCreateAssertStringifyTransformer");
const JsonCreateIsParseTransformer_1 = require("./features/json/JsonCreateIsParseTransformer");
const JsonCreateIsStringifyTransformer_1 = require("./features/json/JsonCreateIsStringifyTransformer");
const JsonCreateStringifyTransformer_1 = require("./features/json/JsonCreateStringifyTransformer");
const JsonCreateValidateParseTransformer_1 = require("./features/json/JsonCreateValidateParseTransformer");
const JsonCreateValidateStringifyProgrammer_1 = require("./features/json/JsonCreateValidateStringifyProgrammer");
const JsonIsParseTransformer_1 = require("./features/json/JsonIsParseTransformer");
const JsonIsStringifyTransformer_1 = require("./features/json/JsonIsStringifyTransformer");
const JsonStringifyTransformer_1 = require("./features/json/JsonStringifyTransformer");
const JsonValidateParseTransformer_1 = require("./features/json/JsonValidateParseTransformer");
const JsonValidateStringifyTransformer_1 = require("./features/json/JsonValidateStringifyTransformer");
const MetadataTransformer_1 = require("./features/misc/MetadataTransformer");
const MiscAssertCloneTransformer_1 = require("./features/misc/MiscAssertCloneTransformer");
const MiscAssertPruneTransformer_1 = require("./features/misc/MiscAssertPruneTransformer");
const MiscCloneTransformer_1 = require("./features/misc/MiscCloneTransformer");
const MiscCreateAssertCloneTransformer_1 = require("./features/misc/MiscCreateAssertCloneTransformer");
const MiscCreateAssertPruneTransformer_1 = require("./features/misc/MiscCreateAssertPruneTransformer");
const MiscCreateCloneTransformer_1 = require("./features/misc/MiscCreateCloneTransformer");
const MiscCreateIsCloneTransformer_1 = require("./features/misc/MiscCreateIsCloneTransformer");
const MiscCreateIsPruneTransformer_1 = require("./features/misc/MiscCreateIsPruneTransformer");
const MiscCreatePruneTransformer_1 = require("./features/misc/MiscCreatePruneTransformer");
const MiscCreateValidateCloneTransformer_1 = require("./features/misc/MiscCreateValidateCloneTransformer");
const MiscCreateValidatePruneTransformer_1 = require("./features/misc/MiscCreateValidatePruneTransformer");
const MiscIsCloneTransformer_1 = require("./features/misc/MiscIsCloneTransformer");
const MiscIsPruneTransformer_1 = require("./features/misc/MiscIsPruneTransformer");
const MiscLiteralsTransformer_1 = require("./features/misc/MiscLiteralsTransformer");
const MiscPruneTransformer_1 = require("./features/misc/MiscPruneTransformer");
const MiscValidateCloneTransformer_1 = require("./features/misc/MiscValidateCloneTransformer");
const MiscValidatePruneTransformer_1 = require("./features/misc/MiscValidatePruneTransformer");
const CreateProtobufAssertDecodeTransformer_1 = require("./features/protobuf/CreateProtobufAssertDecodeTransformer");
const CreateProtobufAssertEncodeTransformer_1 = require("./features/protobuf/CreateProtobufAssertEncodeTransformer");
const CreateProtobufDecodeTransformer_1 = require("./features/protobuf/CreateProtobufDecodeTransformer");
const CreateProtobufEncodeTransformer_1 = require("./features/protobuf/CreateProtobufEncodeTransformer");
const CreateProtobufIsDecodeTransformer_1 = require("./features/protobuf/CreateProtobufIsDecodeTransformer");
const CreateProtobufIsEncodeTransformer_1 = require("./features/protobuf/CreateProtobufIsEncodeTransformer");
const CreateProtobufValidateDecodeTransformer_1 = require("./features/protobuf/CreateProtobufValidateDecodeTransformer");
const CreateProtobufValidateEncodeTransformer_1 = require("./features/protobuf/CreateProtobufValidateEncodeTransformer");
const ProtobufAssertDecodeTransformer_1 = require("./features/protobuf/ProtobufAssertDecodeTransformer");
const ProtobufAssertEncodeTransformer_1 = require("./features/protobuf/ProtobufAssertEncodeTransformer");
const ProtobufDecodeTransformer_1 = require("./features/protobuf/ProtobufDecodeTransformer");
const ProtobufEncodeTransformer_1 = require("./features/protobuf/ProtobufEncodeTransformer");
const ProtobufIsDecodeTransformer_1 = require("./features/protobuf/ProtobufIsDecodeTransformer");
const ProtobufIsEncodeTransformer_1 = require("./features/protobuf/ProtobufIsEncodeTransformer");
const ProtobufMessageTransformer_1 = require("./features/protobuf/ProtobufMessageTransformer");
const ProtobufValidateDecodeTransformer_1 = require("./features/protobuf/ProtobufValidateDecodeTransformer");
const ProtobufValidateEncodeTransformer_1 = require("./features/protobuf/ProtobufValidateEncodeTransformer");
var CallExpressionTransformer;
(function (CallExpressionTransformer) {
    CallExpressionTransformer.transform = (project) => (expression) => {
        //----
        // VALIDATIONS
        //----
        // SIGNATURE DECLARATION
        const declaration = project.checker.getResolvedSignature(expression)?.declaration;
        if (!declaration)
            return expression;
        // FILE PATH
        const location = path_1.default.resolve(declaration.getSourceFile().fileName);
        if (isTarget(location) === false)
            return expression;
        //----
        // TRANSFORMATION
        //----
        // FUNCTION NAME
        const module = location
            .split(path_1.default.sep)
            .at(-1)
            .split(".")[0];
        const { name } = project.checker.getTypeAtLocation(declaration).symbol;
        // FIND TRANSFORMER
        const functor = FUNCTORS[module]?.[name];
        if (functor === undefined)
            return expression;
        // RETURNS WITH TRANSFORMATION
        const result = functor()(project)(expression.expression)(expression);
        return result ?? expression;
    };
    const isTarget = (location) => {
        const files = Object.keys(FUNCTORS);
        return files.some((f) => location.includes(path_1.default.join("node_modules", "typia", "lib", `${f}.d.ts`)) ||
            location ===
                path_1.default.resolve(path_1.default.join(__dirname, "..", `${f}.ts`)) ||
            location ===
                path_1.default.resolve(path_1.default.join(__dirname, "..", "..", "..", "src", `${f}.ts`)));
    };
})(CallExpressionTransformer || (exports.CallExpressionTransformer = CallExpressionTransformer = {}));
const FUNCTORS = {
    module: {
        // BASIC
        assert: () => AssertTransformer_1.AssertTransformer.transform(false),
        assertType: () => AssertTransformer_1.AssertTransformer.transform(false),
        is: () => IsTransformer_1.IsTransformer.transform(false),
        validate: () => ValidateTransformer_1.ValidateTransformer.transform(false),
        // STRICT
        assertEquals: () => AssertTransformer_1.AssertTransformer.transform(true),
        equals: () => IsTransformer_1.IsTransformer.transform(true),
        validateEquals: () => ValidateTransformer_1.ValidateTransformer.transform(true),
        // RANDOM + INTERNAL
        random: () => RandomTransformer_1.RandomTransformer.transform,
        metadata: () => (P) => () => MetadataTransformer_1.MetadataTransformer.transform(P),
        // FACTORIES
        createAssert: () => CreateAssertTransformer_1.CreateAssertTransformer.transform(false),
        createAssertType: () => CreateAssertTransformer_1.CreateAssertTransformer.transform(false),
        createIs: () => CreateIsTransformer_1.CreateIsTransformer.transform(false),
        createValidate: () => CreateValidateTransformer_1.CreateValidateTransformer.transform(false),
        createAssertEquals: () => CreateAssertTransformer_1.CreateAssertTransformer.transform(true),
        createEquals: () => CreateIsTransformer_1.CreateIsTransformer.transform(true),
        createValidateEquals: () => CreateValidateTransformer_1.CreateValidateTransformer.transform(true),
        createRandom: () => CreateRandomTransformer_1.CreateRandomTransformer.transform,
    },
    json: {
        // SCHEMA
        application: () => (P) => () => JsonApplicationTransformer_1.JsonApplicationTransformer.transform(P),
        // PARSER
        isParse: () => JsonIsParseTransformer_1.JsonIsParseTransformer.transform,
        assertParse: () => JsonAssertParseTransformer_1.JsonAssertParseTransformer.transform,
        validateParse: () => JsonValidateParseTransformer_1.JsonValidateParseTransformer.transform,
        // STRINGIFY
        stringify: () => JsonStringifyTransformer_1.JsonStringifyTransformer.transform,
        assertStringify: () => JsonAssertStringifyTransformer_1.JsonAssertStringifyTransformer.transform,
        isStringify: () => JsonIsStringifyTransformer_1.JsonIsStringifyTransformer.transform,
        validateStringify: () => JsonValidateStringifyTransformer_1.JsonValidateStringifyTransformer.transform,
        // FACTORIES
        createIsParse: () => JsonCreateIsParseTransformer_1.JsonCreateIsParseTransformer.transform,
        createAssertParse: () => JsonCreateAssertParseTransformer_1.JsonCreateAssertParseTransformer.transform,
        createValidateParse: () => JsonCreateValidateParseTransformer_1.JsonCreateValidateParseTransformer.transform,
        createStringify: () => JsonCreateStringifyTransformer_1.JsonCreateStringifyTransformer.transform,
        createAssertStringify: () => JsonCreateAssertStringifyTransformer_1.JsonCreateAssertStringifyTransformer.transform,
        createIsStringify: () => JsonCreateIsStringifyTransformer_1.JsonCreateIsStringifyTransformer.transform,
        createValidateStringify: () => JsonCreateValidateStringifyProgrammer_1.JsonCreateValidateStringifyTransformer.transform,
    },
    protobuf: {
        // SCHEMA
        message: () => ProtobufMessageTransformer_1.ProtobufMessageTransformer.transform,
        // ENCODE
        encode: () => ProtobufEncodeTransformer_1.ProtobufEncodeTransformer.transform,
        assertEncode: () => ProtobufAssertEncodeTransformer_1.ProtobufAssertEncodeTransformer.transform,
        isEncode: () => ProtobufIsEncodeTransformer_1.ProtobufIsEncodeTransformer.transform,
        validateEncode: () => ProtobufValidateEncodeTransformer_1.ProtobufValidateEncodeTransformer.transform,
        // DECODE
        decode: () => ProtobufDecodeTransformer_1.ProtobufDecodeTransformer.transform,
        assertDecode: () => ProtobufAssertDecodeTransformer_1.ProtobufAssertDecodeTransformer.transform,
        isDecode: () => ProtobufIsDecodeTransformer_1.ProtobufIsDecodeTransformer.transform,
        validateDecode: () => ProtobufValidateDecodeTransformer_1.ProtobufValidateDecodeTransformer.transform,
        // FACTORIES
        createEncode: () => CreateProtobufEncodeTransformer_1.CreateProtobufEncodeTransformer.transform,
        createAssertEncode: () => CreateProtobufAssertEncodeTransformer_1.CreateProtobufAssertEncodeTransformer.transform,
        createIsEncode: () => CreateProtobufIsEncodeTransformer_1.CreateProtobufIsEncodeTransformer.transform,
        createValidateEncode: () => CreateProtobufValidateEncodeTransformer_1.CreateProtobufValidateEncodeTransformer.transform,
        createDecode: () => CreateProtobufDecodeTransformer_1.CreateProtobufDecodeTransformer.transform,
        createAssertDecode: () => CreateProtobufAssertDecodeTransformer_1.CreateProtobufAssertDecodeTransformer.transform,
        createIsDecode: () => CreateProtobufIsDecodeTransformer_1.CreateProtobufIsDecodeTransformer.transform,
        createValidateDecode: () => CreateProtobufValidateDecodeTransformer_1.CreateProtobufValidateDecodeTransformer.transform,
    },
    misc: {
        literals: () => (project) => () => MiscLiteralsTransformer_1.MiscLiteralsTransformer.transform(project),
        // CLONE
        clone: () => MiscCloneTransformer_1.MiscCloneTransformer.transform,
        assertClone: () => MiscAssertCloneTransformer_1.MiscAssertCloneTransformer.transform,
        isClone: () => MiscIsCloneTransformer_1.MiscIsCloneTransformer.transform,
        validateClone: () => MiscValidateCloneTransformer_1.MiscValidateCloneTransformer.transform,
        // PRUNE
        prune: () => MiscPruneTransformer_1.MiscPruneTransformer.transform,
        assertPrune: () => MiscAssertPruneTransformer_1.MiscAssertPruneTransformer.transform,
        isPrune: () => MiscIsPruneTransformer_1.MiscIsPruneTransformer.transform,
        validatePrune: () => MiscValidatePruneTransformer_1.MiscValidatePruneTransformer.transform,
        // FACTORIES
        createClone: () => MiscCreateCloneTransformer_1.MiscCreateCloneTransformer.transform,
        createAssertClone: () => MiscCreateAssertCloneTransformer_1.MiscCreateAssertCloneTransformer.transform,
        createIsClone: () => MiscCreateIsCloneTransformer_1.MiscCreateIsCloneTransformer.transform,
        createValidateClone: () => MiscCreateValidateCloneTransformer_1.MiscCreateValidateCloneTransformer.transform,
        createPrune: () => MiscCreatePruneTransformer_1.MiscCreatePruneTransformer.transform,
        createAssertPrune: () => MiscCreateAssertPruneTransformer_1.MiscCreateAssertPruneTransformer.transform,
        createIsPrune: () => MiscCreateIsPruneTransformer_1.MiscCreateIsPruneTransformer.transform,
        createValidatePrune: () => MiscCreateValidatePruneTransformer_1.MiscCreateValidatePruneTransformer.transform,
    },
};
