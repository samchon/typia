import { CamelCase, KebabCase, PascalCase, SnakeCase } from "@typia/interface";

/**
 * Verifies notation aliases describe recursively converted index signatures.
 *
 * Runtime index-signature keys are not present as literals in metadata, but the
 * mapped return type still exposes a broad string key with converted nested
 * values. Each naming family must agree with that dynamic runtime shape.
 *
 * 1. Declare snake-keyed and camel-keyed string records.
 * 2. Apply each notation alias to its matching source record.
 * 3. Require broad string keys and the correctly converted nested value type.
 *
 * @evidence contracts/testing.md#behavioral-verification The four notation aliases must preserve broad string/number domains and recursively convert their value keys, including template-key lookups.
 * @evidence contracts/testing.md#independent-expectations Handwritten Record outputs, numeric-key outputs and literal template-key access results establish the expected key/value types.
 * @evidence contracts/testing.md#distinguishing-cases Broad string and numeric records, numeric literal 0 and template-literal keys distinguish domain preservation from narrowing and nested key conversion.
 * @evidence contracts/testing.md#execution-ownership test-interface start typechecks NotationDynamicKeyTypeCases through the installed TypeScript compiler (tsc) with noEmit. Each Assert requires a true result from the local symmetric type-identity or assignability check; value assignments and expect-error directives are also compile-only. No native artifact, consumer installation or runtime host executes this unit.
 */
export type NotationDynamicKeyTypeCases = [
  Assert<
    IsEqual<
      CamelCase<Record<string, { inner_key: string }>>,
      Record<string, { innerKey: string }>
    >
  >,
  Assert<IsEqual<PascalDynamicActual, Record<string, { InnerKey: string }>>>,
  Assert<
    IsEqual<
      SnakeCase<Record<string, { innerKey: string }>>,
      Record<string, { inner_key: string }>
    >
  >,
  Assert<
    IsEqual<
      KebabCase<Record<string, { innerKey: string }>>,
      Record<string, { "inner-key": string }>
    >
  >,
  Assert<
    IsEqual<
      CamelCase<{ 0: { inner_key: string } }>,
      { 0: { innerKey: string } }
    >
  >,
  Assert<
    IsEqual<
      PascalCase<Record<number, { inner_key: string }>>,
      Record<number, { InnerKey: string }>
    >
  >,
  Assert<
    IsEqual<
      SnakeCase<Record<number, { innerValue: string }>>,
      Record<number, { inner_value: string }>
    >
  >,
  Assert<
    IsEqual<
      KebabCase<Record<number, { innerValue: string }>>,
      Record<number, { "inner-value": string }>
    >
  >,
  Assert<IsEqual<CamelTemplateActual["itemUserId"], { innerKey: string }>>,
  Assert<IsEqual<PascalTemplateActual["ItemUserId"], { InnerKey: string }>>,
  Assert<IsEqual<SnakeTemplateActual["item_user_id"], { inner_value: string }>>,
  Assert<
    IsEqual<KebabTemplateActual["item-user-id"], { "inner-value": string }>
  >,
];

type PascalDynamicActual = PascalCase<Record<string, { inner_key: string }>>;
type CamelTemplateActual = CamelCase<
  Record<`item_${string}`, { inner_key: string }>
>;
type PascalTemplateActual = PascalCase<
  Record<`item_${string}`, { inner_key: string }>
>;
type SnakeTemplateActual = SnakeCase<
  Record<`item${string}`, { innerValue: string }>
>;
type KebabTemplateActual = KebabCase<
  Record<`item${string}`, { innerValue: string }>
>;

type Assert<T extends true> = T;
type IsEqual<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? (<T>() => T extends Y ? 1 : 2) extends <T>() => T extends X ? 1 : 2
      ? true
      : false
    : false;
