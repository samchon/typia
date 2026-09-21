import { ILlmEvaluation, IValidation, tags } from "@typia/interface";
import type { Experimental_EvaluationQuestion as EvaluationQuestion } from "ai";

/**
 * Verifies the `ILlmEvaluation` contract and its AI SDK compatibility.
 *
 * `typia.llm.evaluation<T>().questions` is documented as directly usable as
 * `experimental_evaluate({ questions })`, and `decode()` as accepting that
 * call's `result.answers`. The oracle for both claims is AI SDK's own
 * declaration, not a copy of it: a drift in either side breaks this compile
 * instead of a user's. `decode()` takes `unknown`, which the identity check
 * pins, so any answer map is accepted by construction. The local shape is
 * pinned by identity, so the flat `IChoice | IScore | IBoolean` union behind
 * `IQuestion` and the `IValidation<T>` result cannot change silently.
 *
 * 1. Assert the question union, the question map, and the decode signature.
 * 2. Assert every question type is assignable to AI SDK's question type, and a
 *    question map to its `experimental_evaluate` input.
 * 3. Assert `tags.Probability` keeps booleans and literals assignable.
 */
export type LlmEvaluationContractCases = [
  // the local shape
  Assert<
    IsEqual<
      ILlmEvaluation.IQuestion,
      ILlmEvaluation.IChoice | ILlmEvaluation.IScore | ILlmEvaluation.IBoolean
    >
  >,
  Assert<
    IsEqual<
      ILlmEvaluation<IDecision>["questions"],
      Record<string, ILlmEvaluation.IQuestion>
    >
  >,
  Assert<
    IsEqual<
      ILlmEvaluation<IDecision>["decode"],
      (
        answers: unknown,
        rounding?: ILlmEvaluation.IRounding,
      ) => IValidation<IDecision>
    >
  >,

  // questions are AI SDK questions
  Assert<Extends<ILlmEvaluation.IChoice, EvaluationQuestion>>,
  Assert<Extends<ILlmEvaluation.IScore, EvaluationQuestion>>,
  Assert<Extends<ILlmEvaluation.IBoolean, EvaluationQuestion>>,
  Assert<
    Extends<
      ILlmEvaluation<IDecision>["questions"],
      Record<string, EvaluationQuestion>
    >
  >,

  // the tag is inert for assignability
  Assert<Extends<boolean, boolean & tags.Probability<0.8>>>,
  Assert<Extends<"escalate", "escalate" & tags.Probability<0.9>>>,
];

interface IDecision {
  urgent: boolean;
  team: "billing" | "technical";
}

type Assert<T extends true> = T;

type Extends<X, Y> = [X] extends [Y] ? true : false;

/**
 * True only when `X` and `Y` are the same type, not merely interchangeable.
 *
 * The deferred conditional inside a generic function signature makes TypeScript
 * compare the pair by identity, which is what separates this from an `extends`
 * pair: identity sees an optionality or `readonly` difference that
 * assignability forgives.
 */
type IsEqual<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? (<T>() => T extends Y ? 1 : 2) extends <T>() => T extends X ? 1 : 2
      ? true
      : false
    : false;
