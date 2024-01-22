import path from "path";
import ts from "typescript";

import { NamingConvention } from "../utils/NamingConvention";

import { IProject } from "./IProject";
import { AssertTransformer } from "./features/AssertTransformer";
import { CreateAssertTransformer } from "./features/CreateAssertTransformer";
import { CreateIsTransformer } from "./features/CreateIsTransformer";
import { CreateRandomTransformer } from "./features/CreateRandomTransformer";
import { CreateValidateTransformer } from "./features/CreateValidateTransformer";
import { IsTransformer } from "./features/IsTransformer";
import { RandomTransformer } from "./features/RandomTransformer";
import { ValidateTransformer } from "./features/ValidateTransformer";
import { CreateHttpAssertHeadersTransformer } from "./features/http/CreateHttpAssertHeadersTransformer";
import { CreateHttpAssertQueryTransformer } from "./features/http/CreateHttpAssertQueryTransformer";
import { CreateHttpHeadersTransformer } from "./features/http/CreateHttpHeadersTransformer";
import { CreateHttpIsHeadersTransformer } from "./features/http/CreateHttpIsHeadersTransformer";
import { CreateHttpIsQueryTransformer } from "./features/http/CreateHttpIsQueryTransformer";
import { CreateHttpParameterTransformer } from "./features/http/CreateHttpParameterTransformer";
import { CreateHttpQueryTransformer } from "./features/http/CreateHttpQueryTransformer";
import { CreateHttpValidateHeadersTransformer } from "./features/http/CreateHttpValidateHeadersTransformer";
import { CreateHttpValidateQueryTransformer } from "./features/http/CreateHttpValidateQueryTransformer";
import { HttpAssertHeadersTransformer } from "./features/http/HttpAssertHeadersTransformer";
import { HttpAssertQueryTransformer } from "./features/http/HttpAssertQueryTransformer";
import { HttpHeadersTransformer } from "./features/http/HttpHeadersTransformer";
import { HttpIsHeadersTransformer } from "./features/http/HttpIsHeadersTransformer";
import { HttpIsQueryTransformer } from "./features/http/HttpIsQueryTransformer";
import { HttpParameterTransformer } from "./features/http/HttpParameterTransformer";
import { HttpQueryTransformer } from "./features/http/HttpQueryTransformer";
import { HttpValidateHeadersTransformer } from "./features/http/HttpValidateHeadersTransformer";
import { HttpValidateQueryTransformer } from "./features/http/HttpValidateQueryTransformer";
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
import { NotationAssertGeneralTransformer } from "./features/notations/NotationAssertGeneralTransformer";
import { NotationCreateAssertGeneralTransformer } from "./features/notations/NotationCreateAssertGeneralTransformer";
import { NotationCreateGeneralTransformer } from "./features/notations/NotationCreateGeneralTransformer";
import { NotationCreateIsGeneralTransformer } from "./features/notations/NotationCreateIsGeneralTransformer";
import { NotationCreateValidateGeneralTransformer } from "./features/notations/NotationCreateValidateGeneralTransformer";
import { NotationGeneralTransformer } from "./features/notations/NotationGeneralTransformer";
import { NotationIsGeneralTransformer } from "./features/notations/NotationIsGeneralTransformer";
import { NotationValidateGeneralTransformer } from "./features/notations/NotationValidateGeneralTransformer";
import { ProtobufAssertDecodeTransformer } from "./features/protobuf/ProtobufAssertDecodeTransformer";
import { ProtobufAssertEncodeTransformer } from "./features/protobuf/ProtobufAssertEncodeTransformer";
import { ProtobufCreateAssertDecodeTransformer } from "./features/protobuf/ProtobufCreateAssertDecodeTransformer";
import { ProtobufCreateAssertEncodeTransformer } from "./features/protobuf/ProtobufCreateAssertEncodeTransformer";
import { ProtobufCreateDecodeTransformer } from "./features/protobuf/ProtobufCreateDecodeTransformer";
import { ProtobufCreateEncodeTransformer } from "./features/protobuf/ProtobufCreateEncodeTransformer";
import { ProtobufCreateIsDecodeTransformer } from "./features/protobuf/ProtobufCreateIsDecodeTransformer";
import { ProtobufCreateIsEncodeTransformer } from "./features/protobuf/ProtobufCreateIsEncodeTransformer";
import { ProtobufCreateValidateDecodeTransformer } from "./features/protobuf/ProtobufCreateValidateDecodeTransformer";
import { ProtobufCreateValidateEncodeTransformer } from "./features/protobuf/ProtobufCreateValidateEncodeTransformer";
import { ProtobufDecodeTransformer } from "./features/protobuf/ProtobufDecodeTransformer";
import { ProtobufEncodeTransformer } from "./features/protobuf/ProtobufEncodeTransformer";
import { ProtobufIsDecodeTransformer } from "./features/protobuf/ProtobufIsDecodeTransformer";
import { ProtobufIsEncodeTransformer } from "./features/protobuf/ProtobufIsEncodeTransformer";
import { ProtobufMessageTransformer } from "./features/protobuf/ProtobufMessageTransformer";
import { ProtobufValidateDecodeTransformer } from "./features/protobuf/ProtobufValidateDecodeTransformer";
import { ProtobufValidateEncodeTransformer } from "./features/protobuf/ProtobufValidateEncodeTransformer";
import { ReflectMetadataTransformer } from "./features/reflect/ReflectMetadataTransformer";

