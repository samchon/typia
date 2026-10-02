import { OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { OpenApiValidator } from "@typia/utils";

/**
 * Verifies undefined-valued ordinary object keys have no JSON property value.
 *
 * These seven original literal verdicts move from the native interoperability
 * peer with their schemas and payloads unchanged.
 *
 * @evidence contracts/testing.md#behavioral-verification OpenApiValidator validates every original closed-object and additionalProperties object against authored success booleans.
 * @evidence contracts/testing.md#independent-expectations The literal verdicts follow JSON projection: undefined-valued extras disappear, while defined numeric extras violate closure or a string additionalProperties schema.
 * @evidence contracts/testing.md#distinguishing-cases Undefined extras, defined extras and an undefined extra with a defined sibling cover closure; both equals settings cover constrained extras. The native peer retains its generated equals callbacks and emitted-schema round trip.
 * @evidence contracts/testing.md#execution-ownership The test-utils test:unit entry registers this case under plugin-free tsconfig.unit.json; every schema and payload is local to this invocation and needs no native producer.
 */
export const test_openapi_validator_object_undefined_property_portable =
  (): void => {
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

    TestEquality.equals(
      "an undefined-valued key is not a property",
      accepts({ a: "value", b: undefined }),
      true,
    );
    TestEquality.equals(
      "a defined extra key is still superfluous",
      accepts({ a: "value", b: 1 }),
      false,
    );
    TestEquality.equals(
      "an undefined-valued key does not excuse its siblings",
      accepts({ a: "value", b: undefined, c: 1 }),
      false,
    );

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
      TestEquality.equals(
        `equals: ${equals} - a constrained object ignores an undefined-valued key`,
        constrains({ a: "value", b: undefined }, equals),
        true,
      );
      TestEquality.equals(
        `equals: ${equals} - a constrained object still checks a defined extra key`,
        constrains({ a: "value", b: 1 }, equals),
        false,
      );
    }
  };
