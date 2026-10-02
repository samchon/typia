import { TestEquality } from "@typia/template/equality";
import typia, { tags } from "typia";

/**
 * Verifies a gated choice option named like an Object.prototype member keeps
 * its gate.
 *
 * The gate reads the selected option's probability from the answer's
 * distribution. An option named `constructor`, `toString`, `valueOf`, or
 * `hasOwnProperty` must read only an own probability: an inherited function
 * compares as neither below nor at the minimum, which would silently accept a
 * gated option whose probability the answer never gave.
 *
 * 1. Gate options named after `Object.prototype` members.
 * 2. Select each one with a distribution that omits it, then with one below and at
 *    its minimum.
 * 3. Assert the missing and low probabilities fail and the sufficient one passes.
 *
 * @evidence contracts/testing.md#behavioral-verification For each prototype-like choice name, the native evaluation decoder rejects an inherited selected probability and a below-minimum own distribution, accepting the complete at-minimum distribution.
 * @evidence contracts/testing.md#independent-expectations Object own-property semantics and the declared 0.5 Probability minimum independently require false/false/true; the inherited 0.9 is deliberately not an own answer value.
 * @evidence contracts/testing.md#distinguishing-cases constructor, toString, valueOf and hasOwnProperty each retain inherited/missing, below and at controls. Object.fromEntries creates independent complete distributions for each loop iteration.
 * @evidence contracts/testing.md#execution-ownership test_llm_evaluation_choice_minimum_prototype_names is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.evaluation through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native analyzer must turn this decision type, its JSDoc and probability/configuration requirements into the question and decoding plan consumed by the runtime evaluation. Calling the runtime decoder with a handwritten plan cannot detect a missing rewrite or a mismatched emitted plan.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.llm.evaluation call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. constructor, toString, valueOf and hasOwnProperty each retain inherited/missing, below and at controls. Object.fromEntries creates independent complete distributions for each loop iteration. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_evaluation_choice_minimum_prototype_names = (): void => {
  const evaluation = typia.llm.evaluation<IDecision>();
  const names = [
    "constructor",
    "toString",
    "valueOf",
    "hasOwnProperty",
    "other",
  ] as const;
  for (const name of names.slice(0, -1)) {
    const run = (probabilities: Record<string, number>) =>
      evaluation.decode({
        action: { type: "choice", choice: name, probabilities },
      }).success;
    const complete = (selected: number): Record<string, number> =>
      Object.fromEntries(
        names.map((key) => [
          key,
          key === name ? selected : (1 - selected) / (names.length - 1),
        ]),
      );
    const inherited: Record<string, number> = Object.create({ [name]: 0.9 });
    for (const key of names)
      if (key !== name) inherited[key] = 1 / (names.length - 1);
    TestEquality.equals(`${name} omitted`, run(inherited), false);
    TestEquality.equals(`${name} below`, run(complete(0.49)), false);
    TestEquality.equals(`${name} at`, run(complete(0.5)), true);
  }
};

interface IDecision {
  /** Which action? */
  action:
    | ("constructor" & tags.Probability<0.5>)
    | ("toString" & tags.Probability<0.5>)
    | ("valueOf" & tags.Probability<0.5>)
    | ("hasOwnProperty" & tags.Probability<0.5>)
    | ("other" & tags.Probability<0>);
}
