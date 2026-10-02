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
 * @evidence contracts/testing.md#behavioral-verification Native default and decimals6 evaluations feed real AI SDK7 experimental_evaluate with authored three-way probabilities .33 each; the SDK accepts its declared two-decimal rounding, the strict decoder rejects and default decode rebuilds billing and level0.
 * @evidence contracts/testing.md#independent-expectations Provider values and rounding metadata are handwritten. AI SDK independently accepts the distribution under its rounding contract; the documented score decoder selects the most probable level and resolves equal probabilities to the lower level, establishing level0 rather than the provider score1.
 * @evidence contracts/testing.md#distinguishing-cases The identical rounded answer is the positive default and negative six-decimal twin; both choice and numeric-score distributions exercise tolerance without claiming every precision boundary.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_jev_ai_sdk_decimals in the native-enabled Jev integration population; awaited SDK operations and local mock callbacks belong to this entry.
 * @evidence contracts/e2e.md#necessary-boundary Real AI SDK7 question/answer validation consumes the actual native evaluation object. A decoder-only unit cannot establish that SDK rounding declarations and generated question types interoperate.
 * @evidence contracts/e2e.md#shared-execution These three generated-evaluation cases share the existing Jev project and ttsx integration invocation. Official SDK mock-model instances supply in-process responses without independent compiler projects or live-provider sessions.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation creates fresh evaluation callbacks, answers and mock models; SDK promises are awaited and failures reach DynamicExecutor. No globals or foreign methods are replaced and no external server or process is retained.
 * @evidence contracts/e2e.md#preserved-coverage All original handwritten answers, precision settings, prototype layers and assertions remain executable here. Direct Jev conversion and TypeSafe SDK assignability cases retain their original assertions in the separate plugin-free unit population.
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
