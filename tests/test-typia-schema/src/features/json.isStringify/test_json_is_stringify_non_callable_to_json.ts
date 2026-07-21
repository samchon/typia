import { TestValidator } from "@nestia/e2e";
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
 */
export const test_json_is_stringify_non_callable_to_json = (): void => {
  const invalid: IJsonable = { keep: 1, value: { toJSON: 1 } } as never;
  const valid: IJsonable = { keep: 1, value: { toJSON: () => "x" } };

  const text: string = typia.json.stringify<IJsonable>(invalid);
  TestValidator.equals("stringify answers with JSON", JSON.parse(text), {
    keep: 1,
    value: {},
  });

  const guarded: string | null = typia.json.isStringify<IJsonable>(invalid);
  TestValidator.equals(
    "isStringify answers instead of throwing",
    guarded === null || typeof guarded === "string",
    true,
  );

  const validated: IValidation<string> =
    typia.json.validateStringify<IJsonable>(invalid);
  TestValidator.equals(
    "validateStringify answers instead of throwing",
    typeof validated.success,
    "boolean",
  );

  TestValidator.equals(
    "the twin serializes through toJSON",
    JSON.parse(typia.json.stringify<IJsonable>(valid)),
    JSON.parse(JSON.stringify(valid)),
  );
};
