import { TestValidator } from "@nestia/e2e";
import { ILlmEvaluation } from "@typia/interface";
import { LlmEvaluation } from "@typia/utils";

/**
 * Verifies LlmEvaluation.toTypeSafe renames only boolean questions.
 *
 * TypeSafe's native API spells the boolean question `"noul"`, while choice and
 * score questions are identical to the neutral AI SDK shape. The converter must
 * rename exactly the boolean type, keep every key including `__proto__` as an
 * own property, and leave its input untouched so the same questions can still
 * be sent to a neutral provider.
 *
 * 1. Build neutral questions of every type, keyed with a `__proto__` entry.
 * 2. Convert them to the native wire format.
 * 3. Assert the renamed booleans, the passed-through choice and score, the own
 *    `__proto__` key, and the unchanged input.
 */
export const test_llm_evaluation_to_type_safe = (): void => {
  const questions: Record<string, ILlmEvaluation.IQuestion> = JSON.parse(
    JSON.stringify({
      urgent: { type: "boolean", instructions: "Is it urgent?" },
      team: {
        type: "choice",
        instructions: "Which team?",
        criteria: { billing: "Payments", technical: null },
      },
      level: {
        type: "score",
        instructions: "How severe?",
        criteria: ["Low", "High"],
      },
    }),
  );
  Object.defineProperty(questions, "__proto__", {
    value: { type: "boolean", instructions: "Prototype?" },
    enumerable: true,
    writable: true,
    configurable: true,
  });
  const snapshot: string = JSON.stringify(questions);

  const output: Record<string, LlmEvaluation.ITypeSafeQuestion> =
    LlmEvaluation.toTypeSafe(questions);
  TestValidator.equals("urgent", output.urgent, {
    type: "noul",
    instructions: "Is it urgent?",
  });
  TestValidator.equals("team", output.team, {
    type: "choice",
    instructions: "Which team?",
    criteria: { billing: "Payments", technical: null },
  });
  TestValidator.equals("level", output.level, {
    type: "score",
    instructions: "How severe?",
    criteria: ["Low", "High"],
  });
  TestValidator.equals(
    "__proto__",
    Object.getOwnPropertyDescriptor(output, "__proto__")?.value,
    { type: "noul", instructions: "Prototype?" },
  );
  TestValidator.equals(
    "prototype",
    Object.getPrototypeOf(output),
    Object.prototype,
  );
  TestValidator.equals("input untouched", JSON.stringify(questions), snapshot);
};
