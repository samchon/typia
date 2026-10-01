import type { Question, TypeSafeClient } from "@typesafe-ai/sdk";
import { ILlmEvaluation } from "@typia/interface";
import { IJevNoulQuestion, IJevQuestion, toJevQuestions } from "@typia/jev";
import { TestEquality } from "@typia/template/equality";

/**
 * Verifies the Jev wire format type-checks against TypeSafe's SDK.
 *
 * The guide passes `toJevQuestions(...)` to `client.systemOne()` and its
 * answers to `decode()`. The SDK types a score question's criteria as a
 * non-empty tuple of at least two entries, so a plain `string[]` would compile
 * against AI SDK yet fail against the SDK. The SDK's own declarations are the
 * oracle, so any drift on either side breaks this compile instead of a user's.
 *
 * 1. Assert every converted question type is assignable to the SDK question.
 * 2. Assert a converted question map fits the `systemOne` request.
 * 3. Assert a converted score keeps its two-level tuple at runtime; the SDK answer
 *    map needs no check, because `decode()` takes `unknown`.
 *
 * @evidence contracts/testing.md#behavioral-verification the adapter or utility under test is called directly on inputs built in this case and the result is checked by 2 assertions (type cases; score). The case documents its purpose as: Verifies the Jev wire format type-checks against TypeSafe's SDK.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: The guide passes `toJevQuestions(...)` to `client.systemOne()` and its answers to `decode()`. The SDK types a score question's criteria as a non-empty tuple of at least two entries, so a plain `string[]` would compile against AI SDK yet fail against the SDK. The SDK's own declarations are the oracle, so any drift on either side breaks this compile instead of a user's. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (type cases; score) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-jev start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_jev_typesafe_sdk_contract is the exported entry; this case calls no typia producer, so it needs no native host and runs here only because the workspace has no separate plugin-free unit population, which is a recorded departure from the unit and boundary separation.
 */
export const test_jev_typesafe_sdk_contract = (): void => {
  // each element type is `true` only when the assignment holds
  const cases: [
    Extends<IJevNoulQuestion, Question>,
    Extends<ILlmEvaluation.IChoice, Question>,
    Extends<ILlmEvaluation.IScore, Question>,
    Extends<IJevQuestion, Question>,
    Extends<
      ReturnType<typeof toJevQuestions>,
      Parameters<TypeSafeClient["systemOne"]>[0]["questions"]
    >,
  ] = [true, true, true, true, true];
  TestEquality.equals("type cases", cases.length, 5);

  const output = toJevQuestions({
    level: {
      type: "score",
      instructions: "How severe?",
      criteria: ["Low", "High"],
    },
  });
  TestEquality.equals("score", output.level, {
    type: "score",
    instructions: "How severe?",
    criteria: ["Low", "High"],
  });
};

type Extends<X, Y> = [X] extends [Y] ? true : false;
