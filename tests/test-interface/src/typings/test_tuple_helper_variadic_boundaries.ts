import {
  CamelCase,
  KebabCase,
  PascalCase,
  Resolved,
  SnakeCase,
} from "@typia/interface";

/**
 * Verifies mapped tuple helpers retain variadic positions and member
 * transforms.
 *
 * A variadic tuple has a numeric `length`, but it is not a plain homogeneous
 * array. Mapping the complete tuple keeps its required head, repeated middle,
 * and required tail while recursively resolving or renaming each position.
 *
 * 1. Resolve variadic tuples with required head and suffix positions.
 * 2. Apply every notation family to a suffix-only variadic tuple.
 * 3. Preserve mutable and readonly shapes without widening to union arrays.
 *
 * @evidence contracts/testing.md#behavioral-verification Resolved and notation aliases must preserve required heads/suffixes and repeated middles while converting their member types.
 * @evidence contracts/testing.md#independent-expectations Handwritten Expected tuples state position, readonlyness, unboxing and renamed member keys independently of the aliases.
 * @evidence contracts/testing.md#distinguishing-cases Mutable and readonly, head-plus-middle-plus-tail and suffix-only tuples across four naming families distinguish variadic tuples from widened homogeneous arrays.
 * @evidence contracts/testing.md#execution-ownership test-interface start typechecks TupleHelperVariadicBoundaryCases through the installed TypeScript compiler (tsc) with noEmit. Each Assert requires a true result from the local symmetric type-identity or assignability check; value assignments and expect-error directives are also compile-only. No native artifact, consumer installation or runtime host executes this unit.
 */
export type TupleHelperVariadicBoundaryCases = [
  Assert<IsEqual<ResolvedVariadic, ExpectedResolvedVariadic>>,
  Assert<IsEqual<ResolvedSuffixVariadic, ExpectedResolvedSuffixVariadic>>,
  Assert<IsEqual<CamelCaseVariadic, ExpectedCamelCaseVariadic>>,
  Assert<IsEqual<PascalCaseVariadic, ExpectedPascalCaseVariadic>>,
  Assert<IsEqual<CamelCaseSuffixVariadic, ExpectedCamelCaseSuffixVariadic>>,
  Assert<IsEqual<PascalCaseSuffixVariadic, ExpectedPascalCaseSuffixVariadic>>,
  Assert<IsEqual<SnakeCaseSuffixVariadic, ExpectedSnakeCaseSuffixVariadic>>,
  Assert<IsEqual<KebabCaseSuffixVariadic, ExpectedKebabCaseSuffixVariadic>>,
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
type ResolvedSuffixVariadic = Resolved<readonly [...Number[], Boolean]>;
type ExpectedResolvedSuffixVariadic = readonly [...number[], boolean];

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

type CamelCaseSuffixVariadic = CamelCase<
  [...Array<{ middle_value: Number }>, IBooleanTail]
>;
type ExpectedCamelCaseSuffixVariadic = [
  ...Array<{ middleValue: number }>,
  { finalValue: boolean },
];

type PascalCaseSuffixVariadic = PascalCase<
  readonly [...Array<{ middle_value: Number }>, IBooleanTail]
>;
type ExpectedPascalCaseSuffixVariadic = readonly [
  ...Array<{ MiddleValue: number }>,
  { FinalValue: boolean },
];

type SnakeCaseSuffixVariadic = SnakeCase<
  [...Array<{ middleValue: Number }>, { finalValue: Boolean }]
>;
type ExpectedSnakeCaseSuffixVariadic = [
  ...Array<{ middle_value: number }>,
  { final_value: boolean },
];

type KebabCaseSuffixVariadic = KebabCase<
  readonly [...Array<{ middleValue: Number }>, { finalValue: Boolean }]
>;
type ExpectedKebabCaseSuffixVariadic = readonly [
  ...Array<{ "middle-value": number }>,
  { "final-value": boolean },
];
