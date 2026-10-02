import { ILlmEvaluation } from "@typia/interface";
import { IJevQuestion, toJevQuestions } from "@typia/jev";
import { TestEquality } from "@typia/template/equality";

/**
 * Verifies toJevQuestions renames only boolean questions.
 *
 * The Jev wire format spells the boolean question `"noul"`, while choice and
 * score questions are identical to the neutral AI SDK shape. The converter must
 * rename exactly the boolean type, keep every key including `__proto__` as an
 * own property, and leave its input untouched so the same questions can still
 * be sent to a neutral provider.
 *
 * 1. Build neutral questions of every type, keyed with a `__proto__` entry.
 * 2. Convert them to the native wire format.
 * 3. Assert the renamed booleans, the passed-through choice and score, the own
 *    `__proto__` key, and the unchanged input.
 *
 * @evidence contracts/testing.md#behavioral-verification Directly converts boolean, choice and score records and checks complete literal outputs, own __proto__ descriptor, ordinary output prototype, input nonmutation and empty-map behavior.
 * @evidence contracts/testing.md#independent-expectations Jev noul versus neutral choice/score spellings and ordinary JavaScript own-property semantics establish literal expectations. The input snapshot only establishes nonmutation, not correctness of the output.
 * @evidence contracts/testing.md#distinguishing-cases Boolean type must change while choice/score remain intact; own __proto__ must remain data rather than mutate the prototype, and empty input must yield an empty ordinary record.
 * @evidence contracts/testing.md#execution-ownership The plugin-free node:test runner explicitly registers test_jev_questions under its original case name. test:unit uses ttsx --no-plugins and tsconfig.unit.json; these portable operations do not load a native producer or product host.
 */
export const test_jev_questions = (): void => {
  const empty: Record<string, IJevQuestion> = toJevQuestions({});
  TestEquality.equals("empty questions", {}, empty);
  TestEquality.equals(
    "empty prototype",
    true,
    Object.getPrototypeOf(empty) === Object.prototype,
  );
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

  const output: Record<string, IJevQuestion> = toJevQuestions(questions);
  TestEquality.equals("urgent", output.urgent, {
    type: "noul",
    instructions: "Is it urgent?",
  });
  TestEquality.equals("team", output.team, {
    type: "choice",
    instructions: "Which team?",
    criteria: { billing: "Payments", technical: null },
  });
  TestEquality.equals("level", output.level, {
    type: "score",
    instructions: "How severe?",
    criteria: ["Low", "High"],
  });
  TestEquality.equals(
    "__proto__",
    Object.getOwnPropertyDescriptor(output, "__proto__")?.value,
    { type: "noul", instructions: "Prototype?" },
  );
  TestEquality.equals(
    "prototype",
    Object.getPrototypeOf(output) === Object.prototype,
    true,
  );
  TestEquality.equals("input untouched", JSON.stringify(questions), snapshot);
};
