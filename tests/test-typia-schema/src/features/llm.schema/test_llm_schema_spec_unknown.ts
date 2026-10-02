import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies native any and unknown schema calls both match independent empty
 * schema objects.
 *
 * Both distinct TypeScript top-type spellings remain exercised;
 * primitive/string/object restrictions are independently covered by their
 * schema_spec siblings. This checks schema representation rather than runtime
 * value acceptance.
 *
 * 1. Execute the native calls for the declarations and inputs in this file.
 * 2. Compare the observed schema fragments or runtime results with the stated
 *    expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification Native any and unknown schema calls both match independent empty schema objects.
 * @evidence contracts/testing.md#independent-expectations The supported unconstrained schema representation for any/unknown permits arbitrary JSON values and is expressed by handwritten empty objects, not by another emitted value.
 * @evidence contracts/testing.md#distinguishing-cases Both distinct TypeScript top-type spellings remain exercised; primitive/string/object restrictions are independently covered by their schema_spec siblings. This checks schema representation rather than runtime value acceptance.
 * @evidence contracts/testing.md#execution-ownership test_llm_schema_spec_unknown is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.schema through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native type analyzer/emitter connects the declared TypeScript type and options to the schema or bound runtime operation observed here. A utility unit with a handwritten schema cannot detect a missing rewrite, wrong emitted type shape or incorrect binding at this public producer.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.llm.schema call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. Both distinct TypeScript top-type spellings remain exercised; primitive/string/object restrictions are independently covered by their schema_spec siblings. This checks schema representation rather than runtime value acceptance. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_schema_spec_unknown = (): void => {
  TestEquality.equals("any", clean(typia.llm.schema<any>({})), {});
  TestEquality.equals("unknown", clean(typia.llm.schema<unknown>({})), {});
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
