import { TestEquality } from "@typia/template/equality";
import { experimental_evaluate } from "ai";
import { Experimental_EvaluationMockModelV4 } from "ai/test";
import typia from "typia";

/**
 * Verifies typia's questions and decoder integrate with AI SDK 7.
 *
 * AI SDK accepts the provider's declared two-decimal precision, and the typia
 * decoder must accept the same result with its default of two decimals, while a
 * finer `decimals` stays strict.
 *
 * 1. Return a three-option distribution rounded to two decimals from a mock model.
 * 2. Assert AI SDK accepts it and a decoder configured for six decimals rejects
 *    it.
 * 3. Decode it with the default decoder and assert the decoded value.
 */
export const test_jev_ai_sdk_decimals = async (): Promise<void> => {
  const evaluation = typia.llm.evaluation<IDecision>();
  const strict = typia.llm.evaluation<IDecision, { decimals: 6 }>();
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
    "finer decimals reject",
    strict.decode(answers).success,
    false,
  );
  const decoded = evaluation.decode(result.answers);
  TestEquality.equals(
    "default decimals decode",
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
