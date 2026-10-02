import { IJsonSchemaCollection, OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { LlmSchemaConverter } from "@typia/utils";
import typia, { tags } from "typia";

/**
 * Verifies strict native parameter output matches the TypeScript converter, and
 * the root mode property independently retains the literal alpha/beta enum.
 *
 * Strict nested child constraints, constrained labels array and root mode enum
 * remain observed through full parity; the independent literal mode guard
 * prevents a common enum loss from satisfying both producers.
 *
 * 1. Execute the native calls for the declarations and inputs in this file.
 * 2. Compare the observed schema fragments or runtime results with the stated
 *    expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification Strict native parameter output matches the TypeScript converter, and the root mode property independently retains the literal alpha/beta enum.
 * @evidence contracts/testing.md#independent-expectations The converter consumes native JSON metadata, so full equality is cross-owner parity rather than an independent oracle. The handwritten mode enum and strict literal schema cases separately pin supported output meaning.
 * @evidence contracts/testing.md#distinguishing-cases Strict nested child constraints, constrained labels array and root mode enum remain observed through full parity; the independent literal mode guard prevents a common enum loss from satisfying both producers.
 * @evidence contracts/testing.md#execution-ownership test_llm_parameters_parity_converter_strict is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.json.schemas, typia.llm.parameters through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native type analyzer/emitter connects the declared TypeScript type and options to the schema or bound runtime operation observed here. A utility unit with a handwritten schema cannot detect a missing rewrite, wrong emitted type shape or incorrect binding at this public producer.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.json.schemas, typia.llm.parameters call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. Strict nested child constraints, constrained labels array and root mode enum remain observed through full parity; the independent literal mode guard prevents a common enum loss from satisfying both producers. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_parameters_parity_converter_strict = (): void => {
  interface IStrictChild {
    code: string & tags.MinLength<2>;
    score: number & tags.Minimum<0> & tags.Maximum<100>;
  }
  interface IStrictParams {
    child: IStrictChild;
    labels: (string & tags.Pattern<"^[a-z]+$">)[] & tags.MinItems<1>;
    mode: "alpha" | "beta";
  }

  const collection: IJsonSchemaCollection =
    typia.json.schemas<[IStrictParams]>();
  const converted = LlmSchemaConverter.parameters({
    config: { strict: true },
    components: collection.components as OpenApi.IComponents,
    schema: collection.schemas[0] as
      | OpenApi.IJsonSchema.IObject
      | OpenApi.IJsonSchema.IReference,
  });
  if (converted.success === false)
    throw new Error(JSON.stringify(converted.error, null, 2));

  const actual = typia.llm.parameters<IStrictParams, { strict: true }>();

  TestEquality.equals(
    "strict parameters",
    clean(actual),
    clean(converted.value),
  );

  TestEquality.equals(
    "declared strict mode literals",
    clean(actual.properties.mode),
    { type: "string", enum: ["alpha", "beta"] },
  );
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
