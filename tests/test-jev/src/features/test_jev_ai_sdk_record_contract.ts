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
