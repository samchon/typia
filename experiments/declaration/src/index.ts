import typia from "typia";

/**
 * Every binding below is exported on purpose, and none of them carries a type
 * annotation.
 *
 * `declaration: true` makes TypeScript write a name for each inferred type, and
 * it may only use module specifiers this project can resolve. typia's own
 * dependencies are not among them once they sit in an isolated `node_modules`
 * layout, so a public return type that leaks one of them fails this build with
 * TS2742 (TS2883 since TypeScript 7) instead of reaching a consumer.
 *
 * `typia.createAssertGuard` and `typia.createAssertGuardEquals` are absent
 * because TypeScript refuses to infer an assertion guard at all: they always
 * carry an annotation, so they cannot reach the inference this file pins. Entry
 * points returning `T`, `boolean`, `string`, or `void` are absent for the same
 * kind of reason: nothing borrowed can reach their declarations. The census
 * pass in `test-portable-declarations.mjs` is what makes coverage complete;
 * this file proves the emit really names what the census says it can.
 */

interface IMember {
  id: string;
  name: string;
  age: number;
}

interface IPoint {
  x: number;
  y: number;
}

interface IOperands {
  a: number;
  b: number;
}

interface IOperationResult {
  value: number;
}

interface ICalculator {
  plus(props: IOperands): IOperationResult;
  minus(props: IOperands): IOperationResult;
}

class Calculator implements ICalculator {
  public plus(props: IOperands): IOperationResult {
    return { value: props.a + props.b };
  }
  public minus(props: IOperands): IOperationResult {
    return { value: props.a - props.b };
  }
}

class Point {
  public x: number = 0;
  public y: number = 0;
}

/* -----------------------------------------------------------
  MAIN MODULE
----------------------------------------------------------- */
export const assertMember = typia.createAssert<IMember>();
export const assertEqualsMember = typia.createAssertEquals<IMember>();
export const isMember = typia.createIs<IMember>();
export const equalsMember = typia.createEquals<IMember>();
export const shallowMember = typia.createShallow<IMember>();
export const validateMember = typia.createValidate<IMember>();
export const validateEqualsMember = typia.createValidateEquals<IMember>();
export const randomMember = typia.createRandom<IMember>();
export const validation = typia.validate<IMember>({});
export const exactValidation = typia.validateEquals<IMember>({});
export const randomValue = typia.random<IMember>();

/* -----------------------------------------------------------
  JSON
----------------------------------------------------------- */
export const jsonApplication = typia.json.application<ICalculator>();
export const jsonSchemas = typia.json.schemas<[IMember]>();
export const jsonSchema = typia.json.schema<IMember>();
export const jsonIsParse = typia.json.createIsParse<IMember>();
export const jsonValidateParse = typia.json.createValidateParse<IMember>();
export const jsonAssertStringify = typia.json.createAssertStringify<IMember>();
export const jsonParseResult = typia.json.validateParse<IMember>("{}");

/* -----------------------------------------------------------
  LLM
----------------------------------------------------------- */
export const llmApplication = typia.llm.application<ICalculator>();
export const llmController = typia.llm.controller<Calculator>(
  "calculator",
  new Calculator(),
);
export const llmStructuredOutput = typia.llm.structuredOutput<IMember>();
export const llmParameters = typia.llm.parameters<IMember>();
export const llmParse = typia.llm.createParse<IMember>();
export const llmCoerce = typia.llm.createCoerce<IMember>();

/* -----------------------------------------------------------
  REFLECT
----------------------------------------------------------- */
export const metadataSchemas = typia.reflect.schemas<[IMember]>();
export const metadataSchema = typia.reflect.schema<IMember>();
export const typeName = typia.reflect.name<IMember>();
export const typeLiterals = typia.reflect.literals<"first" | "second">();

/* -----------------------------------------------------------
  HTTP
----------------------------------------------------------- */
export const httpParameter = typia.http.parameter<number>("1");
export const httpCreateParameter = typia.http.createParameter<number>();
export const httpQuery = typia.http.createQuery<{ value: string }>();
export const httpHeaders = typia.http.createHeaders<{ "x-value": string }>();
export const httpFormData = typia.http.createFormData<{ value: string }>();
export const httpValidateQuery = typia.http.createValidateQuery<{
  value: string;
}>();
export const httpValidateHeaders = typia.http.createValidateHeaders<{
  "x-value": string;
}>();
export const httpValidateFormData = typia.http.createValidateFormData<{
  value: string;
}>();

/* -----------------------------------------------------------
  COMPARE
----------------------------------------------------------- */
export const cover = typia.compare.createCover<IPoint>();
export const compareEquals = typia.compare.createEquals<IPoint>();
export const less = typia.compare.createLess<IPoint>();

/* -----------------------------------------------------------
  NOTATIONS
----------------------------------------------------------- */
export const camel = typia.notations.createCamel<IMember>();
export const snake = typia.notations.createSnake<IMember>();
export const validateCamel = typia.notations.createValidateCamel<IMember>();
export const isSnake = typia.notations.createIsSnake<IMember>();

/* -----------------------------------------------------------
  PLAIN
----------------------------------------------------------- */
export const classify = typia.plain.createClassify<Point>();
export const clone = typia.plain.createClone<IMember>();
export const prune = typia.plain.createPrune<IMember>();
export const validateClassify = typia.plain.createValidateClassify<Point>();
export const validateClone = typia.plain.createValidateClone<IMember>();

/* -----------------------------------------------------------
  PROTOBUF
----------------------------------------------------------- */
export const protobufEncode = typia.protobuf.createEncode<IMember>();
export const protobufDecode = typia.protobuf.createDecode<IMember>();
export const protobufValidateDecode =
  typia.protobuf.createValidateDecode<IMember>();
export const protobufMessage = typia.protobuf.message<IMember>();

/* -----------------------------------------------------------
  FUNCTIONAL
----------------------------------------------------------- */
export const functionalIs = typia.functional.isFunction(
  (member: IMember): IMember => member,
);
export const functionalValidate = typia.functional.validateFunction(
  (member: IMember): IMember => member,
);
export const functionalAssert = typia.functional.assertFunction(
  (member: IMember): IMember => member,
);
