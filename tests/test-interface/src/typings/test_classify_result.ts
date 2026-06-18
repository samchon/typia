import { ClassifyResult } from "@typia/interface";

/**
 * Verifies the RETURN type of `typia.plain.classify<T>`.
 *
 * classify reconstructs and returns a real INSTANCE, so for a class TYPE
 * (`typeof C`) the result is the instance `C`, never the constructor `typeof C`
 * — even for a private-constructor class, whose instance is read from
 * `prototype`. For an instance type (the common `classify<User>` call) and any
 * non-class type the result is `T` unchanged. The conditional distributes over
 * a union, so a mixed `typeof A | number` maps per-member to `A | number`.
 */
export type ClassifyResultCases = [
  // class TYPE (typeof C) -> the INSTANCE, not the constructor
  Assert<IsEqual<ClassifyResult<typeof Point>, Point>>,
  // private-constructor class TYPE -> its instance (read from prototype)
  Assert<IsEqual<ClassifyResult<typeof Secret>, Secret>>,
  // instance type -> itself (the common classify<User> call, field-copy)
  Assert<IsEqual<ClassifyResult<Point>, Point>>,
  // plain object / interface -> itself
  Assert<IsEqual<ClassifyResult<{ a: number }>, { a: number }>>,
  // primitive -> itself
  Assert<IsEqual<ClassifyResult<number>, number>>,
  // mixed union distributes per-member: typeof Point | number -> Point | number
  Assert<IsEqual<ClassifyResult<typeof Point | number>, Point | number>>,
];

type Assert<T extends true> = T;

type IsEqual<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? (<T>() => T extends Y ? 1 : 2) extends <T>() => T extends X ? 1 : 2
      ? true
      : false
    : false;

class Point {
  x!: number;
  y!: number;
}

class Secret {
  value!: number;
  private constructor(seed: { value: number }) {
    this.value = seed.value;
  }
  static from(seed: { value: number }): Secret {
    return new Secret(seed);
  }
}
