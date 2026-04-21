"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallExpressionTransformer = void 0;
const core_1 = require("@typia/core");
const utils_1 = require("@typia/utils");
const path_1 = __importDefault(require("path"));
const AssertTransformer_1 = require("./features/AssertTransformer");
const CreateAssertTransformer_1 = require("./features/CreateAssertTransformer");
const CreateIsTransformer_1 = require("./features/CreateIsTransformer");
const CreateRandomTransformer_1 = require("./features/CreateRandomTransformer");
const CreateValidateTransformer_1 = require("./features/CreateValidateTransformer");
const IsTransformer_1 = require("./features/IsTransformer");
const RandomTransformer_1 = require("./features/RandomTransformer");
const ValidateTransformer_1 = require("./features/ValidateTransformer");
const FunctionalGenericTransformer_1 = require("./features/functional/FunctionalGenericTransformer");
const CreateHttpAssertFormDataTransformer_1 = require("./features/http/CreateHttpAssertFormDataTransformer");
const CreateHttpAssertHeadersTransformer_1 = require("./features/http/CreateHttpAssertHeadersTransformer");
const CreateHttpAssertQueryTransformer_1 = require("./features/http/CreateHttpAssertQueryTransformer");
const CreateHttpFormDataTransformer_1 = require("./features/http/CreateHttpFormDataTransformer");
const CreateHttpHeadersTransformer_1 = require("./features/http/CreateHttpHeadersTransformer");
const CreateHttpIsFormDataTransformer_1 = require("./features/http/CreateHttpIsFormDataTransformer");
const CreateHttpIsHeadersTransformer_1 = require("./features/http/CreateHttpIsHeadersTransformer");
const CreateHttpIsQueryTransformer_1 = require("./features/http/CreateHttpIsQueryTransformer");
const CreateHttpParameterTransformer_1 = require("./features/http/CreateHttpParameterTransformer");
const CreateHttpQueryTransformer_1 = require("./features/http/CreateHttpQueryTransformer");
const CreateHttpValidateFormDataTransformer_1 = require("./features/http/CreateHttpValidateFormDataTransformer");
const CreateHttpValidateHeadersTransformer_1 = require("./features/http/CreateHttpValidateHeadersTransformer");
const CreateHttpValidateQueryTransformer_1 = require("./features/http/CreateHttpValidateQueryTransformer");
const HttpAssertFormDataTransformer_1 = require("./features/http/HttpAssertFormDataTransformer");
const HttpAssertHeadersTransformer_1 = require("./features/http/HttpAssertHeadersTransformer");
const HttpAssertQueryTransformer_1 = require("./features/http/HttpAssertQueryTransformer");
const HttpFormDataTransformer_1 = require("./features/http/HttpFormDataTransformer");
const HttpHeadersTransformer_1 = require("./features/http/HttpHeadersTransformer");
const HttpIsFormDataTransformer_1 = require("./features/http/HttpIsFormDataTransformer");
const HttpIsHeadersTransformer_1 = require("./features/http/HttpIsHeadersTransformer");
const HttpIsQueryTransformer_1 = require("./features/http/HttpIsQueryTransformer");
const HttpParameterTransformer_1 = require("./features/http/HttpParameterTransformer");
const HttpQueryTransformer_1 = require("./features/http/HttpQueryTransformer");
const HttpValidateFormDataTransformer_1 = require("./features/http/HttpValidateFormDataTransformer");
const HttpValidateHeadersTransformer_1 = require("./features/http/HttpValidateHeadersTransformer");
const HttpValidateQueryTransformer_1 = require("./features/http/HttpValidateQueryTransformer");
const JsonApplicationTransformer_1 = require("./features/json/JsonApplicationTransformer");
// import { JsonApplicationTransformer } from "./features/json/JsonApplicationTransformer";
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
const JsonSchemaTransformer_1 = require("./features/json/JsonSchemaTransformer");
const JsonSchemasTransformer_1 = require("./features/json/JsonSchemasTransformer");
const JsonStringifyTransformer_1 = require("./features/json/JsonStringifyTransformer");
const JsonValidateParseTransformer_1 = require("./features/json/JsonValidateParseTransformer");
const JsonValidateStringifyTransformer_1 = require("./features/json/JsonValidateStringifyTransformer");
const LlmApplicationTransformer_1 = require("./features/llm/LlmApplicationTransformer");
const LlmCoerceTransformer_1 = require("./features/llm/LlmCoerceTransformer");
const LlmControllerTransformer_1 = require("./features/llm/LlmControllerTransformer");
const LlmCreateCoerceTransformer_1 = require("./features/llm/LlmCreateCoerceTransformer");
const LlmCreateParseTransformer_1 = require("./features/llm/LlmCreateParseTransformer");
const LlmParametersTransformer_1 = require("./features/llm/LlmParametersTransformer");
const LlmParseTransformer_1 = require("./features/llm/LlmParseTransformer");
const LlmSchemaTransformer_1 = require("./features/llm/LlmSchemaTransformer");
const LlmStructuredOutputTransformer_1 = require("./features/llm/LlmStructuredOutputTransformer");
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
const NotationAssertGeneralTransformer_1 = require("./features/notations/NotationAssertGeneralTransformer");
const NotationCreateAssertGeneralTransformer_1 = require("./features/notations/NotationCreateAssertGeneralTransformer");
const NotationCreateGeneralTransformer_1 = require("./features/notations/NotationCreateGeneralTransformer");
const NotationCreateIsGeneralTransformer_1 = require("./features/notations/NotationCreateIsGeneralTransformer");
const NotationCreateValidateGeneralTransformer_1 = require("./features/notations/NotationCreateValidateGeneralTransformer");
const NotationGeneralTransformer_1 = require("./features/notations/NotationGeneralTransformer");
const NotationIsGeneralTransformer_1 = require("./features/notations/NotationIsGeneralTransformer");
const NotationValidateGeneralTransformer_1 = require("./features/notations/NotationValidateGeneralTransformer");
const ProtobufAssertDecodeTransformer_1 = require("./features/protobuf/ProtobufAssertDecodeTransformer");
const ProtobufAssertEncodeTransformer_1 = require("./features/protobuf/ProtobufAssertEncodeTransformer");
const ProtobufCreateAssertDecodeTransformer_1 = require("./features/protobuf/ProtobufCreateAssertDecodeTransformer");
const ProtobufCreateAssertEncodeTransformer_1 = require("./features/protobuf/ProtobufCreateAssertEncodeTransformer");
const ProtobufCreateDecodeTransformer_1 = require("./features/protobuf/ProtobufCreateDecodeTransformer");
const ProtobufCreateEncodeTransformer_1 = require("./features/protobuf/ProtobufCreateEncodeTransformer");
const ProtobufCreateIsDecodeTransformer_1 = require("./features/protobuf/ProtobufCreateIsDecodeTransformer");
const ProtobufCreateIsEncodeTransformer_1 = require("./features/protobuf/ProtobufCreateIsEncodeTransformer");
const ProtobufCreateValidateDecodeTransformer_1 = require("./features/protobuf/ProtobufCreateValidateDecodeTransformer");
const ProtobufCreateValidateEncodeTransformer_1 = require("./features/protobuf/ProtobufCreateValidateEncodeTransformer");
const ProtobufDecodeTransformer_1 = require("./features/protobuf/ProtobufDecodeTransformer");
const ProtobufEncodeTransformer_1 = require("./features/protobuf/ProtobufEncodeTransformer");
const ProtobufIsDecodeTransformer_1 = require("./features/protobuf/ProtobufIsDecodeTransformer");
const ProtobufIsEncodeTransformer_1 = require("./features/protobuf/ProtobufIsEncodeTransformer");
const ProtobufMessageTransformer_1 = require("./features/protobuf/ProtobufMessageTransformer");
const ProtobufValidateDecodeTransformer_1 = require("./features/protobuf/ProtobufValidateDecodeTransformer");
const ProtobufValidateEncodeTransformer_1 = require("./features/protobuf/ProtobufValidateEncodeTransformer");
const ReflectMetadataTransformer_1 = require("./features/reflect/ReflectMetadataTransformer");
const ReflectNameTransformer_1 = require("./features/reflect/ReflectNameTransformer");
const ReflectSchemaTransformer_1 = require("./features/reflect/ReflectSchemaTransformer");
const ReflectSchemasTransformer_1 = require("./features/reflect/ReflectSchemasTransformer");
/**
 * Transforms `typia.*` function call expressions.
 *
 * Routes typia function calls (e.g., `typia.is<T>()`, `typia.assert<T>()`) to
 * their corresponding transformers. Identifies calls by resolving the
 * declaration signature and matching against registered functor map.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
var CallExpressionTransformer;
(function (CallExpressionTransformer) {
    CallExpressionTransformer.transform = (props) => {
        var _a, _b;
        //----
        // VALIDATIONS
        //----
        // SIGNATURE DECLARATION
        const declaration = (_a = props.context.checker.getResolvedSignature(props.expression)) === null || _a === void 0 ? void 0 : _a.declaration;
        if (!declaration)
            return props.expression;
        // FILE PATH
        const location = path_1.default.resolve(declaration.getSourceFile().fileName);
        if (isTarget(location) === false)
            return props.expression;
        //----
        // TRANSFORMATION
        //----
        // FUNCTION NAME
        const module = location.split(path_1.default.sep).at(-1).split(".")[0];
        const { name } = props.context.checker.getTypeAtLocation(declaration).symbol;
        // FIND TRANSFORMER
        const functor = (_b = FUNCTORS[module]) === null || _b === void 0 ? void 0 : _b[name];
        if (functor === undefined)
            return props.expression;
        // RETURNS WITH TRANSFORMATION
        const result = functor()({
            context: props.context,
            modulo: props.expression.expression,
            expression: props.expression,
        });
        return result !== null && result !== void 0 ? result : props.expression;
    };
    const isTarget = (location) => {
        const files = Object.keys(FUNCTORS);
        return files.some((f) => location.includes(path_1.default.join("typia", "lib", `${f}.d.ts`)) ||
            location.includes(path_1.default.join("typia", "src", `${f}.ts`)));
    };
})(CallExpressionTransformer || (exports.CallExpressionTransformer = CallExpressionTransformer = {}));
const FUNCTORS = {
    module: {
        // BASIC
        assert: () => AssertTransformer_1.AssertTransformer.transform({ equals: false, guard: false }),
        assertGuard: () => AssertTransformer_1.AssertTransformer.transform({ equals: false, guard: true }),
        assertType: () => AssertTransformer_1.AssertTransformer.transform({ equals: false, guard: false }),
        is: () => IsTransformer_1.IsTransformer.transform({ equals: false }),
        validate: () => ValidateTransformer_1.ValidateTransformer.transform({ equals: false }),
        // STRICT
        assertEquals: () => AssertTransformer_1.AssertTransformer.transform({ equals: true, guard: false }),
        assertGuardEquals: () => AssertTransformer_1.AssertTransformer.transform({ equals: true, guard: true }),
        equals: () => IsTransformer_1.IsTransformer.transform({ equals: true }),
        validateEquals: () => ValidateTransformer_1.ValidateTransformer.transform({ equals: true }),
        // RANDOM + INTERNAL
        random: () => RandomTransformer_1.RandomTransformer.transform,
        metadata: () => ReflectMetadataTransformer_1.ReflectMetadataTransformer.transform,
        // FACTORIES
        createAssert: () => CreateAssertTransformer_1.CreateAssertTransformer.transform({ equals: false, guard: false }),
        createAssertGuard: () => CreateAssertTransformer_1.CreateAssertTransformer.transform({ equals: false, guard: true }),
        createAssertType: () => CreateAssertTransformer_1.CreateAssertTransformer.transform({ equals: false, guard: false }),
        createIs: () => CreateIsTransformer_1.CreateIsTransformer.transform({ equals: false }),
        createValidate: () => CreateValidateTransformer_1.CreateValidateTransformer.transform({
            equals: false,
            standardSchema: true,
        }),
        createAssertEquals: () => CreateAssertTransformer_1.CreateAssertTransformer.transform({ equals: true, guard: false }),
        createAssertGuardEquals: () => CreateAssertTransformer_1.CreateAssertTransformer.transform({ equals: true, guard: true }),
        createEquals: () => CreateIsTransformer_1.CreateIsTransformer.transform({ equals: true }),
        createValidateEquals: () => CreateValidateTransformer_1.CreateValidateTransformer.transform({
            equals: true,
            standardSchema: true,
        }),
        createRandom: () => CreateRandomTransformer_1.CreateRandomTransformer.transform,
    },
    functional: {
        // ASSERTIONS
        assertFunction: () => FunctionalGenericTransformer_1.FunctionalGenericTransformer.transform({
            method: "assertFunction",
            config: {
                equals: false,
            },
            programmer: core_1.FunctionalAssertFunctionProgrammer.write,
        }),
        assertParameters: () => FunctionalGenericTransformer_1.FunctionalGenericTransformer.transform({
            method: "assertParameters",
            config: {
                equals: false,
            },
            programmer: core_1.FunctionalAssertParametersProgrammer.write,
        }),
        assertReturn: () => FunctionalGenericTransformer_1.FunctionalGenericTransformer.transform({
            method: "assertReturn",
            config: {
                equals: false,
            },
            programmer: core_1.FunctionAssertReturnProgrammer.write,
        }),
        assertEqualsFunction: () => FunctionalGenericTransformer_1.FunctionalGenericTransformer.transform({
            method: "assertEqualsFunction",
            config: {
                equals: true,
            },
            programmer: core_1.FunctionalAssertFunctionProgrammer.write,
        }),
        assertEqualsParameters: () => FunctionalGenericTransformer_1.FunctionalGenericTransformer.transform({
            method: "assertEqualsParameters",
            config: {
                equals: true,
            },
            programmer: core_1.FunctionalAssertParametersProgrammer.write,
        }),
        assertEqualsReturn: () => FunctionalGenericTransformer_1.FunctionalGenericTransformer.transform({
            method: "assertEqualsReturn",
            config: {
                equals: true,
            },
            programmer: core_1.FunctionAssertReturnProgrammer.write,
        }),
        // IS
        isFunction: () => FunctionalGenericTransformer_1.FunctionalGenericTransformer.transform({
            method: "isFunction",
            config: {
                equals: false,
            },
            programmer: core_1.FunctionalIsFunctionProgrammer.write,
        }),
        isParameters: () => FunctionalGenericTransformer_1.FunctionalGenericTransformer.transform({
            method: "isParameters",
            config: {
                equals: false,
            },
            programmer: core_1.FunctionalIsParametersProgrammer.write,
        }),
        isReturn: () => FunctionalGenericTransformer_1.FunctionalGenericTransformer.transform({
            method: "isReturn",
            config: {
                equals: false,
            },
            programmer: core_1.FunctionalIsReturnProgrammer.write,
        }),
        equalsFunction: () => FunctionalGenericTransformer_1.FunctionalGenericTransformer.transform({
            method: "equalsFunction",
            config: {
                equals: true,
            },
            programmer: core_1.FunctionalIsFunctionProgrammer.write,
        }),
        equalsParameters: () => FunctionalGenericTransformer_1.FunctionalGenericTransformer.transform({
            method: "equalsParameters",
            config: {
                equals: true,
            },
            programmer: core_1.FunctionalIsParametersProgrammer.write,
        }),
        equalsReturn: () => FunctionalGenericTransformer_1.FunctionalGenericTransformer.transform({
            method: "equalsReturn",
            config: {
                equals: true,
            },
            programmer: core_1.FunctionalIsReturnProgrammer.write,
        }),
        // VALIDATIONS
        validateFunction: () => FunctionalGenericTransformer_1.FunctionalGenericTransformer.transform({
            method: "validateFunction",
            config: {
                equals: false,
            },
            programmer: core_1.FunctionalValidateFunctionProgrammer.write,
        }),
        validateParameters: () => FunctionalGenericTransformer_1.FunctionalGenericTransformer.transform({
            method: "validateParameters",
            config: {
                equals: false,
            },
            programmer: core_1.FunctionalValidateParametersProgrammer.write,
        }),
        validateReturn: () => FunctionalGenericTransformer_1.FunctionalGenericTransformer.transform({
            method: "validateReturn",
            config: {
                equals: false,
            },
            programmer: core_1.FunctionalValidateReturnProgrammer.write,
        }),
        validateEqualsFunction: () => FunctionalGenericTransformer_1.FunctionalGenericTransformer.transform({
            method: "validateEqualsFunction",
            config: {
                equals: true,
            },
            programmer: core_1.FunctionalValidateFunctionProgrammer.write,
        }),
        validateEqualsParameters: () => FunctionalGenericTransformer_1.FunctionalGenericTransformer.transform({
            method: "validateEqualsParameters",
            config: {
                equals: true,
            },
            programmer: core_1.FunctionalValidateParametersProgrammer.write,
        }),
        validateEqualsReturn: () => FunctionalGenericTransformer_1.FunctionalGenericTransformer.transform({
            method: "validateEqualsReturn",
            config: {
                equals: true,
            },
            programmer: core_1.FunctionalValidateReturnProgrammer.write,
        }),
    },
    http: {
        // FORM-DATA
        formData: () => HttpFormDataTransformer_1.HttpFormDataTransformer.transform,
        isFormData: () => HttpIsFormDataTransformer_1.HttpIsFormDataTransformer.transform,
        assertFormData: () => HttpAssertFormDataTransformer_1.HttpAssertFormDataTransformer.transform,
        validateFormData: () => HttpValidateFormDataTransformer_1.HttpValidateFormDataTransformer.transform,
        // HEADERS
        headers: () => HttpHeadersTransformer_1.HttpHeadersTransformer.transform,
        isHeaders: () => HttpIsHeadersTransformer_1.HttpIsHeadersTransformer.transform,
        assertHeaders: () => HttpAssertHeadersTransformer_1.HttpAssertHeadersTransformer.transform,
        validateHeaders: () => HttpValidateHeadersTransformer_1.HttpValidateHeadersTransformer.transform,
        // PARAMETER
        parameter: () => HttpParameterTransformer_1.HttpParameterTransformer.transform,
        // QUERY
        query: () => HttpQueryTransformer_1.HttpQueryTransformer.transform,
        isQuery: () => HttpIsQueryTransformer_1.HttpIsQueryTransformer.transform,
        assertQuery: () => HttpAssertQueryTransformer_1.HttpAssertQueryTransformer.transform,
        validateQuery: () => HttpValidateQueryTransformer_1.HttpValidateQueryTransformer.transform,
        // FACTORIES
        createFormData: () => CreateHttpFormDataTransformer_1.CreateHttpFormDataTransformer.transform,
        createIsFormData: () => CreateHttpIsFormDataTransformer_1.CreateHttpIsFormDataTransformer.transform,
        createAssertFormData: () => CreateHttpAssertFormDataTransformer_1.CreateHttpAssertFormDataTransformer.transform,
        createValidateFormData: () => CreateHttpValidateFormDataTransformer_1.CreateHttpValidateFormDataTransformer.transform,
        createHeaders: () => CreateHttpHeadersTransformer_1.CreateHttpHeadersTransformer.transform,
        createIsHeaders: () => CreateHttpIsHeadersTransformer_1.CreateHttpIsHeadersTransformer.transform,
        createAssertHeaders: () => CreateHttpAssertHeadersTransformer_1.CreateHttpAssertHeadersTransformer.transform,
        createValidateHeaders: () => CreateHttpValidateHeadersTransformer_1.CreateHttpValidateHeadersTransformer.transform,
        createParameter: () => CreateHttpParameterTransformer_1.CreateHttpParameterTransformer.transform,
        createQuery: () => CreateHttpQueryTransformer_1.CreateHttpQueryTransformer.transform,
        createIsQuery: () => CreateHttpIsQueryTransformer_1.CreateHttpIsQueryTransformer.transform,
        createAssertQuery: () => CreateHttpAssertQueryTransformer_1.CreateHttpAssertQueryTransformer.transform,
        createValidateQuery: () => CreateHttpValidateQueryTransformer_1.CreateHttpValidateQueryTransformer.transform,
    },
    llm: {
        controller: () => LlmControllerTransformer_1.LlmControllerTransformer.transform,
        applicationOfValidate: () => LlmApplicationTransformer_1.LlmApplicationTransformer.transform,
        application: () => LlmApplicationTransformer_1.LlmApplicationTransformer.transform,
        structuredOutput: () => LlmStructuredOutputTransformer_1.LlmStructuredOutputTransformer.transform,
        parameters: () => LlmParametersTransformer_1.LlmParametersTransformer.transform,
        schema: () => LlmSchemaTransformer_1.LlmSchemaTransformer.transform,
        parse: () => LlmParseTransformer_1.LlmParseTransformer.transform,
        createParse: () => LlmCreateParseTransformer_1.LlmCreateParseTransformer.transform,
        coerce: () => LlmCoerceTransformer_1.LlmCoerceTransformer.transform,
        createCoerce: () => LlmCreateCoerceTransformer_1.LlmCreateCoerceTransformer.transform,
    },
    json: {
        // METADATA
        schema: () => JsonSchemaTransformer_1.JsonSchemaTransformer.transform,
        schemas: () => JsonSchemasTransformer_1.JsonSchemasTransformer.transform,
        application: () => JsonApplicationTransformer_1.JsonApplicationTransformer.transform,
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
        createEncode: () => ProtobufCreateEncodeTransformer_1.ProtobufCreateEncodeTransformer.transform,
        createAssertEncode: () => ProtobufCreateAssertEncodeTransformer_1.ProtobufCreateAssertEncodeTransformer.transform,
        createIsEncode: () => ProtobufCreateIsEncodeTransformer_1.ProtobufCreateIsEncodeTransformer.transform,
        createValidateEncode: () => ProtobufCreateValidateEncodeTransformer_1.ProtobufCreateValidateEncodeTransformer.transform,
        createDecode: () => ProtobufCreateDecodeTransformer_1.ProtobufCreateDecodeTransformer.transform,
        createAssertDecode: () => ProtobufCreateAssertDecodeTransformer_1.ProtobufCreateAssertDecodeTransformer.transform,
        createIsDecode: () => ProtobufCreateIsDecodeTransformer_1.ProtobufCreateIsDecodeTransformer.transform,
        createValidateDecode: () => ProtobufCreateValidateDecodeTransformer_1.ProtobufCreateValidateDecodeTransformer.transform,
    },
    reflect: {
        metadata: () => ReflectMetadataTransformer_1.ReflectMetadataTransformer.transform,
        name: () => ReflectNameTransformer_1.ReflectNameTransformer.transform,
        schema: () => ReflectSchemaTransformer_1.ReflectSchemaTransformer.transform,
        schemas: () => ReflectSchemasTransformer_1.ReflectSchemasTransformer.transform,
    },
    misc: {
        literals: () => MiscLiteralsTransformer_1.MiscLiteralsTransformer.transform,
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
    notations: {
        // CAMEL
        camel: () => NotationGeneralTransformer_1.NotationGeneralTransformer.transform(utils_1.NamingConvention.camel),
        assertCamel: () => NotationAssertGeneralTransformer_1.NotationAssertGeneralTransformer.transform(utils_1.NamingConvention.camel),
        isCamel: () => NotationIsGeneralTransformer_1.NotationIsGeneralTransformer.transform(utils_1.NamingConvention.camel),
        validateCamel: () => NotationValidateGeneralTransformer_1.NotationValidateGeneralTransformer.transform(utils_1.NamingConvention.camel),
        // PASCAL
        pascal: () => NotationGeneralTransformer_1.NotationGeneralTransformer.transform(utils_1.NamingConvention.pascal),
        assertPascal: () => NotationAssertGeneralTransformer_1.NotationAssertGeneralTransformer.transform(utils_1.NamingConvention.pascal),
        isPascal: () => NotationIsGeneralTransformer_1.NotationIsGeneralTransformer.transform(utils_1.NamingConvention.pascal),
        validatePascal: () => NotationValidateGeneralTransformer_1.NotationValidateGeneralTransformer.transform(utils_1.NamingConvention.pascal),
        // SNAKE
        snake: () => NotationGeneralTransformer_1.NotationGeneralTransformer.transform(utils_1.NamingConvention.snake),
        assertSnake: () => NotationAssertGeneralTransformer_1.NotationAssertGeneralTransformer.transform(utils_1.NamingConvention.snake),
        isSnake: () => NotationIsGeneralTransformer_1.NotationIsGeneralTransformer.transform(utils_1.NamingConvention.snake),
        validateSnake: () => NotationValidateGeneralTransformer_1.NotationValidateGeneralTransformer.transform(utils_1.NamingConvention.snake),
        // FACTORIES
        createCamel: () => NotationCreateGeneralTransformer_1.NotationCreateGeneralTransformer.transform(utils_1.NamingConvention.camel),
        createAssertCamel: () => NotationCreateAssertGeneralTransformer_1.NotationCreateAssertGeneralTransformer.transform(utils_1.NamingConvention.camel),
        createIsCamel: () => NotationCreateIsGeneralTransformer_1.NotationCreateIsGeneralTransformer.transform(utils_1.NamingConvention.camel),
        createValidateCamel: () => NotationCreateValidateGeneralTransformer_1.NotationCreateValidateGeneralTransformer.transform(utils_1.NamingConvention.camel),
        createPascal: () => NotationCreateGeneralTransformer_1.NotationCreateGeneralTransformer.transform(utils_1.NamingConvention.pascal),
        createAssertPascal: () => NotationCreateAssertGeneralTransformer_1.NotationCreateAssertGeneralTransformer.transform(utils_1.NamingConvention.pascal),
        createIsPascal: () => NotationCreateIsGeneralTransformer_1.NotationCreateIsGeneralTransformer.transform(utils_1.NamingConvention.pascal),
        createValidatePascal: () => NotationCreateValidateGeneralTransformer_1.NotationCreateValidateGeneralTransformer.transform(utils_1.NamingConvention.pascal),
        createSnake: () => NotationCreateGeneralTransformer_1.NotationCreateGeneralTransformer.transform(utils_1.NamingConvention.snake),
        createAssertSnake: () => NotationCreateAssertGeneralTransformer_1.NotationCreateAssertGeneralTransformer.transform(utils_1.NamingConvention.snake),
        createIsSnake: () => NotationCreateIsGeneralTransformer_1.NotationCreateIsGeneralTransformer.transform(utils_1.NamingConvention.snake),
        createValidateSnake: () => NotationCreateValidateGeneralTransformer_1.NotationCreateValidateGeneralTransformer.transform(utils_1.NamingConvention.snake),
    },
};
//# sourceMappingURL=CallExpressionTransformer.js.map