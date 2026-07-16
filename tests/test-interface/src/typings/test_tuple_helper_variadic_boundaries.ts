import { CamelCase, PascalCase, Resolved } from "@typia/interface";

/**
 * Verifies mapped tuple helpers retain variadic positions and member
 * transforms.
 *
 * A variadic tuple has a numeric `length`, but it is not a plain homogeneous
 * array. Mapping the complete tuple keeps its required head, repeated middle,
 * and required tail while recursively resolving or renaming each position.
 *
 * 1. Resolve a variadic tuple containing boxed primitive members.
 * 2. Camel-case object members in each variadic position.
 * 3. Pascal-case the same shape without widening it to a union array.
 */
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
type ExpectedResolvedVariadic = [Date, ...number[], boolean];

type CamelCaseVariadic = CamelCase<
  [{ first_value: String }, ...Array<{ middle_value: Number }>, IBooleanTail]
>;
type ExpectedCamelCaseVariadic = [
  { firstValue: string },
  ...Array<{ middleValue: number }>,
  { finalValue: boolean },
];

type PascalCaseVariadic = PascalCase<
  [{ first_value: String }, ...Array<{ middle_value: Number }>, IBooleanTail]
>;
type ExpectedPascalCaseVariadic = [
  { FirstValue: string },
  ...Array<{ MiddleValue: number }>,
  { FinalValue: boolean },
];

interface IBooleanTail {
  final_value: Boolean;
}
