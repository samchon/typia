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
 * @evidence contracts/testing.md#behavioral-verification The actual exported case asserts that equivalent interface, alias, mixed and alias-chain unions emit their own exact discriminator mappings and references.
 * @evidence contracts/testing.md#independent-expectations The authored prefix-specific mapping derives from declared circle/square literal tags and named component targets, without reading the generator output.
 * @evidence contracts/testing.md#distinguishing-cases Four equivalent spellings preserve targets; missing-common-tag and nonobject-member twins must omit the discriminator.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_json_schema_oneof_declaration_syntax through test-typia-schema start. Its actual typia call expressions are transformed in the suite project and their emitted values are evaluated in the existing runner.
 * @evidence contracts/e2e.md#necessary-boundary Native alias resolution must preserve discriminator eligibility without overmatching ineligible unions. Direct schema-writer unit calls do not establish TypeScript call resolution, emitted JavaScript evaluation and public runtime consumption together.
 * @evidence contracts/e2e.md#shared-execution The case uses the existing ttsx schema-suite project and runner; sibling schema cases reuse the same content-keyed plugin artifact. All declared variants are prepared together, without per-variant compiler launches or fixture installs.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Produced schema objects and helper projections belong to this invocation; no generated schema is retained between cases. The suite owns process termination and ttsc owns content-keyed artifact invalidation; this case makes no cold-cache assertion.
 * @evidence contracts/e2e.md#preserved-coverage Four equivalent spellings preserve targets; missing-common-tag and nonobject-member twins must omit the discriminator. Every original producer call and assertion stays enrolled under the same exported case; no portable assertion was removed or represented as independently covered elsewhere.
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