export namespace CallExpressionTransformer {
  export const transform =
    (project: IProject) =>
    (expression: ts.CallExpression): ts.Expression | null => {
      //----
      // VALIDATIONS
      //----
      // SIGNATURE DECLARATION
      const funtorDetails = getFunctorModuleName(project, expression);

      if(!funtorDetails) return expression;

      // FIND TRANSFORMER
      const functor: (() => Task) | undefined = FUNCTORS[funtorDetails.module]?.[funtorDetails.name];
      if (functor === undefined) return expression;

      // RETURNS WITH TRANSFORMATION
      const result: ts.Expression | null = functor()(project)(
        expression.expression,
      )(expression);
      return result ?? expression;
    };
}

const isTarget = (location: string): boolean => {
  const files: string[] = Object.keys(FUNCTORS);
  return files.some((f) =>
    location.includes(path.join("node_modules", "typia", "lib", `${f}.d.ts`)),
  );
};

function getFunctorModuleName(project: IProject, expression: ts.CallExpression): {module: string, name: string} | undefined {
  const declaration: ts.Declaration | undefined =
    project.checker.getResolvedSignature(expression)?.declaration;


  if (!declaration) {
    const expressionText = expression.expression.getText();
    const expressionTextParts = expressionText.split(".");
    const isTypia = expressionTextParts[0] == "typia";
    if(!isTypia) return undefined;

    const module = expressionTextParts.length === 3 ? expressionTextParts[1] : 'module';
    const name = expressionTextParts.length === 3 ? expressionTextParts[2] : expressionTextParts[1];

    if(!module || !name) return undefined;
    return { module, name };
  }

  // FILE PATH
  const location: string = path.resolve(
    declaration.getSourceFile().fileName,
  );
  if (!isTarget(location)) return undefined;

  //----
  // TRANSFORMATION
  //----
  // FUNCTION NAME
  const module: string = location.split(path.sep).at(-1)!.split(".")[0]!;
  const { name } = project.checker.getTypeAtLocation(declaration).symbol;
  return { module, name };
}

type Task = (
  project: IProject,
) => (
  modulo: ts.LeftHandSideExpression,
) => (expression: ts.CallExpression) => ts.Expression | null;

