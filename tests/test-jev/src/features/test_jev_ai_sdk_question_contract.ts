import { TestEquality } from "@typia/template/equality";
import { experimental_evaluate } from "ai";
import { Experimental_EvaluationMockModelV4 } from "ai/test";
import typia, { tags } from "typia";

/**
 * Verifies every question typia generates passes AI SDK's own question
 * validation, and that the SDK's answers fold back into the decision type.
 *
 * The compiler only accepts types whose questions satisfy the neutral
 * evaluation contract, so the SDK, which validates every question before it
 * calls a provider, must never reject one typia produced. A regression in the
 * question generator would otherwise surface only as a provider error at run
 * time.
 *
 * 1. Generate questions for a type with every question kind, a nested object, and
 *    an array set.
 * 2. Run them through `experimental_evaluate()` with a mock model that answers
 *    each question from its own criteria.
 * 3. Assert the SDK accepted them and `decode()` rebuilds the decision.
 *
 * @evidence contracts/testing.md#behavioral-verification Real AI SDK7 evaluates native-generated boolean, choice and score questions; authored mock answers decode to the complete nested decision, and a literal six-key list checks leaf enrollment.
 * @evidence contracts/testing.md#independent-expectations The SDK validates questions independently of typia. Expected decision values and six paths follow the declared IDecision; mock choice answers use the first generated criterion, so this does not independently certify every criterion label or provider decision.
 * @evidence contracts/testing.md#distinguishing-cases Boolean, enum choice, numeric score, literal-array membership and nested Probability0.8 cover distinct question kinds and paths. Record rejection and rounded-distribution rejection belong to the corresponding record and decimals siblings.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_jev_ai_sdk_question_contract in the native-enabled Jev integration population; awaited SDK operations and local mock callbacks belong to this entry.
 * @evidence contracts/e2e.md#necessary-boundary Generated questions cross into real AI SDK7 experimental_evaluate using its supported mock evaluation model. The SDK validates its own accepted question protocol before typia folds answers back into the decision.
 * @evidence contracts/e2e.md#shared-execution These three generated-evaluation cases share the existing Jev project and ttsx integration invocation. Official SDK mock-model instances supply in-process responses without independent compiler projects or live-provider sessions.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation creates fresh evaluation callbacks, answers and mock models; SDK promises are awaited and failures reach DynamicExecutor. No globals or foreign methods are replaced and no external server or process is retained.
 * @evidence contracts/e2e.md#preserved-coverage All original handwritten answers, precision settings, prototype layers and assertions remain executable here. Direct Jev conversion and TypeSafe SDK assignability cases retain their original assertions in the separate plugin-free unit population.
 */
export const test_jev_ai_sdk_question_contract = async (): Promise<void> => {
  const evaluation = typia.llm.evaluation<IDecision>();
  const result = await experimental_evaluate({
    model: new Experimental_EvaluationMockModelV4({
      doEvaluate: async ({ questions }) => ({
        answers: Object.fromEntries(
          Object.entries(questions).map(([key, question]) => [
            key,
            question.type === "boolean"
              ? { type: "boolean" as const, probability: 0.9 }
              : question.type === "choice"
                ? {
                    type: "choice" as const,
                    choice: Object.keys(question.criteria)[0]!,
                  }
                : { type: "score" as const, score: 1 },
          ]),
        ),
        warnings: [],
      }),
    }),
    state: "The payment page fails for every customer.",
    questions: evaluation.questions,
  });
  const decoded = evaluation.decode(result.answers);
  TestEquality.equals(
    "decision rebuilt from the SDK's answers",
    decoded.success ? decoded.data : decoded.errors,
    {
      urgent: true,
      team: Team.billing,
      level: Level.medium,
      channels: ["email", "phone"],
      refund: { requested: true },
    },
  );
  TestEquality.equals(
    "one question per leaf",
    Object.keys(evaluation.questions).sort(),
    [
      "channels.email",
      "channels.phone",
      "level",
      "refund.requested",
      "team",
      "urgent",
    ],
  );
};

enum Team {
  /** Payments and refunds */
  billing = "billing",
  /** Bugs and outages */
  technical = "technical",
}

enum Level {
  /** Can wait */
  low = 0,
  /** Respond today */
  medium = 1,
  /** Respond now */
  high = 2,
}

interface IDecision {
  /** Is it urgent? */
  urgent: boolean;

  /** Which team should handle this? */
  team: Team;

  /** How severe is it? */
  level: Level;

  /** Which channels does the customer use? */
  channels: Array<"email" | "phone">;

  refund: {
    /** Does the customer ask for a refund? */
    requested: boolean & tags.Probability<0.8>;
  };
}
