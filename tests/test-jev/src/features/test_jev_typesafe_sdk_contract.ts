import type { EntryType, Question, TypeSafeClient } from "@typesafe-ai/sdk";
import { ILlmEvaluation } from "@typia/interface";
import { Jev } from "@typia/jev";
import { TestEquality } from "@typia/template/equality";

/**
 * Verifies the Jev wire format and client type-check against TypeSafe's SDK.
 *
 * `Jev.typesafe()` calls `client.systemOne({ questions: Jev.questions(...) })`
 * on the SDK's own client and passes `response.answers` to `validate()`. The
 * package takes no dependency on the SDK, so `Jev.ITypeSafeClient` describes
 * the client structurally, and `TypeSafeClient` must keep satisfying it. The
 * SDK also types a score question's criteria as a non-empty tuple of at least
 * two entries, so a plain `string[]` would compile against AI SDK yet fail
 * against the SDK the guide shows. The SDK's own declarations are the oracle,
 * so any drift on either side breaks this compile instead of a user's.
 *
 * 1. Assert every converted question type is assignable to the SDK question.
 * 2. Assert a converted question map fits the `systemOne` request, the SDK client
 *    fits `Jev.ITypeSafeClient`, and the request and result fit in the
 *    directions the method's bivariance would not check.
 * 3. Assert a converted score keeps its two-level tuple at runtime; the SDK answer
 *    map needs no check, because `validate()` takes `unknown`.
 */
export const test_jev_typesafe_sdk_contract = (): void => {
  // each element type is `true` only when the assignment holds
  const cases: [
    Extends<Jev.INoul, Question>,
    Extends<ILlmEvaluation.IChoice, Question>,
    Extends<ILlmEvaluation.IScore, Question>,
    Extends<Jev.IQuestion, Question>,
    Extends<
      ReturnType<typeof Jev.questions>,
      Parameters<TypeSafeClient["systemOne"]>[0]["questions"]
    >,
    Extends<TypeSafeClient, Jev.ITypeSafeClient>,
    // the method check above is bivariant, so pin both directions explicitly:
    // the request Jev.typesafe() builds must satisfy the SDK's request, which a
    // new required SDK field would break,
    Extends<
      {
        state: EntryType;
        questions: Record<string, Jev.IQuestion>;
        model?: string;
      },
      Parameters<TypeSafeClient["systemOne"]>[0]
    >,
    // and the SDK's result must satisfy what Jev.typesafe() reads from it
    Extends<
      Awaited<ReturnType<TypeSafeClient["systemOne"]>>,
      Awaited<ReturnType<Jev.ITypeSafeClient["systemOne"]>>
    >,
  ] = [true, true, true, true, true, true, true, true];
  TestEquality.equals("type cases", cases.length, 8);

  const output = Jev.questions({
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
