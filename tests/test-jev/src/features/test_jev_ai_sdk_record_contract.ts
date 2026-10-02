import { TestEquality } from "@typia/template/equality";
import { experimental_evaluate } from "ai";
import { Experimental_EvaluationMockModelV4 } from "ai/test";
import typia from "typia";

/**
 * Verifies the answer-record boundary against AI SDK 7's evaluation path.
 *
 * A custom prototype with all required own keys still fails the SDK response
 * check. typia must reject the same root, answer, and distribution containers
 * instead of returning a trusted decision value.
 *
 * 1. Construct otherwise valid choice answers with one custom-prototype layer.
 * 2. Send each through the AI SDK mock evaluation and typia's decoder.
 * 3. Assert both reject every non-record container.
 *
 * @evidence contracts/testing.md#behavioral-verification For custom-prototype answer maps, individual answers and probability distributions, real AI SDK7 must throw AI_InvalidResponseDataError and the native-generated typia decoder must return success:false.
 * @evidence contracts/testing.md#independent-expectations AI SDK7 independently rejects each injected non-record response. The otherwise valid authored choice and distribution isolate the changed prototype layer; no expected verdict comes from a typia output snapshot.
 * @evidence contracts/testing.md#distinguishing-cases Three one-layer custom prototypes distinguish root map, answer and distribution checks. Ordinary records are exercised by ai_sdk_decimals and ai_sdk_question_contract; this case does not claim rejection of every exotic object representation.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_jev_ai_sdk_record_contract in the native-enabled Jev integration population; awaited SDK operations and local mock callbacks belong to this entry.
 * @evidence contracts/e2e.md#necessary-boundary The real SDK response validator and the native-generated decoder consume identical malformed answer objects. Keeping both connections checks compatibility of accepted record provenance rather than only text emitted by typia.
 * @evidence contracts/e2e.md#shared-execution These three generated-evaluation cases share the existing Jev project and ttsx integration invocation. Official SDK mock-model instances supply in-process responses without independent compiler projects or live-provider sessions.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation creates fresh evaluation callbacks, answers and mock models; SDK promises are awaited and failures reach DynamicExecutor. No globals or foreign methods are replaced and no external server or process is retained.
 * @evidence contracts/e2e.md#preserved-coverage All original handwritten answers, precision settings, prototype layers and assertions remain executable here. Direct Jev conversion and TypeSafe SDK assignability cases retain their original assertions in the separate plugin-free unit population.
 */
export const test_jev_ai_sdk_record_contract = async (): Promise<void> => {
  const evaluation = typia.llm.evaluation<IDecision>();
  const answer = {
    type: "choice",
    choice: "billing",
    probabilities: { billing: 0.6, technical: 0.4 },
  };
  const inherited = <T extends object>(value: T): T =>
    Object.assign(Object.create({ inherited: true }), value);
  const cases: Array<[string, unknown]> = [
    ["answer map", inherited({ team: answer })],
    ["answer", { team: inherited(answer) }],
    [
      "distribution",
      {
        team: {
          ...answer,
          probabilities: inherited(answer.probabilities),
        },
      },
    ],
  ];
  for (const [name, answers] of cases) {
    let rejected = false;
    try {
      await experimental_evaluate({
        model: new Experimental_EvaluationMockModelV4({
          doEvaluate: async () => ({
            answers: answers as {
              team: {
                type: "choice";
                choice: string;
                probabilities: Record<string, number>;
              };
            },
            warnings: [],
          }),
        }),
        state: "A payment failed.",
        questions: evaluation.questions,
      });
    } catch (error) {
      rejected =
        error instanceof Error && error.name === "AI_InvalidResponseDataError";
    }
    TestEquality.equals(`AI SDK rejects custom ${name}`, rejected, true);
    TestEquality.equals(
      `typia rejects custom ${name}`,
      evaluation.decode(answers).success,
      false,
    );
  }
};

interface IDecision {
  /** Which team should handle this? */
  team: "billing" | "technical";
}
