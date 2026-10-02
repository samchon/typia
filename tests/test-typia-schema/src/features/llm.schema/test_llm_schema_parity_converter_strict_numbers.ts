import { IJsonSchemaCollection, ILlmSchema, OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { LlmSchemaConverter } from "@typia/utils";
import typia, { tags } from "typia";

/**
 * Verifies strict LLM constraint text spells numbers as JavaScript does.
 *
 * Under `strict`, constraints move into the description as `@tag value` lines.
 * `@typia/utils` writes the value with JavaScript's `String()`, while the Go
 * emitter used `fmt.Sprint`. A type tag's value is the compiler's own number,
 * which already prints the JavaScript way, but a comment tag's value is a Go
 * float, printed `1e+06` for 1000000 and `1e-07` for 0.0000001 (#2452). The
 * converter's output is the oracle.
 *
 * 1. Declare type-tag and comment-tag constraints at the positional-notation
 *    boundaries, and an infinite one.
 * 2. Convert the same type through `@typia/utils` under `strict`.
 * 3. Assert the native descriptions equal the converter's, and pin the text.
 *
 * @evidence contracts/testing.md#behavioral-verification Strict native descriptions agree with the TypeScript converter and with a handwritten map of JavaScript numeric spellings for type and comment tags.
 * @evidence contracts/testing.md#independent-expectations The literal pinned descriptions independently follow JavaScript number-to-string notation at 1e6, 1e21, 1e-7 and Infinity, plus integer array bounds. Converter parity alone could hide common native JSON metadata errors.
 * @evidence contracts/testing.md#distinguishing-cases Type tags versus comment tags, positional versus exponential notation, Infinity and array-item integer bounds remain distinct; exact text comparisons reject Go-style extra exponent zeros.
 * @evidence contracts/testing.md#execution-ownership test_llm_schema_parity_converter_strict_numbers is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.json.schemas, typia.llm.schema through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native type analyzer/emitter connects the declared TypeScript type and options to the schema or bound runtime operation observed here. A utility unit with a handwritten schema cannot detect a missing rewrite, wrong emitted type shape or incorrect binding at this public producer.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.json.schemas, typia.llm.schema call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. Type tags versus comment tags, positional versus exponential notation, Infinity and array-item integer bounds remain distinct; exact text comparisons reject Go-style extra exponent zeros. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_schema_parity_converter_strict_numbers = (): void => {
  const collection: IJsonSchemaCollection = typia.json.schemas<[IRoot]>();
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
  typia.llm.schema<IRoot, { strict: true }>(actualDefs);

  const descriptions = (defs: Record<string, ILlmSchema>) =>
    Object.fromEntries(
      Object.entries((defs.IRoot as ILlmSchema.IObject).properties).map(
        ([key, value]) => [key, value.description],
      ),
    );
  TestEquality.equals(
    "strict descriptions",
    descriptions(actualDefs),
    descriptions(expectedDefs),
  );
  TestEquality.equals("pinned", descriptions(actualDefs), {
    million: "@maximum 1000000",
    large: "@minimum 1e+21",
    tiny: "@multipleOf 1e-7",
    infinite: "@maximum Infinity",
    commentMillion: "@maximum 1000000",
    commentTiny: "@multipleOf 1e-7",
    commentItems: "@minItems 2\n@maxItems 5",
  });
};

interface IRoot {
  million: number & tags.Maximum<1000000>;
  large: number & tags.Minimum<1e21>;
  tiny: number & tags.MultipleOf<0.0000001>;
  infinite: number & tags.Maximum<1e400>;

  /** @maximum 1000000 */
  commentMillion: number;

  /** @multipleOf 0.0000001 */
  commentTiny: number;

  /**
   * @minItems 2
   *
   * @maxItems 5
   */
  commentItems: string[];
}
