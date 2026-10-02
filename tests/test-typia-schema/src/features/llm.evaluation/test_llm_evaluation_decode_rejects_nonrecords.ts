import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies the record boundary for untrusted evaluation answers.
 *
 * A custom prototype is not a response record, even when every required key is
 * an own property. Null-prototype dictionaries remain valid response records.
 *
 * 1. Answer boolean, choice, and score questions with valid plain records.
 * 2. Put a custom prototype at each answer-map layer in isolation.
 * 3. Assert decision-path failures and preserve null-prototype dictionaries.
 *
 * @evidence contracts/testing.md#behavioral-verification Plain answer records pass; adding a custom prototype independently at each map/answer/distribution layer fails on its exact path, while a fully null-prototype dictionary graph passes.
 * @evidence contracts/testing.md#independent-expectations The supported response-record contract accepts ordinary and null-prototype own dictionaries rather than arbitrary custom prototypes. Object.create constructs the adjacent witnesses independently of the decoder.
 * @evidence contracts/testing.md#distinguishing-cases Whole map, boolean/choice/score answer and both distribution layers each retain custom-prototype negatives; ordinary and null-prototype positives prevent blanket record rejection.
 * @evidence contracts/testing.md#execution-ownership test_llm_evaluation_decode_rejects_nonrecords is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.evaluation through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native analyzer must turn this decision type, its JSDoc and probability/configuration requirements into the question and decoding plan consumed by the runtime evaluation. Calling the runtime decoder with a handwritten plan cannot detect a missing rewrite or a mismatched emitted plan.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.llm.evaluation call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. Whole map, boolean/choice/score answer and both distribution layers each retain custom-prototype negatives; ordinary and null-prototype positives prevent blanket record rejection. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_evaluation_decode_rejects_nonrecords = (): void => {
  const evaluation = typia.llm.evaluation<IDecision>();
  const plain = {
    urgent: { type: "boolean", probability: 0.8 },
    team: {
      type: "choice",
      choice: "billing",
      probabilities: { billing: 0.6, technical: 0.4 },
    },
    level: {
      type: "score",
      score: 0.4,
      probabilities: { "0": 0.6, "1": 0.4 },
    },
  };
  const inherited = <T extends object>(value: T): T =>
    Object.assign(Object.create({ inherited: true }), value);
  const dictionary = <T extends object>(value: T): T =>
    Object.assign(Object.create(null), value);
  const paths = (answers: unknown): string[] => {
    const result = evaluation.decode(answers);
    return result.success ? [] : result.errors.map((error) => error.path);
  };

  TestEquality.equals("plain records", paths(plain), []);
  TestEquality.equals("custom answer map", paths(inherited(plain)), ["$input"]);
  TestEquality.equals(
    "custom boolean answer",
    paths({ ...plain, urgent: inherited(plain.urgent) }),
    ["$input.urgent"],
  );
  TestEquality.equals(
    "custom choice answer",
    paths({ ...plain, team: inherited(plain.team) }),
    ["$input.team"],
  );
  TestEquality.equals(
    "custom score answer",
    paths({ ...plain, level: inherited(plain.level) }),
    ["$input.level"],
  );
  TestEquality.equals(
    "custom choice distribution",
    paths({
      ...plain,
      team: {
        ...plain.team,
        probabilities: inherited(plain.team.probabilities),
      },
    }),
    ["$input.team"],
  );
  TestEquality.equals(
    "custom score distribution",
    paths({
      ...plain,
      level: {
        ...plain.level,
        probabilities: inherited(plain.level.probabilities),
      },
    }),
    ["$input.level"],
  );
  TestEquality.equals(
    "null-prototype records",
    paths(
      dictionary({
        urgent: dictionary(plain.urgent),
        team: dictionary({
          ...plain.team,
          probabilities: dictionary(plain.team.probabilities),
        }),
        level: dictionary({
          ...plain.level,
          probabilities: dictionary(plain.level.probabilities),
        }),
      }),
    ),
    [],
  );
};

interface IDecision {
  /** Does the customer need urgent help? */
  urgent: boolean;

  /** Which team should handle this? */
  team: "billing" | "technical";

  /** How severe is it? */
  level: 0 | 1;
}
