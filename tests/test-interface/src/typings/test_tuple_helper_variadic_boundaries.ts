import { CamelCase, PascalCase, Resolved } from "@typia/interface";

export type TupleHelperVariadicBoundaryCases = [
  Assert<IsEqual<ResolvedVariadic, ExpectedResolvedVariadic>>,
  Assert<IsEqual<CamelCaseVariadic, ExpectedCamelCaseVariadic>>,
  Assert<IsEqual<PascalCaseVariadic, ExpectedPascalCaseVariadic>>,
];

type Assert<T extends true> = T;

type IsEqual<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? (<T>() => T extends Y ? 1 : 2) extends <T>() => T extends X ? 1 : 2
      ? true
      : false
    : false;

type ResolvedVariadic = Resolved<[Date, ...Number[], Boolean]>;
type ExpectedResolvedVariadic = Array<Date | number | boolean>;

type CamelCaseVariadic = CamelCase<
  [{ first_value: String }, ...Array<{ middle_value: Number }>, IBooleanTail]
>;
type ExpectedCamelCaseVariadic = Array<
  { firstValue: string } | { middleValue: number } | { finalValue: boolean }
>;

type PascalCaseVariadic = PascalCase<
  [{ first_value: String }, ...Array<{ middle_value: Number }>, IBooleanTail]
>;
type ExpectedPascalCaseVariadic = Array<
  { FirstValue: string } | { MiddleValue: number } | { FinalValue: boolean }
>;

interface IBooleanTail {
  final_value: Boolean;
}
