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
