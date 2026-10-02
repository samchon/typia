import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies the direct native llm.coerce call converts the authored age/alive
 * strings to number/boolean while preserving the name, and already typed values
 * remain correctly typed.
 *
 * String-to-number/boolean conversion is contrasted with already typed numbers
 * and false booleans. Coercion alone is not claimed to reject invalid data;
 * validation is a separate operation.
 *
 * 1. Execute the native calls for the declarations and inputs in this file.
 * 2. Compare the observed schema fragments or runtime results with the stated
 *    expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification The direct native llm.coerce call converts the authored age/alive strings to number/boolean while preserving the name, and already typed values remain correctly typed.
 * @evidence contracts/testing.md#independent-expectations Literal John, 30 and true come from IInput number/boolean semantics and the authored payload; preserved typed controls have handwritten results rather than another coercer.
 * @evidence contracts/testing.md#distinguishing-cases String-to-number/boolean conversion is contrasted with already typed numbers and false booleans. Coercion alone is not claimed to reject invalid data; validation is a separate operation.
 * @evidence contracts/testing.md#execution-ownership test_llm_coerce_object is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.coerce through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native type analyzer/emitter connects the declared TypeScript type and options to the schema or bound runtime operation observed here. A utility unit with a handwritten schema cannot detect a missing rewrite, wrong emitted type shape or incorrect binding at this public producer.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.llm.coerce call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. String-to-number/boolean conversion is contrasted with already typed numbers and false booleans. Coercion alone is not claimed to reject invalid data; validation is a separate operation. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_coerce_object = (): void => {
  interface IInput {
    name: string;
    age: number;
    alive: boolean;
  }

  // Already parsed object with wrong types
  const input = {
    name: "John",
    age: "30" as unknown as number, // string instead of number
    alive: "true" as unknown as boolean, // string instead of boolean
  };

  const result = typia.llm.coerce<IInput>(input);

  TestEquality.equals("name", result.name, "John");
  TestEquality.equals("age", result.age, 30);
  TestEquality.equals("age type", typeof result.age, "number");
  TestEquality.equals("alive", result.alive, true);
  TestEquality.equals("alive type", typeof result.alive, "boolean");

  TestEquality.equals(
    "already typed control",
    typia.llm.coerce<IInput>({ name: "Jane", age: 25, alive: false }),
    { name: "Jane", age: 25, alive: false },
  );
};
