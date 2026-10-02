import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies the configured decimals set the rounding tolerance of the decoder.
 *
 * Three two-decimal probabilities may sum to 0.99, while the score can differ
 * from their weighted mean because both were rounded independently. Two
 * decimals is the default, and a finer `decimals` makes the same answers
 * strict. Rounding tolerance never excuses bad keys, values, an incorrect
 * choice, or a material discrepancy.
 *
 * The evaluation also reports the configuration it was generated with.
 *
 * 1. Decode rounded distributions with the default and a finer `decimals`.
 * 2. Vary the selected choice, mean, and keys one at a time.
 * 3. Assert only deviations within the configured precision pass, and that
 *    `config` carries the default and the configured decimals.
 *
 * @evidence contracts/testing.md#behavioral-verification Default and six-decimal evaluations report their precision and give distinct verdicts for rounded choice/score distributions; materially wrong means, totals, maxima, keys and range values retain exact failures.
 * @evidence contracts/testing.md#independent-expectations The declared decimals configuration and authored arithmetic distributions determine expected tolerance behavior. Literal paths and config objects do not come from emitted output; total and weighted-mean values are visible in the case.
 * @evidence contracts/testing.md#distinguishing-cases Default rounding versus finer precision, both kinds of independent rounding, and one-axis invalid score/distribution/selection/key/range variations distinguish tolerance from permissive acceptance.
 * @evidence contracts/testing.md#execution-ownership test_llm_evaluation_configured_decimals is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.evaluation through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native analyzer must turn this decision type, its JSDoc and probability/configuration requirements into the question and decoding plan consumed by the runtime evaluation. Calling the runtime decoder with a handwritten plan cannot detect a missing rewrite or a mismatched emitted plan.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.llm.evaluation call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. Default rounding versus finer precision, both kinds of independent rounding, and one-axis invalid score/distribution/selection/key/range variations distinguish tolerance from permissive acceptance. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_evaluation_configured_decimals = (): void => {
  const evaluation = typia.llm.evaluation<IDecision>();
  const strict = typia.llm.evaluation<IDecision, { decimals: 6 }>();
  const answers = {
    team: {
      type: "choice",
      choice: "billing",
      probabilities: { billing: 0.33, technical: 0.33, sales: 0.33 },
    },
    level: {
      type: "score",
      score: 1,
      probabilities: { "0": 0.33, "1": 0.33, "2": 0.33 },
    },
  };
  const paths = (target: typeof evaluation, value: unknown): string[] => {
    const result = target.decode(value);
    return result.success ? [] : result.errors.map((error) => error.path);
  };

  TestEquality.equals("default config", evaluation.config, { decimals: 2 });
  TestEquality.equals("configured config", strict.config, { decimals: 6 });
  TestEquality.equals(
    "default is two decimals",
    paths(evaluation, answers),
    [],
  );
  TestEquality.equals("finer decimals are strict", paths(strict, answers), [
    "$input.team",
    "$input.level",
  ]);
  TestEquality.equals(
    "score uses both kinds of rounding",
    paths(evaluation, {
      ...answers,
      team: {
        ...answers.team,
        probabilities: { billing: 0.34, technical: 0.33, sales: 0.33 },
      },
      level: {
        ...answers.level,
        score: 1.01,
        probabilities: { "0": 0.34, "1": 0.33, "2": 0.33 },
      },
    }),
    [],
  );
  TestEquality.equals(
    "materially wrong score",
    paths(evaluation, {
      ...answers,
      level: { ...answers.level, score: 1.04 },
    }),
    ["$input.level"],
  );
  TestEquality.equals(
    "materially wrong distribution",
    paths(evaluation, {
      ...answers,
      team: {
        ...answers.team,
        probabilities: { billing: 0.3, technical: 0.3, sales: 0.3 },
      },
    }),
    ["$input.team"],
  );
  TestEquality.equals(
    "rounding does not excuse a nonmaximum choice",
    paths(evaluation, {
      ...answers,
      team: {
        ...answers.team,
        probabilities: { billing: 0.32, technical: 0.35, sales: 0.33 },
      },
    }),
    ["$input.team"],
  );
  TestEquality.equals(
    "rounding does not excuse a missing probability",
    paths(evaluation, {
      ...answers,
      team: {
        ...answers.team,
        probabilities: { billing: 0.5, technical: 0.5 },
      },
    }),
    ["$input.team"],
  );
  TestEquality.equals(
    "rounding does not excuse an out-of-range probability",
    paths(evaluation, {
      ...answers,
      team: {
        ...answers.team,
        probabilities: { billing: 1.01, technical: 0, sales: 0 },
      },
    }),
    ["$input.team"],
  );
};

interface IDecision {
  /** Which team should handle this? */
  team: "billing" | "technical" | "sales";

  /** How severe is this? */
  level: 0 | 1 | 2;
}
