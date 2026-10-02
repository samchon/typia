import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies the generated structured output coercer preserves Bob and converts
 * age/score strings to 42 and 95.5; already typed values remain unchanged.
 *
 * Integer/fractional conversion, preserved string field and already typed
 * controls distinguish the bound coercer behavior; no validation verdict is
 * attributed to coercion alone.
 *
 * 1. Execute the native calls for the declarations and inputs in this file.
 * 2. Compare the observed schema fragments or runtime results with the stated
 *    expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification The generated structured output coercer preserves Bob and converts age/score strings to 42 and 95.5; already typed values remain unchanged.
 * @evidence contracts/testing.md#independent-expectations The expected integer and fractional number literals follow the local input and IInput field types, independently of the generated schema.
 * @evidence contracts/testing.md#distinguishing-cases Integer/fractional conversion, preserved string field and already typed controls distinguish the bound coercer behavior; no validation verdict is attributed to coercion alone.
 * @evidence contracts/testing.md#execution-ownership test_llm_structuredOutput_coerce is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.structuredOutput through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native type analyzer/emitter connects the declared TypeScript type and options to the schema or bound runtime operation observed here. A utility unit with a handwritten schema cannot detect a missing rewrite, wrong emitted type shape or incorrect binding at this public producer.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.llm.structuredOutput call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. Integer/fractional conversion, preserved string field and already typed controls distinguish the bound coercer behavior; no validation verdict is attributed to coercion alone. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_structuredOutput_coerce = (): void => {
  interface IInput {
    name: string;
    age: number;
    score: number;
  }

  const output = typia.llm.structuredOutput<IInput>();

  // Test coerce with stringified values
  const coerced = output.coerce({
    name: "Bob",
    age: "42" as any,
    score: "95.5" as any,
  });

  TestEquality.equals("name", coerced.name, "Bob");
  TestEquality.equals("age", coerced.age, 42);
  TestEquality.equals("score", coerced.score, 95.5);

  TestEquality.equals(
    "already typed control",
    output.coerce({ name: "Ada", age: 0, score: 0.5 }),
    { name: "Ada", age: 0, score: 0.5 },
  );
};
