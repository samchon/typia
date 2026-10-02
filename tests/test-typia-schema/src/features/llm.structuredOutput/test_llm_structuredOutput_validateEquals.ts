import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies a structuredOutput configured with equals:true accepts an exact
 * member and rejects an otherwise valid member with one surplus key.
 *
 * The extra key is the one-axis negative twin; a missing required age is also
 * rejected. Default non-equality validation remains a separate
 * structuredOutput_validate case.
 *
 * 1. Execute the native calls for the declarations and inputs in this file.
 * 2. Compare the observed schema fragments or runtime results with the stated
 *    expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification A structuredOutput configured with equals:true accepts an exact member and rejects an otherwise valid member with one surplus key.
 * @evidence contracts/testing.md#independent-expectations The explicit equals option and IInput declared keys independently determine exact-object versus extra-property verdicts.
 * @evidence contracts/testing.md#distinguishing-cases The extra key is the one-axis negative twin; a missing required age is also rejected. Default non-equality validation remains a separate structuredOutput_validate case.
 * @evidence contracts/testing.md#execution-ownership test_llm_structuredOutput_validateEquals is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.structuredOutput through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native type analyzer/emitter connects the declared TypeScript type and options to the schema or bound runtime operation observed here. A utility unit with a handwritten schema cannot detect a missing rewrite, wrong emitted type shape or incorrect binding at this public producer.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.llm.structuredOutput call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. The extra key is the one-axis negative twin; a missing required age is also rejected. Default non-equality validation remains a separate structuredOutput_validate case. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_structuredOutput_validateEquals = (): void => {
  interface IInput {
    name: string;
    age: number;
  }

  const output = typia.llm.structuredOutput<IInput, { equals: true }>();

  // Valid input (exact match)
  const valid = output.validate({ name: "Alice", age: 28 });
  TestEquality.equals("valid.success", valid.success, true);

  // Invalid input (extra property)
  const extra = output.validate({ name: "Bob", age: 30, extra: "field" });
  TestEquality.equals("extra.success", extra.success, false);

  TestEquality.equals(
    "missing required age fails",
    output.validate({ name: "Bob" }).success,
    false,
  );
};
