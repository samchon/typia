import { TestValidator } from "@nestia/e2e";
import { OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { OpenApiTypeChecker } from "@typia/utils";
import typia from "typia";

/**
 * Verifies a union discriminator survives `type` alias members.
 *
 * Discriminator eligibility must depend on every union member being an object
 * type with a common literal tag, never on whether `interface` or `type`
 * declared it. The generator files an `interface` member under metadata
 * `Objects` and a `type` alias of an object literal under `Aliases`, and the
 * eligibility gate used to accept only the former, so one alias member silently
 * dropped the discriminator for the whole union while `oneOf` kept the very
 * same `$ref` targets. Negative shapes are pinned beside the positives so
 * resolving aliases cannot start over-emitting.
 *
 * 1. Declare one tagged union three ways: all `interface`, all `type` alias, and
 *    mixed.
 * 2. Assert all three emit an identical `discriminator`, and that `oneOf` is
 *    identical across them too.
 * 3. Assert a union without a common literal tag, and one with a non-object
 *    member, still emit no discriminator.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.json.schema is evaluated by the native host on the types declared in this case and the result is checked by 8 assertions (… union is oneOf; interface union discriminator; alias union discriminator; mixed union discriminator; alias chain union discriminator; … union oneOf targets). The case documents its purpose as: Verifies a union discriminator survives `type` alias members.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: Discriminator eligibility must depend on every union member being an object type with a common literal tag, never on whether `interface` or `type` declared it. The generator files an `interface` member under metadata `Objects` and a `type` alias of an object literal under `Aliases`, and the eligibility gate used to accept only the former, so one alias member silently dropped the discriminator for the whole union while `oneOf` kept the very same `$ref` targets. Negative shapes are pinned beside the positives so resolving aliases cannot start over-emitting. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (… union is oneOf; interface union discriminator; alias union discriminator; mixed union discriminator; alias chain union discriminator; … union oneOf targets) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_json_schema_oneof_declaration_syntax is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_json_schema_oneof_declaration_syntax = (): void => {
  interface PCircle {
    type: "circle";
    radius: number;
  }
  interface PSquare {
    type: "square";
    side: number;
  }

  type QCircle = { type: "circle"; radius: number };
  type QSquare = { type: "square"; side: number };

  interface RCircle {
    type: "circle";
    radius: number;
  }
  type RSquare = { type: "square"; side: number };

  // alias chain resolving onto an interface
  type SCircle = PCircle;
  type SSquare = PSquare;

  const oneOf = (
    schema: OpenApi.IJsonSchema,
  ): OpenApi.IJsonSchema.IOneOf | null =>
    OpenApiTypeChecker.isOneOf(schema) ? schema : null;

  const union = (unit: { schema: OpenApi.IJsonSchema }) => oneOf(unit.schema);

  const iface = union(typia.json.schema<PCircle | PSquare>());
  const alias = union(typia.json.schema<QCircle | QSquare>());
  const mixed = union(typia.json.schema<RCircle | RSquare>());
  const chain = union(typia.json.schema<SCircle | SSquare>());

  for (const [label, value] of [
    ["interface", iface],
    ["alias", alias],
    ["mixed", mixed],
    ["chain", chain],
  ] as const)
    TestValidator.predicate(`${label} union is oneOf`, () => value !== null);

  // every declaration syntax must carry the same discriminator
  const expected = (
    prefix: string,
  ): OpenApi.IJsonSchema.IOneOf.IDiscriminator => ({
    propertyName: "type",
    mapping: {
      circle: `#/components/schemas/${prefix}Circle`,
      square: `#/components/schemas/${prefix}Square`,
    },
  });
  TestEquality.equals(
    "interface union discriminator",
    iface!.discriminator,
    expected("P"),
  );
  TestEquality.equals(
    "alias union discriminator",
    alias!.discriminator,
    expected("Q"),
  );
  TestEquality.equals(
    "mixed union discriminator",
    mixed!.discriminator,
    expected("R"),
  );
  TestEquality.equals(
    "alias chain union discriminator",
    chain!.discriminator,
    expected("P"),
  );

  // the mapping targets must be exactly the emitted oneOf references
  for (const [label, value, prefix] of [
    ["interface", iface, "P"],
    ["alias", alias, "Q"],
    ["mixed", mixed, "R"],
    ["chain", chain, "P"],
  ] as const)
    TestEquality.equals(`${label} union oneOf targets`, value!.oneOf, [
      { $ref: `#/components/schemas/${prefix}Circle` },
      { $ref: `#/components/schemas/${prefix}Square` },
    ]);

  // negative: no common literal tag between the alias members
  type NCircle = { kind: "circle"; radius: number };
  type NSquare = { name: "square"; side: number };
  TestEquality.equals(
    "alias union without a common literal tag",
    union(typia.json.schema<NCircle | NSquare>())!.discriminator,
    undefined,
  );

  // negative: a non-object member disqualifies the union
  TestEquality.equals(
    "alias union with a non-object member",
    union(typia.json.schema<QCircle | QSquare | string>())!.discriminator,
    undefined,
  );
};
