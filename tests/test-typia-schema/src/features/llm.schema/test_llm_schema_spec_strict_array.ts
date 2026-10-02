import { TestEquality } from "@typia/template/equality";
import typia, { tags } from "typia";

/**
 * Verifies strict native generation matches a complete literal constrained
 * string-array schema whose item and array constraints appear in description
 * lines.
 *
 * Item versus array-owner tag placement and absence of ordinary constraint
 * keywords are both observed through full equality; nonstrict constraints are
 * pinned in schema_spec_array.
 *
 * 1. Execute the native calls for the declarations and inputs in this file.
 * 2. Compare the observed schema fragments or runtime results with the stated
 *    expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification Strict native generation matches a complete literal constrained string-array schema whose item and array constraints appear in description lines.
 * @evidence contracts/testing.md#independent-expectations The expected minLength/minItems/maxItems/uniqueItems text is authored from the input tags and supported strict shift policy, not from another shifter.
 * @evidence contracts/testing.md#distinguishing-cases Item versus array-owner tag placement and absence of ordinary constraint keywords are both observed through full equality; nonstrict constraints are pinned in schema_spec_array.
 * @evidence contracts/testing.md#execution-ownership test_llm_schema_spec_strict_array is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.schema through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native type analyzer/emitter connects the declared TypeScript type and options to the schema or bound runtime operation observed here. A utility unit with a handwritten schema cannot detect a missing rewrite, wrong emitted type shape or incorrect binding at this public producer.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.llm.schema call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. Item versus array-owner tag placement and absence of ordinary constraint keywords are both observed through full equality; nonstrict constraints are pinned in schema_spec_array. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_schema_spec_strict_array = (): void => {
  TestEquality.equals(
    "strict array shifts constraints",
    clean(
      typia.llm.schema<
        (string & tags.MinLength<1>)[] &
          tags.MinItems<1> &
          tags.MaxItems<3> &
          tags.UniqueItems,
        { strict: true }
      >({}),
    ),
    {
      type: "array",
      items: {
        type: "string",
        description: "@minLength 1",
      },
      description: ["@minItems 1", "@maxItems 3", "@uniqueItems"].join("\n"),
    },
  );
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
