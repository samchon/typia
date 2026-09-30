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
 * @evidence contracts/testing.md#behavioral-verification Calls toJevQuestions and inspects each question's actual representation, own data-key descriptor, output prototype and input snapshot so lost keys, excessive renaming and input mutation are observable.
 * @evidence contracts/testing.md#independent-expectations Literal noul, choice and score outputs follow the Jev wire contract; own-key and Object.prototype expectations follow ordinary JavaScript record semantics, while the snapshot only proves input nonmutation.
 * @evidence contracts/testing.md#distinguishing-cases Boolean questions must change and choice/score questions must not; the own __proto__ key distinguishes data-property creation from prototype-setter assignment, and an empty map must produce an empty ordinary record.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers the matching exported test_jev_questions function in the Jev suite; this case directly exercises the converter and requires neither a provider nor a native-generated evaluation object.
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
