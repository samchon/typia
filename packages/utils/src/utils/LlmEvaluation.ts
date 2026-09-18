import { ILlmEvaluation } from "@typia/interface";

/**
 * Utilities for LLM evaluation questions.
 *
 * - {@link LlmEvaluation.toTypeSafe}: Convert questions to TypeSafe's native wire
 *   format
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export namespace LlmEvaluation {
  /**
   * Boolean question in TypeSafe's native wire format.
   *
   * TypeSafe's own SDK and HTTP API (`POST /v1/systemone`) spell the boolean
   * question type `"noul"`.
   */
  export interface ITypeSafeNoul {
    /** Discriminator. */
    type: "noul";

    /** What to decide. */
    instructions: string;
  }

  /** Question in TypeSafe's native wire format. */
  export type ITypeSafeQuestion =
    | ILlmEvaluation.IChoice
    | ILlmEvaluation.IScore
    | ITypeSafeNoul;

  /**
   * Convert questions to TypeSafe's native wire format.
   *
   * `typia.llm.evaluation<T>().questions` follows the provider-neutral question
   * shape of Vercel AI SDK's `experimental_evaluate()`, which spells the
   * boolean question type `"boolean"`. TypeSafe's own SDK and HTTP API spell it
   * `"noul"`, so convert the questions before calling them directly. Choice and
   * score questions are already identical and pass through.
   *
   * The answers need no conversion: `ILlmEvaluation.validate()` accepts
   * TypeSafe's native `{ type: "noul", noul }` answers as they are.
   *
   * @param questions Questions of `typia.llm.evaluation<T>()`
   * @returns New question map in TypeSafe's native wire format
   */
  export function toTypeSafe(
    questions: Record<string, ILlmEvaluation.IQuestion>,
  ): Record<string, ITypeSafeQuestion> {
    const output: Record<string, ITypeSafeQuestion> = {};
    for (const [key, question] of Object.entries(questions))
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
}
