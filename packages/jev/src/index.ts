import { ILlmEvaluation } from "@typia/interface";

/**
 * Question in the Jev wire format.
 *
 * Choice and score questions are the neutral ones; the yes/no question is
 * spelled `"noul"` instead of `"boolean"`.
 */
export type IJevQuestion =
  | ILlmEvaluation.IChoice
  | ILlmEvaluation.IScore
  | IJevNoulQuestion;

/**
 * Yes/no question in the Jev wire format.
 *
 * The neutral {@link ILlmEvaluation.IBoolean} question, spelled `"noul"`.
 */
export interface IJevNoulQuestion {
  /** Discriminator. */
  type: "noul";

  /** What to decide. */
  instructions: string;
}

/**
 * Convert evaluation questions to the Jev wire format.
 *
 * `typia.llm.evaluation<T>()` emits the provider-neutral questions of Vercel AI
 * SDK's `experimental_evaluate()`, which spells the yes/no question
 * `"boolean"`. Jev, TypeSafe's System One model, spells it `"noul"` in its own
 * wire format, shared by TypeSafe's API and SDK and by OpenRouter's Decisions
 * API. Choice and score questions are identical in both formats and pass
 * through. The input is left untouched.
 *
 * The answers need no wire-format conversion: `decode()` accepts Jev's native
 * `{ type: "noul", noul }` answer as it is.
 *
 * ## Example
 *
 * ```typescript
 * import { TypeSafeClient } from "@typesafe-ai/sdk";
 * import { toJevQuestions } from "@typia/jev";
 * import typia from "typia";
 *
 * interface ITriage {
 *   /** Is the ticket urgent? *\/
 *   urgent: boolean;
 *
 *   /** Which team owns the ticket? *\/
 *   team: "billing" | "technical";
 * }
 *
 * const evaluation = typia.llm.evaluation<ITriage>();
 * const client = new TypeSafeClient();
 * const { answers } = await client.systemOne({
 *   state: "The payment page crashes for every customer.",
 *   questions: toJevQuestions(evaluation.questions),
 * });
 * const result = evaluation.decode(answers);
 * ```
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @param questions Questions of `typia.llm.evaluation<T>()`
 * @returns New question map in the Jev wire format
 */
export function toJevQuestions(
  questions: Record<string, ILlmEvaluation.IQuestion>,
): Record<string, IJevQuestion> {
  const output: Record<string, IJevQuestion> = {};
  for (const [key, question] of Object.entries(questions))
    // defineProperty keeps a `__proto__` key an own property
    Object.defineProperty(output, key, {
      value:
        question.type === "boolean"
          ? { type: "noul", instructions: question.instructions }
          : question,
      enumerable: true,
      writable: true,
      configurable: true,
    });
  return output;
}
