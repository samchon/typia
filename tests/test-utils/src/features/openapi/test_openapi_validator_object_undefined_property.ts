import { TestValidator } from "@nestia/e2e";
import { OpenApi } from "@typia/interface";
import { OpenApiValidator } from "@typia/utils";
import typia from "typia";

interface IUndefined {
  name: string;
  nothing: undefined;
  grade: number | undefined;
}

/**
 * Verifies `equals: true` agrees with `typia.equals` on `undefined` values.
 *
 * A key whose value is `undefined` has no JSON form — `JSON.stringify` erases
 * it — so the value does not carry it as a property and it cannot be
 * superfluous. The closure check walked `Object.entries` and reported it
 * anyway, so a value typia generates was rejected against the schema typia
 * emits from the same type. `equals` mode exists to mirror `typia.equals`, and
 * `typia.equals` is an independent code generator, which makes it the oracle
 * here rather than the validator's own output.
 *
 * Both branches that walk `Object.entries` must agree on this: the closure
 * check, and the one constraining extras against an `additionalProperties`
 * schema, which would otherwise validate the key as a required value.
 *
 * 1. Confirm an `undefined`-valued key is not superfluous under `equals: true`,
 *    and that a defined extra key still is.
 * 2. Confirm an `additionalProperties` schema does not constrain a key with no
 *    JSON form, under either `equals` value.
 * 3. Round-trip a type whose members erase from the emitted schema and require
 *    the emitter's own schema to accept the emitter's own value.
 */
export const test_openapi_validator_object_undefined_property = (): void => {
  const schema: OpenApi.IJsonSchema.IObject = {
    type: "object",
    properties: { a: { type: "string" } },
    required: ["a"],
    additionalProperties: false,
  };
  const accepts = (value: unknown): boolean =>
    OpenApiValidator.validate({
      components: {},
      schema,
      value,
      required: true,
      equals: true,
    }).success;

  TestValidator.equals(
    "an undefined-valued key is not a property",
    accepts({ a: "value", b: undefined }),
    true,
  );
  TestValidator.equals(
    "a defined extra key is still superfluous",
    accepts({ a: "value", b: 1 }),
    false,
  );
  TestValidator.equals(
    "an undefined-valued key does not excuse its siblings",
    accepts({ a: "value", b: undefined, c: 1 }),
    false,
  );

  // `typia.equals` is the oracle, and it accepts what the closure check used to
  // reject.
  TestValidator.equals(
    "typia.equals accepts an undefined-valued key",
    typia.equals<{ a: string }>({ a: "value", b: undefined }),
    true,
  );
  TestValidator.equals(
    "typia.equals rejects a defined extra key",
    typia.equals<{ a: string }>({ a: "value", b: 1 }),
    false,
  );

  // The sibling branch: an `additionalProperties` schema constrains the extra
  // values, but a key with no JSON form is not one of them. `typia` accepts it
  // on an index-signature type under both `is` and `equals`.
  const constrained: OpenApi.IJsonSchema.IObject = {
    type: "object",
    properties: { a: { type: "string" } },
    required: ["a"],
    additionalProperties: { type: "string" },
  };
  const constrains = (value: unknown, equals: boolean): boolean =>
    OpenApiValidator.validate({
      components: {},
      schema: constrained,
      value,
      required: true,
      equals,
    }).success;
  for (const equals of [false, true]) {
    TestValidator.equals(
      `equals: ${equals} - a constrained object ignores an undefined-valued key`,
      constrains({ a: "value", b: undefined }, equals),
      true,
    );
    TestValidator.equals(
      `equals: ${equals} - a constrained object still checks a defined extra key`,
      constrains({ a: "value", b: 1 }, equals),
      false,
    );
  }
  TestValidator.equals(
    "typia accepts an undefined-valued key on an index-signature type",
    typia.equals<{ a: string; [key: string]: string }>({
      a: "value",
      b: undefined,
    } as any),
    true,
  );

  // The emitter's own round trip. `nothing` and an `undefined` union member
  // have no JSON form, so typia erases them from the schema while the value
  // still spells the keys out.
  const collection = typia.json.schema<IUndefined>();
  const value: IUndefined = {
    name: "someone",
    nothing: undefined,
    grade: undefined,
  };
  TestValidator.equals(
    "typia.equals accepts its own erased-member value",
    typia.equals<IUndefined>(value),
    true,
  );
  TestValidator.equals(
    "the emitted schema accepts its own erased-member value",
    OpenApiValidator.validate({
      components: collection.components,
      schema: collection.schema,
      value,
      required: true,
      equals: true,
    }).success,
    true,
  );
  TestValidator.equals(
    "the emitted schema still rejects a stray property",
    OpenApiValidator.validate({
      components: collection.components,
      schema: collection.schema,
      value: { ...value, stray: "extra" },
      required: true,
      equals: true,
    }).success,
    false,
  );
};
