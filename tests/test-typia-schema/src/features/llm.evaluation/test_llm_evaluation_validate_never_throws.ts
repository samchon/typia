import { TestValidator } from "@nestia/e2e";
import typia from "typia";

/**
 * Verifies typia.llm.evaluation validate reports, never throws, on hostile
 * answer types.
 *
 * `validate(answers: unknown)` promises an `IValidation` result for any input.
 * Its "wrong answer type" messages describe the received `type`, and a bigint
 * or circular value there makes `JSON.stringify` throw, which would escape as
 * an exception instead of a failure on the decision path.
 *
 * 1. Answer each question family with a bigint `type`, then with a circular
 *    `type`.
 * 2. Validate each answer map.
 * 3. Assert a failure on every decision path, with no exception.
 */
export const test_llm_evaluation_validate_never_throws = (): void => {
  const evaluation = typia.llm.evaluation<IDecision>();
  const circular: Record<string, unknown> = {};
  circular.self = circular;
  for (const [title, type] of [
    ["bigint", 1n],
    ["circular", circular],
  ] as const) {
    const result = evaluation.validate({
      urgent: { type },
      team: { type, choice: "billing" },
      level: { type, score: 0 },
    });
    TestValidator.equals(
      title,
      result.success ? [] : result.errors.map((e) => e.path),
      ["$input.urgent", "$input.team", "$input.level"],
    );
  }
};

interface IDecision {
  /** Is it urgent? */
  urgent: boolean;

  /** Which team? */
  team: "billing" | "technical";

  /** How severe? */
  level: 0 | 1 | 2;
}
