import { IJsonSchemaCollection, ILlmSchema, OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { LlmSchemaConverter } from "@typia/utils";
import typia, { tags } from "typia";

/**
 * Verifies the native strict LLM schema agrees with `@typia/utils`' converter.
 *
 * Under `strict`, constraint keywords are shifted out of the schema and into
 * the description as `@tag value` lines. Two owners implement that shift — the
 * Go emitter `typia.llm.*` calls, and `OpenApiConstraintShifter` in
 * `@typia/utils` — and they once disagreed on `default`, which the numeric path
 * deleted instead of shifting. The oracle below was already correct when that
 * shipped; only the fixture was blind, because it omitted the single tag they
 * disagreed on.
 *
 * The fixture therefore exercises every tag both shift functions handle rather
 * than a sample: a correct comparison over an incomplete input proves nothing
 * about the missing case.
 *
 * 1. Declare properties covering the full numeric, string, and array tag sets.
 * 2. Convert the same type through `@typia/utils` under `strict`.
 * 3. Assert the native schema and `$defs` equal the converter's output.
 *
 * @evidence contracts/testing.md#behavioral-verification Strict native schema/definitions match TypeScript constraint shifting for the full local numeric/string/array tag inputs; a handwritten count schema separately pins minimum, maximum and default description lines.
 * @evidence contracts/testing.md#independent-expectations The converter receives native JSON metadata and is not fully independent. The literal count fragment and schema_spec_strict_* cases pin strict meanings independently of cross-owner parity, including the previously lost numeric default.
 * @evidence contracts/testing.md#distinguishing-cases Nested definitions, complete tag families, existing description plus tags and defaults remain in parity. The count literal detects common loss or spelling/order changes of its three shifted tags.
 * @evidence contracts/testing.md#execution-ownership test_llm_schema_parity_converter_strict is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.json.schemas, typia.llm.schema through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native type analyzer/emitter connects the declared TypeScript type and options to the schema or bound runtime operation observed here. A utility unit with a handwritten schema cannot detect a missing rewrite, wrong emitted type shape or incorrect binding at this public producer.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.json.schemas, typia.llm.schema call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. Nested definitions, complete tag families, existing description plus tags and defaults remain in parity. The count literal detects common loss or spelling/order changes of its three shifted tags. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_schema_parity_converter_strict = (): void => {
  interface IStrictChild {
    // The complete string shift set: minLength, maxLength, format, pattern,
    // contentMediaType, default.
    code: string &
      tags.MinLength<2> &
      tags.MaxLength<8> &
      tags.Pattern<"^[a-z]+$">;
    media: string & tags.ContentMediaType<"text/plain"> & tags.Default<"body">;
    id: string & tags.Format<"uuid">;
    // The complete numeric shift set: minimum, maximum, exclusiveMinimum,
    // exclusiveMaximum, multipleOf, default.
    count: number & tags.Minimum<1> & tags.Maximum<9> & tags.Default<7>;
    ratio: number & tags.ExclusiveMinimum<0> & tags.ExclusiveMaximum<1>;
    step: number & tags.MultipleOf<5> & tags.Default<10>;
  }
  interface IStrictRoot {
    child: IStrictChild;
    // The complete array shift set: minItems, maxItems, uniqueItems.
    labels: (string & tags.MinLength<1>)[] &
      tags.MinItems<1> &
      tags.MaxItems<4> &
      tags.UniqueItems;
    mode: "alpha" | "beta";
    enabled: boolean;
    /** A description the shifted tags must be appended to, not replace. */
    described: number & tags.Minimum<2> & tags.Default<3>;
  }

  const collection: IJsonSchemaCollection = typia.json.schemas<[IStrictRoot]>();
  const expectedDefs: Record<string, ILlmSchema> = {};
  const converted = LlmSchemaConverter.schema({
    config: { strict: true },
    components: collection.components as OpenApi.IComponents,
    $defs: expectedDefs,
    schema: collection.schemas[0] as OpenApi.IJsonSchema,
  });
  if (converted.success === false)
    throw new Error(JSON.stringify(converted.error, null, 2));

  const actualDefs: Record<string, ILlmSchema> = {};
  const actual = typia.llm.schema<IStrictRoot, { strict: true }>(actualDefs);

  TestEquality.equals("strict schema", clean(actual), clean(converted.value));
  TestEquality.equals("strict $defs", clean(actualDefs), clean(expectedDefs));

  TestEquality.equals(
    "declared strict numeric default",
    clean((actualDefs.IStrictChild as ILlmSchema.IObject).properties.count),
    {
      type: "number",
      description: ["@minimum 1", "@maximum 9", "@default 7"].join("\n"),
    },
  );
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
