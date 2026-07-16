import { ClassProperties } from "@typia/interface";

declare const symbolMethod: unique symbol;
declare const symbolData: unique symbol;

/**
 * Verifies `ClassProperties<T>` removes optional functions at every key kind.
 *
 * Reading an optional method adds `undefined`, so a direct `T[K] extends
 * Function` predicate retains it. Classification must ignore only absence,
 * remove function-valued string/number/symbol members, and preserve optional
 * non-function data plus accessors.
 *
 * 1. Declare required and optional functions under all property-key kinds.
 * 2. Mix them with optional data, numeric/symbol data, an accessor, overloads, and
 *    inherited members.
 * 3. Require the shallow data-only object with modifiers intact.
 */
export type ClassPropertiesOptionalMethodCases = [
  Assert<
    IsEqual<
      ClassProperties<Example>,
      {
        value: number;
        inherited: number;
        optional?: string;
        2: boolean;
        [symbolData]: Date;
        readonly upper: string;
      }
    >
  >,
];

class Parent {
  inherited = 1;
  inheritedReset?(): void {}
}

class Example extends Parent {
  value = 1;
  optional?: string;
  callback?: () => void;
  reset?(): void {}
  0(): void {}
  1?(): void {}
  2 = true;
  [symbolMethod]?(): void {}
  [symbolData] = new Date();
  convert(value: string): number;
  convert(value: number): string;
  convert(value: string | number): string | number {
    return value;
  }
  get upper(): string {
    return String(this.value);
  }
}

type Assert<T extends true> = T;
type IsEqual<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? (<T>() => T extends Y ? 1 : 2) extends <T>() => T extends X ? 1 : 2
      ? true
      : false
    : false;
