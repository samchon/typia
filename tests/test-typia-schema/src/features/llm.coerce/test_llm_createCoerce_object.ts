import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies one native createCoerce<IInput> factory is reused for John/30/true
 * and Jane/25/false payloads, comparing their scalar results and preserved
 * names.
 *
 * Two different names, ages and opposite boolean strings expose stale state and
 * branch mistakes; already typed input is also preserved. This exercises
 * factory wiring rather than separately rebuilding a coercer per input.
 *
 * 1. Execute the native calls for the declarations and inputs in this file.
 * 2. Compare the observed schema fragments or runtime results with the stated
 *    expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification One native createCoerce<IInput> factory is reused for John/30/true and Jane/25/false payloads, comparing their scalar results and preserved names.
 * @evidence contracts/testing.md#independent-expectations The expected numeric and boolean values are literal interpretations of the local string payloads. The same generated callback is reused, not used to manufacture expected results.
 * @evidence contracts/testing.md#distinguishing-cases Two different names, ages and opposite boolean strings expose stale state and branch mistakes; already typed input is also preserved. This exercises factory wiring rather than separately rebuilding a coercer per input.
 * @evidence contracts/testing.md#execution-ownership test_llm_createCoerce_object is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.createCoerce through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native type analyzer/emitter connects the declared TypeScript type and options to the schema or bound runtime operation observed here. A utility unit with a handwritten schema cannot detect a missing rewrite, wrong emitted type shape or incorrect binding at this public producer.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.llm.createCoerce call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. Two different names, ages and opposite boolean strings expose stale state and branch mistakes; already typed input is also preserved. This exercises factory wiring rather than separately rebuilding a coercer per input. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_createCoerce_object = (): void => {
  interface IInput {
    name: string;
    age: number;
    alive: boolean;
  }

  // Create reusable coercer
  const coerce = typia.llm.createCoerce<IInput>();

  // Test with multiple inputs
  const input1 = {
    name: "John",
    age: "30" as unknown as number,
    alive: "true" as unknown as boolean,
  };
  const input2 = {
    name: "Jane",
    age: "25" as unknown as number,
    alive: "false" as unknown as boolean,
  };

  const result1 = coerce(input1);
  const result2 = coerce(input2);

  TestEquality.equals("result1 age", result1.age, 30);
  TestEquality.equals("result1 alive", result1.alive, true);
  TestEquality.equals("result2 age", result2.age, 25);
  TestEquality.equals("result2 alive", result2.alive, false);

  TestEquality.equals("result1 name", result1.name, "John");
  TestEquality.equals("result2 name", result2.name, "Jane");
  TestEquality.equals(
    "already typed control",
    coerce({ name: "Iris", age: 0, alive: false }),
    { name: "Iris", age: 0, alive: false },
  );
};
