import { IValidation } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies typia.llm.evaluation validate rejects malformed answer values.
 *
 * The AI SDK `EvaluationModelV4` answer spec bounds every value: P(true) is in
 * `[0, 1]`, a choice is one declared maximum-probability option, a score is the
 * distribution's fractional weighted mean in `[0, levels - 1]`, and an optional
 * distribution contains every declared option or level and sums to one. Each
 * malformed value must fail on its own decision path, while the well-formed
 * neighbor in the same map still converts.
 *
 * 1. Build one answer map per malformed case, next to a valid control.
 * 2. Validate each map.
 * 3. Assert exactly the malformed path fails.
 */
export const test_llm_evaluation_validate_rejects_malformed_answers =
  (): void => {
    const evaluation = typia.llm.evaluation<IDecision>();
    const valid = {
      urgent: { type: "boolean", probability: 0.5 },
      team: {
        type: "choice",
        choice: "billing",
        probabilities: { billing: 0.6, technical: 0.4 },
      },
      level: {
        type: "score",
        score: 1.1,
        probabilities: { "0": 0.2, "1": 0.5, "2": 0.3 },
      },
    };
    const cases: Array<[string, Record<string, unknown>, string]> = [
      [
        "boolean over one",
        { urgent: { type: "boolean", probability: 1.01 } },
        "$input.urgent",
      ],
      [
        "boolean negative",
        { urgent: { type: "noul", noul: -0.01 } },
        "$input.urgent",
      ],
      [
        "boolean NaN",
        { urgent: { type: "boolean", probability: NaN } },
        "$input.urgent",
      ],
      [
        "boolean wrong type",
        { urgent: { type: "choice", choice: "billing" } },
        "$input.urgent",
      ],
      ["boolean scalar", { urgent: true }, "$input.urgent"],
      [
        "choice undeclared",
        { team: { type: "choice", choice: "sales" } },
        "$input.team",
      ],
      [
        "choice wrong type",
        { team: { type: "score", score: 0 } },
        "$input.team",
      ],
      [
        "choice foreign probability",
        {
          team: {
            type: "choice",
            choice: "billing",
            probabilities: { sales: 1 },
          },
        },
        "$input.team",
      ],
      [
        "choice probability over one",
        {
          team: {
            type: "choice",
            choice: "billing",
            probabilities: { billing: 2 },
          },
        },
        "$input.team",
      ],
      [
        "choice partial distribution",
        {
          team: {
            type: "choice",
            choice: "billing",
            probabilities: { billing: 1 },
          },
        },
        "$input.team",
      ],
      [
        "choice distribution does not sum to one",
        {
          team: {
            type: "choice",
            choice: "billing",
            probabilities: { billing: 0.4, technical: 0.4 },
          },
        },
        "$input.team",
      ],
      [
        "choice is not a maximum",
        {
          team: {
            type: "choice",
            choice: "billing",
            probabilities: { billing: 0.4, technical: 0.6 },
          },
        },
        "$input.team",
      ],
      [
        "score over last",
        { level: { type: "score", score: 2.01 } },
        "$input.level",
      ],
      [
        "score negative",
        { level: { type: "score", score: -0.1 } },
        "$input.level",
      ],
      [
        "score infinite",
        { level: { type: "score", score: Infinity } },
        "$input.level",
      ],
      [
        "score foreign index",
        { level: { type: "score", score: 1, probabilities: { "3": 1 } } },
        "$input.level",
      ],
      [
        "score partial distribution",
        {
          level: {
            type: "score",
            score: 0,
            probabilities: { "0": 1, "1": 0 },
          },
        },
        "$input.level",
      ],
      [
        "score distribution does not sum to one",
        {
          level: {
            type: "score",
            score: 1,
            probabilities: { "0": 0.2, "1": 0.2, "2": 0.2 },
          },
        },
        "$input.level",
      ],
      [
        "score disagrees with distribution",
        {
          level: {
            type: "score",
            score: 0,
            probabilities: { "0": 0, "1": 0, "2": 1 },
          },
        },
        "$input.level",
      ],
    ];

    TestEquality.equals("control", evaluation.decode(valid).success, true);
    for (const [title, patch, path] of cases) {
      const result: IValidation<IDecision> = evaluation.decode({
        ...valid,
        ...patch,
      });
      TestEquality.equals(
        title,
        result.success ? [] : result.errors.map((e) => e.path),
        [path],
      );
    }
  };

interface IDecision {
  /** Is it urgent? */
  urgent: boolean;

  /** Which team? */
  team: "billing" | "technical";

  /** How severe? */
  level: 0 | 1 | 2;
}
