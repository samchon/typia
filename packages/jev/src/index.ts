import { ILlmEvaluation } from "@typia/interface";

/**
 * Question in the Jev wire format.
 *
 * Choice and score questions are the neutral ones; the yes/no question is
 * spelled `"noul"` instead of `"boolean"`.
 *
 * @evidence contracts/common.md#principled-implementation The union reuses choice and score representations unchanged and substitutes only Jev's noul discriminator for the neutral boolean variant.
 * @evidence contracts/common.md#clear-and-simple-design Shared evaluation variants remain their original types; only the wire-format variant that differs receives a local interface.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The literal noul discriminator belongs to the Jev wire contract, rather than a consumer or fixture-specific exception.
 * @evidence contracts/common.md#meaningful-documentation The comment identifies the wire format and explains precisely which question variant differs from provider-neutral evaluation.
 */
export type IJevQuestion =
  | ILlmEvaluation.IChoice
  | ILlmEvaluation.IScore
  | IJevNoulQuestion;

/**
 * Yes/no question in the Jev wire format.
 *
 * The neutral {@link ILlmEvaluation.IBoolean} question, spelled `"noul"`.
 *
 * @evidence contracts/common.md#principled-implementation The discriminator and instructions retain the boolean question's meaning while representing Jev's required noul spelling.
 * @evidence contracts/common.md#clear-and-simple-design Two required fields express the entire wire variant without duplicating unrelated choice or score fields.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The contract-defined noul literal is the only specialization; the interface introduces no foreign mutation or test-only behavior.
 * @evidence contracts/common.md#meaningful-documentation The declaration links the neutral boolean question and documents both the discriminator and decision instructions.
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
 * @evidence contracts/common.md#principled-implementation Object.entries visits own enumerable question keys; defineProperty preserves even __proto__ as data, maps boolean to noul, and leaves choice and score questions unchanged without mutating the input.
 * @evidence contracts/common.md#clear-and-simple-design A single pass constructs a fresh question map; the sole branch is the wire-format distinction and needs no conversion registry or additional adapter layer.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The noul spelling is a provider contract and defineProperty implements ordinary own-key semantics; neither depends on known fixture keys nor patches another object.
 * @evidence contracts/common.md#meaningful-documentation The public comment explains provider-neutral versus Jev spellings, pass-through variants, nonmutation, decoder compatibility and a complete SDK usage example.
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
