import { Primitive, tags } from "@typia/interface";

/**
 * Verifies `Primitive<T>` reduces a type to its JSON-serializable form.
 *
 * Pins the core conversions: `Date` becomes a date-time branded string, boxed
 * primitives unwrap, `bigint` and non-Date native classes become `never` (not
 * serializable), a `toJSON()` type collapses to its return, and classes become
 * plain objects with methods mapped to `never`.
 *
 * 1. Convert atomics, Date, bigint, and native classes individually.
 * 2. Convert a method-bearing nested class.
 * 3. Confirm a `toJSON`-bearing type uses its serialized return.
 */
export type PrimitiveCoreCases = [
  Assert<IsEqual<Primitive<Date>, string & tags.Format<"date-time">>>,
  Assert<IsEqual<Primitive<bigint>, never>>,
  Assert<IsEqual<Primitive<Boolean>, boolean>>,
  Assert<IsEqual<Primitive<Number>, number>>,
  Assert<IsEqual<Primitive<String>, string>>,
  Assert<IsEqual<Primitive<Uint8Array>, never>>,
  Assert<IsEqual<Primitive<boolean>, boolean>>,
  Assert<IsEqual<Primitive<number>, number>>,
  Assert<
    IsEqual<
      Primitive<WithMethod>,
      { id: number; child: { name: string; run: never }; greet: never }
    >
  >,
  Assert<IsEqual<Primitive<Jsonable>, { v: number }>>,
];

type Assert<T extends true> = T;

type IsEqual<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? (<T>() => T extends Y ? 1 : 2) extends <T>() => T extends X ? 1 : 2
      ? true
      : false
    : false;

class Sub {
  name!: string;
  run(): void {}
}

class WithMethod {
  id!: number;
  child!: Sub;
  greet(): string {
    return "";
  }
}

interface Jsonable {
  toJSON(): { v: number };
  extra: string;
}
