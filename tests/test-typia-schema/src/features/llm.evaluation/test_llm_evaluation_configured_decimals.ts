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
