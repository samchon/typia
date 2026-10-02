import { IJsonSchemaCollection, OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { LlmSchemaConverter } from "@typia/utils";
import typia, { tags } from "typia";

/**
 * Verifies native parameters match the TypeScript converter for the same
 * generated JSON metadata, and the leaf definition separately matches its
 * complete handwritten code/value shape.
 *
 * Optional constrained string, nullable scalar, enums, reused leaf, leaf array
 * and dictionary remain in the parity input, while the literal leaf guard
 * detects shared drift in its scalar constraints. JSON cleaning ignores
 * undefined representation fields.
 *
 * 1. Execute the native calls for the declarations and inputs in this file.
 * 2. Compare the observed schema fragments or runtime results with the stated
 *    expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification Native parameters match the TypeScript converter for the same generated JSON metadata, and the leaf definition separately matches its complete handwritten code/value shape.
 * @evidence contracts/testing.md#independent-expectations Converter parity is not independent of native type analysis. The added literal IParamLeaf object pins pattern, numeric minimum, required names and closed object semantics independently; parity still checks the wider composed schema.
 * @evidence contracts/testing.md#distinguishing-cases Optional constrained string, nullable scalar, enums, reused leaf, leaf array and dictionary remain in the parity input, while the literal leaf guard detects shared drift in its scalar constraints. JSON cleaning ignores undefined representation fields.
 * @evidence contracts/testing.md#execution-ownership test_llm_parameters_parity_converter_object is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.json.schemas, typia.llm.parameters through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native type analyzer/emitter connects the declared TypeScript type and options to the schema or bound runtime operation observed here. A utility unit with a handwritten schema cannot detect a missing rewrite, wrong emitted type shape or incorrect binding at this public producer.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.json.schemas, typia.llm.parameters call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. Optional constrained string, nullable scalar, enums, reused leaf, leaf array and dictionary remain in the parity input, while the literal leaf guard detects shared drift in its scalar constraints. JSON cleaning ignores undefined representation fields. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_parameters_parity_converter_object = (): void => {
  interface IParamLeaf {
    code: string & tags.Pattern<"^[a-z]+$">;
    value: number & tags.Minimum<0>;
  }
  interface IParams {
    status: "pending" | "done";
    priority: 1 | 2 | 3;
    nullable: string | null;
    optional?: string & tags.MinLength<1>;
    leaf: IParamLeaf;
    leaves: IParamLeaf[];
    dictionary: Record<string, string & tags.MinLength<1>>;
  }

  const collection: IJsonSchemaCollection = typia.json.schemas<[IParams]>();
  const converted = LlmSchemaConverter.parameters({
    config: { strict: false },
    components: collection.components as OpenApi.IComponents,
    schema: collection.schemas[0] as
      | OpenApi.IJsonSchema.IObject
      | OpenApi.IJsonSchema.IReference,
  });
  if (converted.success === false)
    throw new Error(JSON.stringify(converted.error, null, 2));

  const actual = typia.llm.parameters<IParams>();

  TestEquality.equals("parameters", clean(actual), clean(converted.value));

  TestEquality.equals(
    "declared leaf definition",
    clean(actual.$defs.IParamLeaf),
    {
      type: "object",
      properties: {
        code: { type: "string", pattern: "^[a-z]+$" },
        value: { type: "number", minimum: 0 },
      },
      required: ["code", "value"],
      additionalProperties: false,
    },
  );
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
