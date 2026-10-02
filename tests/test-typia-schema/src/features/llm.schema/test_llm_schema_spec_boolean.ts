import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies native boolean, true, false and true|false schemas match four
 * complete handwritten expected schema objects.
 *
 * Both opposite singleton literals and their collapsed union prevent broadening
 * a literal or keeping a redundant two-valued enum unnoticed.
 *
 * 1. Execute the native calls for the declarations and inputs in this file.
 * 2. Compare the observed schema fragments or runtime results with the stated
 *    expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification Native boolean, true, false and true|false schemas match four complete handwritten expected schema objects.
 * @evidence contracts/testing.md#independent-expectations TypeScript boolean/literal semantics independently require broad boolean, singleton enums and union collapse to unconstrained boolean; literal objects are not captured emitter snapshots.
 * @evidence contracts/testing.md#distinguishing-cases Both opposite singleton literals and their collapsed union prevent broadening a literal or keeping a redundant two-valued enum unnoticed.
 * @evidence contracts/testing.md#execution-ownership test_llm_schema_spec_boolean is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.schema through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native type analyzer/emitter connects the declared TypeScript type and options to the schema or bound runtime operation observed here. A utility unit with a handwritten schema cannot detect a missing rewrite, wrong emitted type shape or incorrect binding at this public producer.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.llm.schema call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. Both opposite singleton literals and their collapsed union prevent broadening a literal or keeping a redundant two-valued enum unnoticed. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_schema_spec_boolean = (): void => {
  TestEquality.equals("boolean", clean(typia.llm.schema<boolean>({})), {
    type: "boolean",
  });
  TestEquality.equals("true literal", clean(typia.llm.schema<true>({})), {
    type: "boolean",
    enum: [true],
  });
  TestEquality.equals("false literal", clean(typia.llm.schema<false>({})), {
    type: "boolean",
    enum: [false],
  });
  TestEquality.equals(
    "boolean literal union collapses to boolean",
    clean(typia.llm.schema<true | false>({})),
    {
      type: "boolean",
    },
  );
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
