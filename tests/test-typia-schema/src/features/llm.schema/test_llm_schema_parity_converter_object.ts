import { IJsonSchemaCollection, ILlmSchema, OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { LlmSchemaConverter } from "@typia/utils";
import typia, { tags } from "typia";

/**
 * Verifies native IMatrix schema and definitions match TypeScript conversion of
 * its native JSON metadata, and ILeaf separately matches a complete handwritten
 * optional-amount/code object.
 *
 * Enums, nullability, reusable leaf, bounded unique array and dynamic values
 * remain in full parity. The literal leaf control distinguishes optional
 * property retention and scalar tag drift shared by both producers.
 *
 * 1. Execute the native calls for the declarations and inputs in this file.
 * 2. Compare the observed schema fragments or runtime results with the stated
 *    expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification Native IMatrix schema and definitions match TypeScript conversion of its native JSON metadata, and ILeaf separately matches a complete handwritten optional-amount/code object.
 * @evidence contracts/testing.md#independent-expectations The converter shares native metadata, so parity can hide correlated analysis errors. The independent ILeaf literal pins code pattern, amount minimum, required code only and closed object semantics; other matrix fragments are pinned in schema_converter_matrix.
 * @evidence contracts/testing.md#distinguishing-cases Enums, nullability, reusable leaf, bounded unique array and dynamic values remain in full parity. The literal leaf control distinguishes optional property retention and scalar tag drift shared by both producers.
 * @evidence contracts/testing.md#execution-ownership test_llm_schema_parity_converter_object is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.json.schemas, typia.llm.schema through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native type analyzer/emitter connects the declared TypeScript type and options to the schema or bound runtime operation observed here. A utility unit with a handwritten schema cannot detect a missing rewrite, wrong emitted type shape or incorrect binding at this public producer.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.json.schemas, typia.llm.schema call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. Enums, nullability, reusable leaf, bounded unique array and dynamic values remain in full parity. The literal leaf control distinguishes optional property retention and scalar tag drift shared by both producers. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_schema_parity_converter_object = (): void => {
  interface ILeaf {
    code: string & tags.Pattern<"^[A-Z]{2}$">;
    amount?: number & tags.Minimum<0>;
  }
  interface IMatrix {
    id: string & tags.Format<"uuid">;
    title: string & tags.MinLength<2> & tags.MaxLength<32>;
    flag: true;
    mode: "create" | "update" | "delete";
    level: 1 | 2 | 3;
    nullable: string | null;
    leaf: ILeaf;
    leaves: ILeaf[] & tags.MinItems<1> & tags.MaxItems<5> & tags.UniqueItems;
    dictionary: Record<string, number & tags.Minimum<0>>;
  }

  const collection: IJsonSchemaCollection = typia.json.schemas<[IMatrix]>();
  const expectedDefs: Record<string, ILlmSchema> = {};
  const converted = LlmSchemaConverter.schema({
    config: { strict: false },
    components: collection.components as OpenApi.IComponents,
    $defs: expectedDefs,
    schema: collection.schemas[0] as OpenApi.IJsonSchema,
  });
  if (converted.success === false)
    throw new Error(JSON.stringify(converted.error, null, 2));

  const actualDefs: Record<string, ILlmSchema> = {};
  const actual = typia.llm.schema<IMatrix>(actualDefs);

  TestEquality.equals("schema", clean(actual), clean(converted.value));
  TestEquality.equals("$defs", clean(actualDefs), clean(expectedDefs));

  TestEquality.equals("declared leaf definition", clean(actualDefs.ILeaf), {
    type: "object",
    properties: {
      amount: { type: "number", minimum: 0 },
      code: { type: "string", pattern: "^[A-Z]{2}$" },
    },
    required: ["code"],
    additionalProperties: false,
  });
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
