import { TestEquality } from "@typia/template/equality";
import { experimental_evaluate } from "ai";
import { Experimental_EvaluationMockModelV4 } from "ai/test";
import typia from "typia";

/**
 * Verifies typia's questions and decoder integrate with AI SDK 7.
 *
 * AI SDK accepts the provider's declared two-decimal precision, and the typia
 * decoder must accept the same result when passed `result.rounding`, without
 * silently weakening the one-argument form.
 *
 * 1. Return a three-option distribution rounded to two decimals from a mock model.
 * 2. Assert AI SDK accepts it and strict typia decoding rejects it.
 * 3. Pass the provider's rounding declaration and assert the decoded value.
 */
export const test_jev_ai_sdk_rounding = async (): Promise<void> => {
  const evaluation = typia.llm.evaluation<IDecision>();
  const answers = {
    team: {
      type: "choice" as const,
      choice: "billing",
      probabilities: { billing: 0.33, technical: 0.33, sales: 0.33 },
    },
    level: {
      type: "score" as const,
      score: 1,
      probabilities: { "0": 0.33, "1": 0.33, "2": 0.33 },
    },
  };
  const result = await experimental_evaluate({
    model: new Experimental_EvaluationMockModelV4({
      doEvaluate: async () => ({
        answers,
        rounding: { probabilityDecimals: 2, scoreDecimals: 2 },
        warnings: [],
      }),
    }),
    state: "The payment page fails for every customer.",
    questions: evaluation.questions,
  });
  TestEquality.equals("AI SDK accepts rounded result", result.answers, answers);
  TestEquality.equals(
    "strict decode rejects",
    evaluation.decode(answers).success,
    false,
  );
  const decoded = evaluation.decode(result.answers, result.rounding);
  TestEquality.equals(
    "declared rounding decodes",
    decoded.success ? decoded.data : decoded.errors,
    { team: "billing", level: 0 },
  );
};

interface IDecision {
  /** Which team should handle this? */
  team: "billing" | "technical" | "sales";

  /** How severe is it? */
  level: 0 | 1 | 2;
}
