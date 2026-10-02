import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import typia, { tags } from "typia";

/**
 * Verifies native parameters preserve required names, string/numeric enums,
 * nullable branches, leaf references, array item references, dictionary value
 * schema and leaf tag constraints.
 *
 * Scalar enums, nullable union, reusable object/array leaf, dynamic dictionary
 * and required versus optional structure have separate shape/field assertions.
 * Local projection helpers sort only order-insensitive enum/required
 * comparisons in this case.
 *
 * 1. Execute the native calls for the declarations and inputs in this file.
 * 2. Compare the observed schema fragments or runtime results with the stated
 *    expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification Native parameters preserve required names, string/numeric enums, nullable branches, leaf references, array item references, dictionary value schema and leaf tag constraints.
 * @evidence contracts/testing.md#independent-expectations The IParams/IParamLeaf declarations and tags independently determine the handwritten expected names, enum members, null/string kinds, pattern and minimum; no converter output supplies those literals.
 * @evidence contracts/testing.md#distinguishing-cases Scalar enums, nullable union, reusable object/array leaf, dynamic dictionary and required versus optional structure have separate shape/field assertions. Local projection helpers sort only order-insensitive enum/required comparisons in this case.
 * @evidence contracts/testing.md#execution-ownership test_llm_parameters_converter_matrix is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.parameters through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native type analyzer/emitter connects the declared TypeScript type and options to the schema or bound runtime operation observed here. A utility unit with a handwritten schema cannot detect a missing rewrite, wrong emitted type shape or incorrect binding at this public producer.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.llm.parameters call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. Scalar enums, nullable union, reusable object/array leaf, dynamic dictionary and required versus optional structure have separate shape/field assertions. Local projection helpers sort only order-insensitive enum/required comparisons in this case. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_parameters_converter_matrix = (): void => {
  interface IParamLeaf {
    code: string & tags.Pattern<"^[a-z]+$">;
    value: number & tags.Minimum<0>;
  }
  interface IParams {
    status: "pending" | "done";
    priority: 1 | 2 | 3;
    nullable: string | null;
    leaf: IParamLeaf;
    leaves: IParamLeaf[];
    dictionary: Record<string, string & tags.MinLength<1>>;
  }

  const params: ILlmSchema.IParameters = typia.llm.parameters<IParams>();

  TestEquality.equals("parameters type", params.type, "object");
  TestEquality.equals(
    "parameters additionalProperties",
    false,
    params.additionalProperties,
  );
  TestEquality.equals("parameters required", sorted(params.required), [
    "dictionary",
    "leaf",
    "leaves",
    "nullable",
    "priority",
    "status",
  ]);

  TestEquality.equals("status enum", enumSchema(params.properties.status), {
    type: "string",
    enum: ["done", "pending"],
  });
  TestEquality.equals("priority enum", enumSchema(params.properties.priority), {
    type: "number",
    enum: [1, 2, 3],
  });

  const nullable = params.properties.nullable;
  TestValidator.predicate("nullable is anyOf", () => isAnyOf(nullable));
  if (isAnyOf(nullable))
    TestEquality.equals(
      "nullable variants",
      sorted(nullable.anyOf.map((s) => typeName(s))),
      ["null", "string"],
    );

  TestEquality.equals("leaf reference", params.properties.leaf, {
    $ref: "#/$defs/IParamLeaf",
  });
  TestValidator.predicate("IParamLeaf definition exists", () =>
    isObject(params.$defs.IParamLeaf),
  );

  const leaves = params.properties.leaves;
  TestValidator.predicate("leaves array", () => isArray(leaves));
  if (isArray(leaves))
    TestEquality.equals("leaves item reference", leaves.items, {
      $ref: "#/$defs/IParamLeaf",
    });

  const dictionary = resolve(params.properties.dictionary, params.$defs);
  TestValidator.predicate("dictionary object", () => isObject(dictionary));
  if (isObject(dictionary))
    TestEquality.equals(
      "dictionary conversion",
      {
        type: dictionary.type,
        required: dictionary.required,
        additionalProperties: dictionary.additionalProperties,
      },
      {
        type: "object",
        required: [],
        additionalProperties: {
          type: "string",
          minLength: 1,
        },
      },
    );

  const leaf = params.$defs.IParamLeaf as ILlmSchema.IObject;
  TestEquality.equals("leaf required", sorted(leaf.required), [
    "code",
    "value",
  ]);
  TestEquality.equals("leaf code pattern", leaf.properties.code, {
    type: "string",
    pattern: "^[a-z]+$",
  });
  TestEquality.equals("leaf value minimum", leaf.properties.value, {
    type: "number",
    minimum: 0,
  });
};

const sorted = (values: string[] | undefined): string[] =>
  [...(values ?? [])].sort();

const enumSchema = (
  schema: ILlmSchema | undefined,
): { type: string | undefined; enum: unknown[] } => ({
  type: (schema as { type?: string } | undefined)?.type,
  enum: [...((schema as { enum?: unknown[] } | undefined)?.enum ?? [])].sort(),
});

const typeName = (schema: ILlmSchema): string =>
  "$ref" in schema ? "$ref" : ((schema as { type?: string }).type ?? "unknown");

const resolve = (
  schema: ILlmSchema | undefined,
  $defs: Record<string, ILlmSchema>,
): ILlmSchema | undefined => {
  if (!schema || !("$ref" in schema)) return schema;
  const key = schema.$ref.split("/").at(-1);
  return key === undefined ? undefined : $defs[key];
};

const isAnyOf = (schema: ILlmSchema | undefined): schema is ILlmSchema.IAnyOf =>
  !!schema && "anyOf" in schema && Array.isArray(schema.anyOf);

const isArray = (schema: ILlmSchema | undefined): schema is ILlmSchema.IArray =>
  !!schema && (schema as { type?: string }).type === "array";

const isObject = (
  schema: ILlmSchema | undefined,
): schema is ILlmSchema.IObject =>
  !!schema && (schema as { type?: string }).type === "object";
