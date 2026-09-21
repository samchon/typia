import { ILlmEvaluation } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies the AI SDK's declared rounding rule at the conversion boundary.
 * Three two-decimal probabilities may sum to 0.99, while the score can differ
 * from their weighted mean because both were rounded independently. An absent
 * declaration stays strict, and a declaration never excuses bad keys, values,
 * an incorrect choice, or a material discrepancy.
 *
 * 1. Decode rounded distributions with and without declared precision.
 * 2. Vary the selected choice, mean, keys, and decimal declarations one at a time.
 * 3. Assert only deviations within the declared precision pass.
 */
export const test_llm_evaluation_declared_rounding = (): void => {
  const evaluation: ILlmEvaluation<IDecision> =
    typia.llm.evaluation<IDecision>();
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
  const rounded: ILlmEvaluation.IRounding = {
    probabilityDecimals: 2,
    scoreDecimals: 2,
  };
  const paths = (
    value: unknown,
    rounding?: ILlmEvaluation.IRounding,
  ): string[] => {
    const result = evaluation.decode(value, rounding);
    return result.success ? [] : result.errors.map((error) => error.path);
  };

  TestEquality.equals("strict without declaration", paths(answers), [
    "$input.team",
    "$input.level",
  ]);
  TestEquality.equals("declared two decimals", paths(answers, rounded), []);
  TestEquality.equals(
    "rounding metadata need not be a response record",
    paths(answers, Object.assign(Object.create({ provider: true }), rounded)),
    [],
  );
  TestEquality.equals(
    "score uses both kinds of rounding",
    paths(
      {
        ...answers,
        team: {
          ...answers.team,
          probabilities: {
            billing: 0.34,
            technical: 0.33,
            sales: 0.33,
          },
        },
        level: {
          ...answers.level,
          score: 1.01,
          probabilities: { "0": 0.34, "1": 0.33, "2": 0.33 },
        },
      },
      rounded,
    ),
    [],
  );
  TestEquality.equals(
    "materially wrong score",
    paths({ ...answers, level: { ...answers.level, score: 1.04 } }, rounded),
    ["$input.level"],
  );
  TestEquality.equals(
    "materially wrong distribution",
    paths(
      {
        ...answers,
        team: {
          ...answers.team,
          probabilities: { billing: 0.3, technical: 0.3, sales: 0.3 },
        },
      },
      rounded,
    ),
    ["$input.team"],
  );
  TestEquality.equals(
    "rounding does not excuse a nonmaximum choice",
    paths(
      {
        ...answers,
        team: {
          ...answers.team,
          probabilities: { billing: 0.32, technical: 0.35, sales: 0.33 },
        },
      },
      rounded,
    ),
    ["$input.team"],
  );
  TestEquality.equals(
    "rounding does not excuse a missing probability",
    paths(
      {
        ...answers,
        team: {
          ...answers.team,
          probabilities: { billing: 0.5, technical: 0.5 },
        },
      },
      rounded,
    ),
    ["$input.team"],
  );
  TestEquality.equals(
    "rounding does not excuse an out-of-range probability",
    paths(
      {
        ...answers,
        team: {
          ...answers.team,
          probabilities: { billing: 1.01, technical: 0, sales: 0 },
        },
      },
      rounded,
    ),
    ["$input.team"],
  );
  for (const decimals of [-1, 1.5, 16, NaN, Infinity])
    TestEquality.equals(
      `invalid decimal ${decimals}`,
      paths(answers, { probabilityDecimals: decimals }),
      ["$input"],
    );
  TestEquality.equals(
    "invalid score precision",
    paths(answers, { scoreDecimals: 16 }),
    ["$input"],
  );
};

interface IDecision {
  /** Which team should handle this? */
  team: "billing" | "technical" | "sales";

  /** How severe is this? */
  level: 0 | 1 | 2;
}
