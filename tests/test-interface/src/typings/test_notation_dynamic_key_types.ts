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
 */
export type NotationDynamicKeyTypeCases = [
  Assert<
    IsEqual<
      CamelCase<Record<string, { inner_key: string }>>,
      Record<string, { innerKey: string }>
    >
  >,
  Assert<PascalDynamicActual extends PascalDynamicExpected ? true : false>,
  Assert<PascalDynamicExpected extends PascalDynamicActual ? true : false>,
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
];

type PascalDynamicActual = PascalCase<Record<string, { inner_key: string }>>;
type PascalDynamicExpected = Record<string, { InnerKey: string }>;

type Assert<T extends true> = T;
type IsEqual<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? (<T>() => T extends Y ? 1 : 2) extends <T>() => T extends X ? 1 : 2
      ? true
      : false
    : false;
