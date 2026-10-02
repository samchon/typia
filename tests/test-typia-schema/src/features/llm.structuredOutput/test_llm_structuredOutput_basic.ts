import { ILlmStructuredOutput } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies the existing parsed literals and coercion behavior, then separates
 * parsing from type validation on JSON missing required age. Parsing succeeds
 * without inventing age; the separate native validator rejects the result.
 *
 * 1. Execute the native calls for the declarations and inputs in this file.
 * 2. Compare the observed schema fragments or runtime results with the stated
 *    expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification Authored JSON parses and scalar coercion preserves the existing literal values. JSON missing required age also parses, leaves age undefined, and fails a separate generated validator because parsing performs no type validation.
 * @evidence contracts/testing.md#independent-expectations Input literals independently determine parsed values. The public parse contract requires JSON parsing without type validation or invented properties; the declared required age independently determines rejection by the separate validator.
 * @evidence contracts/testing.md#distinguishing-cases The omitted-age input is retained beside the original valid inputs. Assertions separately check parser success, absent age and validator rejection, distinguishing coercion from type validation.
 * @evidence contracts/testing.md#execution-ownership test_llm_structuredOutput_basic is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.structuredOutput through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native type analyzer/emitter connects the declared TypeScript type and options to the schema or bound runtime operation observed here. A utility unit with a handwritten schema cannot detect a missing rewrite, wrong emitted type shape or incorrect binding at this public producer.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.llm.structuredOutput call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage All original declarations, public calls, inputs and assertions remain. The added omitted-age input remains and checks three independent outcomes: successful JSON parsing, no invented age and separate type-validation failure. No generated schema comparison replaces an existing expected literal.
 */
export const test_llm_structuredOutput_basic = (): void => {
  interface IMember {
    name: string;
    age: number;
  }

  const output: ILlmStructuredOutput<IMember> =
    typia.llm.structuredOutput<IMember>();

  // Check all members exist
  TestEquality.equals("typeof parameters", typeof output.parameters, "object");
  TestEquality.equals("typeof parse", typeof output.parse, "function");
  TestEquality.equals("typeof coerce", typeof output.coerce, "function");
  TestEquality.equals("typeof validate", typeof output.validate, "function");

  // Minimal functionality check
  const parsed = output.parse('{"name":"John","age":"30"}');
  TestEquality.equals("parse.success", parsed.success, true);
  if (parsed.success) {
    TestEquality.equals("parse.data.age", parsed.data.age, 30); // coerced from string
  }

  const validated = output.validate({ name: "Jane", age: 25 });
  TestEquality.equals("validate.success", validated.success, true);

  const missing = output.parse('{"name":"John"}');
  TestEquality.equals("missing field JSON parses", missing.success, true);
  TestEquality.equals(
    "parsing does not invent age",
    missing.success ? missing.data.age : undefined,
    undefined,
  );
  TestEquality.equals(
    "missing age fails separate validation",
    output.validate(missing.success ? missing.data : undefined).success,
    false,
  );
  TestEquality.equals(
    "missing required validation fails",
    output.validate({ name: "Jane" }).success,
    false,
  );
};
