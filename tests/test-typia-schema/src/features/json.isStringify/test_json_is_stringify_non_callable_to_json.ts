import { TestEquality } from "@typia/template/equality";
import typia, { IValidation } from "typia";

interface IJsonable {
  keep: number;
  value: {
    toJSON: () => string;
  };
}

/**
 * Verifies a non-callable `toJSON` is answered, never thrown on.
 *
 * Serializing a `toJSON`-bearing type means calling `toJSON`, and the emitted
 * union arm that does so carries its own `typeof input.toJSON === "function"`
 * test. When that arm was the only one, the surrounding code dropped the test
 * along with the choice — there is nothing to choose between — and left the
 * call unguarded. A value whose `toJSON` is a non-function then threw
 * `input.value.toJSON is not a function` from inside the serializer, so
 * `isStringify` and `validateStringify`, whose whole purpose is to answer for
 * untrusted input without a `try`/`catch`, threw on exactly the input they
 * exist to handle.
 *
 * `JSON.stringify` ignores a non-callable `toJSON` and serializes the object
 * itself, which is what the guard now falls back to.
 *
 * `typia.is` is deliberately not asserted here: under default options it does
 * not validate function members — that is what `functional` is for — so it
 * answers `true`, and the JSON path cannot inherit that leniency because it has
 * to perform the call.
 *
 * 1. Take a value whose nested `toJSON` is a number rather than a function.
 * 2. Require `stringify` to answer, and its answer to be JSON. The answer
 *    describes the declared shape, so the function member is omitted and the
 *    result is `{}` rather than native `JSON.stringify`'s `{"toJSON":1}` —
 *    typia does not emit a member the type does not declare.
 * 3. Require `isStringify` and `validateStringify` to answer rather than throw.
 * 4. Keep the positive twin passing: a real `toJSON` still serializes through its
 *    return value.
 *
 * @evidence contracts/testing.md#behavioral-verification Stringify variants handle a non-callable declared toJSON property without invoking it.
 * @evidence contracts/testing.md#independent-expectations Authored projected shapes and a callable positive twin anchor raw output; guarded accepted branches must parse to the fixed declared projection, while a rejected validation branch must contain diagnostics. The invalid verdict itself remains permitted to accept or reject.
 * @evidence contracts/testing.md#distinguishing-cases The invalid input retains all raw/is/validate calls and no-throw checks, with accepted-output or nonempty-rejection diagnostics checks added; the callable twin now supplies positive JSON-output controls for all three forms.
 * @evidence contracts/testing.md#execution-ownership The schema start runner discovers test_json_is_stringify_non_callable_to_json through DynamicExecutor and ttsx with the native typia plugin; its exported body owns the assertions.
 * @evidence contracts/e2e.md#necessary-boundary Native function-property projection and runtime toJSON callability checks must connect without a TypeError.
 * @evidence contracts/e2e.md#shared-execution The case reuses the suite project load and native plugin artifact. Its inputs do not build or launch a separate host.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Inputs and generated results are local to the case. The suite owns the shared host lifetime; no cold cache transition is asserted.
 * @evidence contracts/e2e.md#preserved-coverage The invalid input retains all raw/is/validate calls and no-throw checks, with accepted-output or nonempty-rejection diagnostics checks added; the callable twin now supplies positive JSON-output controls for all three forms. Original inputs and assertions remain; source review and final execution are reported separately.
 */
export const test_json_is_stringify_non_callable_to_json = (): void => {
  const invalid: IJsonable = { keep: 1, value: { toJSON: 1 } } as never;
  const valid: IJsonable = { keep: 1, value: { toJSON: () => "x" } };

  const text: string = typia.json.stringify<IJsonable>(invalid);
  TestEquality.equals("stringify answers with JSON", JSON.parse(text), {
    keep: 1,
    value: {},
  });

  const guarded: string | null = typia.json.isStringify<IJsonable>(invalid);
  TestEquality.equals(
    "isStringify answers instead of throwing",
    guarded === null || typeof guarded === "string",
    true,
  );
  if (guarded !== null)
    TestEquality.equals(
      "isStringify accepted projection",
      JSON.parse(guarded),
      {
        keep: 1,
        value: {},
      },
    );

  const validated: IValidation<string> =
    typia.json.validateStringify<IJsonable>(invalid);
  TestEquality.equals(
    "validateStringify answers instead of throwing",
    typeof validated.success,
    "boolean",
  );
  if (validated.success)
    TestEquality.equals(
      "validateStringify accepted projection",
      JSON.parse(validated.data),
      { keep: 1, value: {} },
    );
  else
    TestEquality.equals(
      "validateStringify rejection has diagnostics",
      validated.errors.length > 0,
      true,
    );

  TestEquality.equals(
    "the twin serializes through toJSON",
    JSON.parse(typia.json.stringify<IJsonable>(valid)),
    JSON.parse(JSON.stringify(valid)),
  );
  const expected = { keep: 1, value: "x" };
  const guardedValid = typia.json.isStringify<IJsonable>(valid);
  if (guardedValid === null)
    throw new Error("The callable toJSON twin must pass isStringify.");
  TestEquality.equals(
    "isStringify callable twin",
    JSON.parse(guardedValid),
    expected,
  );
  const validatedValid = typia.json.validateStringify<IJsonable>(valid);
  if (!validatedValid.success)
    throw new Error("The callable toJSON twin must pass validateStringify.");
  TestEquality.equals(
    "validateStringify callable twin",
    JSON.parse(validatedValid.data),
    expected,
  );
};
