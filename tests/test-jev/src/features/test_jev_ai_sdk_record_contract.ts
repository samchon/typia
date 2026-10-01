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
 * @evidence contracts/testing.md#behavioral-verification typia.llm.evaluation is evaluated by the native host on the types declared in this case and the result is checked by 2 assertions (AI SDK rejects custom …; typia rejects custom …). The case documents its purpose as: Verifies the answer-record boundary against AI SDK 7's evaluation path.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: A custom prototype with all required own keys still fails the SDK response check. typia must reject the same root, answer, and distribution containers instead of returning a trusted decision value. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (AI SDK rejects custom …; typia rejects custom …) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-jev start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_jev_ai_sdk_record_contract is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
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
