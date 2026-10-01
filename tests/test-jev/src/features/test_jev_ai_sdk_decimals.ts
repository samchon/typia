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
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.evaluation is evaluated by the native host on the types declared in this case and the result is checked by 3 assertions (AI SDK accepts rounded result; finer decimals reject; default decimals decode). The case documents its purpose as: Verifies typia's questions and decoder integrate with AI SDK 7.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: AI SDK accepts the provider's declared two-decimal precision, and the typia decoder must accept the same result with its default of two decimals, while a finer `decimals` stays strict. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (AI SDK accepts rounded result; finer decimals reject; default decimals decode) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-jev start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_jev_ai_sdk_decimals is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
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
