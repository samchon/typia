import { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import typia, { tags } from "typia";

/**
 * Verifies generated parameters match literal object-shell,
 * required/optional/nullable/literal fields, child reference/definition,
 * dictionary numeric constraint and repeated child array.
 *
 * Required versus optional, boolean|null union, literal enum, shared child
 * ref/array and dynamic numeric values retain exact expected shapes rather than
 * only node-kind checks.
 *
 * 1. Execute the native calls for the declarations and inputs in this file.
 * 2. Compare the observed schema fragments or runtime results with the stated
 *    expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification Generated parameters match literal object-shell, required/optional/nullable/literal fields, child reference/definition, dictionary numeric constraint and repeated child array.
 * @evidence contracts/testing.md#independent-expectations Every expected schema object is handwritten from IParameters/IChild and their tags. The local cleaner compares the JSON representation, enumSchema sorts literal membership, and resolve follows the simple local references present here.
 * @evidence contracts/testing.md#distinguishing-cases Required versus optional, boolean|null union, literal enum, shared child ref/array and dynamic numeric values retain exact expected shapes rather than only node-kind checks.
 * @evidence contracts/testing.md#execution-ownership test_llm_parameters_spec_properties is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.parameters through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native type analyzer/emitter connects the declared TypeScript type and options to the schema or bound runtime operation observed here. A utility unit with a handwritten schema cannot detect a missing rewrite, wrong emitted type shape or incorrect binding at this public producer.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.llm.parameters call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. Required versus optional, boolean|null union, literal enum, shared child ref/array and dynamic numeric values retain exact expected shapes rather than only node-kind checks. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_parameters_spec_properties = (): void => {
  interface IChild {
    id: string & tags.Format<"uuid">;
  }
  interface IParameters {
    required: string;
    optional?: number;
    nullable: boolean | null;
    literal: "a" | "b";
    child: IChild;
    records: Record<string, number & tags.Minimum<0>>;
    children: IChild[];
  }

  const params = typia.llm.parameters<IParameters>();
  TestEquality.equals(
    "parameters object shell",
    {
      type: params.type,
      additionalProperties: params.additionalProperties,
      required: params.required,
    },
    {
      type: "object",
      additionalProperties: false,
      required: [
        "required",
        "nullable",
        "literal",
        "child",
        "records",
        "children",
      ],
    },
  );
  TestEquality.equals("required property", clean(params.properties.required), {
    type: "string",
  });
  TestEquality.equals("optional property", clean(params.properties.optional), {
    type: "number",
  });
  TestEquality.equals("nullable property", clean(params.properties.nullable), {
    anyOf: [
      {
        type: "null",
      },
      {
        type: "boolean",
      },
    ],
  });
  TestEquality.equals(
    "literal property",
    enumSchema(params.properties.literal),
    {
      type: "string",
      enum: ["a", "b"],
    },
  );
  TestEquality.equals("child reference", clean(params.properties.child), {
    $ref: "#/$defs/IChild",
  });
  TestEquality.equals("child definition", clean(params.$defs.IChild), {
    type: "object",
    properties: {
      id: {
        type: "string",
        format: "uuid",
      },
    },
    required: ["id"],
    additionalProperties: false,
  });

  const records = resolve(params.properties.records, params.$defs);
  TestEquality.equals("record property", clean(records), {
    type: "object",
    properties: {},
    additionalProperties: {
      type: "number",
      minimum: 0,
    },
    required: [],
  });
  TestEquality.equals("children array", clean(params.properties.children), {
    type: "array",
    items: {
      $ref: "#/$defs/IChild",
    },
  });
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));

const enumSchema = (
  schema: ILlmSchema | undefined,
): { type: string | undefined; enum: unknown[] } => ({
  type: (schema as { type?: string } | undefined)?.type,
  enum: [...((schema as { enum?: unknown[] } | undefined)?.enum ?? [])].sort(),
});

const resolve = (
  schema: ILlmSchema | undefined,
  $defs: Record<string, ILlmSchema>,
): ILlmSchema | undefined => {
  if (!schema || !("$ref" in schema)) return schema;
  const key = schema.$ref.split("/").at(-1);
  return key === undefined ? undefined : $defs[key];
};
