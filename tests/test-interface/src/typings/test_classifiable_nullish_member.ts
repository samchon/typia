import { Classifiable } from "@typia/interface";

/**
 * Verifies a purely-nullish (`null`/`undefined`) data field is kept, not
 * dropped.
 *
 * Pins the field-copy key-remap against the nullish edge: `NonNullable<null>`
 * is `never`, which is vacuously `extends Function`, so a naive method-drop
 * filter would omit a `value: null` field exactly like a method — losing valid
 * plain data (`null` round-trips through JSON) and rejecting a
 * discriminated-union arm whose payload is `null`. Methods are still stripped
 * alongside.
 *
 * 1. A `null` / `undefined` / `null | undefined` field survives unchanged.
 * 2. A null-payload discriminated-union arm keeps its `value` key.
 * 3. Methods are still stripped next to a nullish field.
 */
export type ClassifiableNullishMemberCases = [
  Assert<
    IsEqual<
      Classifiable<{ a: null; b: undefined; c: null | undefined; d: number }>,
      { a: null; b: undefined; c: null | undefined; d: number }
    >
  >,
  Assert<
    IsEqual<
      Classifiable<
        { type: "empty"; value: null } | { type: "full"; value: string }
      >,
      { type: "empty"; value: null } | { type: "full"; value: string }
    >
  >,
  Assert<IsEqual<Classifiable<WithNullAndMethod>, { tag: null }>>,
];

type Assert<T extends true> = T;

type IsEqual<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? (<T>() => T extends Y ? 1 : 2) extends <T>() => T extends X ? 1 : 2
      ? true
      : false
    : false;

class WithNullAndMethod {
  tag!: null;
  run(): void {}
}