const FUNCTORS: Record<string, Record<string, () => Task>> = {
  module: {
    // BASIC
    assert: () => AssertTransformer.transform({ equals: false, guard: false }),
    assertGuard: () =>
      AssertTransformer.transform({ equals: false, guard: true }),
    assertType: () =>
      AssertTransformer.transform({ equals: false, guard: false }),
    is: () => IsTransformer.transform(false),
    validate: () => ValidateTransformer.transform(false),

    // STRICT
    assertEquals: () =>
      AssertTransformer.transform({ equals: true, guard: false }),
    assertGuardEquals: () =>
      AssertTransformer.transform({ equals: true, guard: true }),
    equals: () => IsTransformer.transform(true),
    validateEquals: () => ValidateTransformer.transform(true),

    // RANDOM + INTERNAL
    random: () => RandomTransformer.transform,
    metadata: () => ReflectMetadataTransformer.transform,

    // FACTORIES
    createAssert: () =>
      CreateAssertTransformer.transform({ equals: false, guard: false }),
    createAssertGuard: () =>
      CreateAssertTransformer.transform({ equals: false, guard: true }),
    createAssertType: () =>
      CreateAssertTransformer.transform({ equals: false, guard: false }),
    createIs: () => CreateIsTransformer.transform(false),
    createValidate: () => CreateValidateTransformer.transform(false),
    createAssertEquals: () =>
      CreateAssertTransformer.transform({ equals: true, guard: false }),
    createAssertGuardEquals: () =>
      CreateAssertTransformer.transform({ equals: true, guard: true }),
    createEquals: () => CreateIsTransformer.transform(true),
    createValidateEquals: () => CreateValidateTransformer.transform(true),
    createRandom: () => CreateRandomTransformer.transform,
  },
  http: {
    // HEADERS
    headers: () => HttpHeadersTransformer.transform,
    isHeaders: () => HttpIsHeadersTransformer.transform,
    assertHeaders: () => HttpAssertHeadersTransformer.transform,
    validateHeaders: () => HttpValidateHeadersTransformer.transform,

    // PARAMETER
    parameter: () => HttpParameterTransformer.transform,

    // QUERY
    query: () => HttpQueryTransformer.transform,
    isQuery: () => HttpIsQueryTransformer.transform,
    assertQuery: () => HttpAssertQueryTransformer.transform,
    validateQuery: () => HttpValidateQueryTransformer.transform,

    // FACTORIES
    createHeaders: () => CreateHttpHeadersTransformer.transform,
    createIsHeaders: () => CreateHttpIsHeadersTransformer.transform,
    createAssertHeaders: () => CreateHttpAssertHeadersTransformer.transform,
    createValidateHeaders: () => CreateHttpValidateHeadersTransformer.transform,
    createParameter: () => CreateHttpParameterTransformer.transform,
    createQuery: () => CreateHttpQueryTransformer.transform,
    createIsQuery: () => CreateHttpIsQueryTransformer.transform,
    createAssertQuery: () => CreateHttpAssertQueryTransformer.transform,
    createValidateQuery: () => CreateHttpValidateQueryTransformer.transform,
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
    createAssertStringify: () => JsonCreateAssertStringifyTransformer.transform,
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
    createEncode: () => ProtobufCreateEncodeTransformer.transform,
    createAssertEncode: () => ProtobufCreateAssertEncodeTransformer.transform,
    createIsEncode: () => ProtobufCreateIsEncodeTransformer.transform,
    createValidateEncode: () =>
      ProtobufCreateValidateEncodeTransformer.transform,
    createDecode: () => ProtobufCreateDecodeTransformer.transform,
    createAssertDecode: () => ProtobufCreateAssertDecodeTransformer.transform,
    createIsDecode: () => ProtobufCreateIsDecodeTransformer.transform,
    createValidateDecode: () =>
      ProtobufCreateValidateDecodeTransformer.transform,
  },
  reflect: {
    metadata: () => ReflectMetadataTransformer.transform,
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
  notations: {
    // CAMEL
    camel: () => NotationGeneralTransformer.transform(NamingConvention.camel),
    assertCamel: () =>
      NotationAssertGeneralTransformer.transform(NamingConvention.camel),
    isCamel: () =>
      NotationIsGeneralTransformer.transform(NamingConvention.camel),
    validateCamel: () =>
      NotationValidateGeneralTransformer.transform(NamingConvention.camel),

    // PASCAL
    pascal: () => NotationGeneralTransformer.transform(NamingConvention.pascal),
    assertPascal: () =>
      NotationAssertGeneralTransformer.transform(NamingConvention.pascal),
    isPascal: () =>
      NotationIsGeneralTransformer.transform(NamingConvention.pascal),
    validatePascal: () =>
      NotationValidateGeneralTransformer.transform(NamingConvention.pascal),

    // SNAKE
    snake: () => NotationGeneralTransformer.transform(NamingConvention.snake),
    assertSnake: () =>
      NotationAssertGeneralTransformer.transform(NamingConvention.snake),
    isSnake: () =>
      NotationIsGeneralTransformer.transform(NamingConvention.snake),
    validateSnake: () =>
      NotationValidateGeneralTransformer.transform(NamingConvention.snake),

    // FACTORIES
    createCamel: () =>
      NotationCreateGeneralTransformer.transform(NamingConvention.camel),
    createAssertCamel: () =>
      NotationCreateAssertGeneralTransformer.transform(NamingConvention.camel),
    createIsCamel: () =>
      NotationCreateIsGeneralTransformer.transform(NamingConvention.camel),
    createValidateCamel: () =>
      NotationCreateValidateGeneralTransformer.transform(
        NamingConvention.camel,
      ),
    createPascal: () =>
      NotationCreateGeneralTransformer.transform(NamingConvention.pascal),
    createAssertPascal: () =>
      NotationCreateAssertGeneralTransformer.transform(NamingConvention.pascal),
    createIsPascal: () =>
      NotationCreateIsGeneralTransformer.transform(NamingConvention.pascal),
    createValidatePascal: () =>
      NotationCreateValidateGeneralTransformer.transform(
        NamingConvention.pascal,
      ),
    createSnake: () =>
      NotationCreateGeneralTransformer.transform(NamingConvention.snake),
    createAssertSnake: () =>
      NotationCreateAssertGeneralTransformer.transform(NamingConvention.snake),
    createIsSnake: () =>
      NotationCreateIsGeneralTransformer.transform(NamingConvention.snake),
    createValidateSnake: () =>
      NotationCreateValidateGeneralTransformer.transform(
        NamingConvention.snake,
      ),
  },
};
