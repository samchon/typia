import { Primitive, tags } from "@typia/interface";

export type PrimitiveVariadicTupleCases = [
  Assert<IsEqual<LiteralVariadic, ExpectedLiteralVariadic>>,
  Assert<IsEqual<DateRest, ExpectedDateRest>>,
  Assert<IsEqual<ObjectRest, ExpectedObjectRest>>,
  Assert<IsEqual<OptionalTuple, ExpectedOptionalTuple>>,
  Assert<IsEqual<StringArray, ExpectedStringArray>>,
  Assert<IsEqual<DateArray, ExpectedDateArray>>,
  Assert<IsEqual<ObjectArray, ExpectedObjectArray>>,
  Assert<IsEqual<UnionTuple, ExpectedUnionTuple>>,
];

export const validLiteralWithoutMiddle: LiteralVariadic = ["asdf", "zxcv"];
export const validLiteral: LiteralVariadic = ["asdf", "middle", "zxcv"];
export const validLiteralWithLongMiddle: LiteralVariadic = [
  "asdf",
  "a",
  "b",
  "c",
  "zxcv",
];

// @ts-expect-error literal head must not widen to string.
export const invalidHead: LiteralVariadic = ["qwer", "middle", "zxcv"];

// @ts-expect-error literal tail must not widen to string.
export const invalidTail: LiteralVariadic = ["asdf", "middle", "qwer"];

export const validDateRest: DateRest = [
  "head",
  "2026-06-08T00:00:00.000Z" as DateTime,
  "tail",
];

// @ts-expect-error Date rest elements must be converted to date-time strings.
export const invalidDateRest: DateRest = ["head", new Date(), "tail"];

export const validObjectRest: ObjectRest = [
  "2026-06-08T00:00:00.000Z" as DateTime,
  { value: 1 },
  { done: true },
];

// @ts-expect-error boxed object rest property must be converted to number.
export const invalidObjectRestValue: ObjectRest = [
  "2026-06-08T00:00:00.000Z" as DateTime,
  { value: new Number(1) },
  { done: true },
];

// @ts-expect-error boxed tail property must be converted to boolean.
export const invalidObjectRestTail: ObjectRest = [
  "2026-06-08T00:00:00.000Z" as DateTime,
  { value: 1 },
  { done: new Boolean(true) },
];

type Assert<T extends true> = T;

type IsEqual<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? (<T>() => T extends Y ? 1 : 2) extends <T>() => T extends X ? 1 : 2
      ? true
      : false
    : false;

type DateTime = string & tags.Format<"date-time">;

type LiteralVariadic = Primitive<["asdf", ...string[], "zxcv"]>;
type ExpectedLiteralVariadic = ["asdf", ...string[], "zxcv"];

type DateRest = Primitive<["head", ...Date[], "tail"]>;
type ExpectedDateRest = ["head", ...DateTime[], "tail"];

type ObjectRest = Primitive<[Date, ...IBoxedValue[], IBoxedDone]>;
type ExpectedObjectRest = [DateTime, ...IPrimitiveValue[], IPrimitiveDone];

type OptionalTuple = Primitive<[string, number?]>;
type ExpectedOptionalTuple = [string, number?];

type StringArray = Primitive<string[]>;
type ExpectedStringArray = string[];

type DateArray = Primitive<Date[]>;
type ExpectedDateArray = DateTime[];

type ObjectArray = Primitive<IBoxedValue[]>;
type ExpectedObjectArray = IPrimitiveValue[];

type UnionTuple = Primitive<["a", ...string[], "z"] | number[]>;
type ExpectedUnionTuple = ["a", ...string[], "z"] | number[];

interface IBoxedValue {
  value: Number;
}

interface IPrimitiveValue {
  value: number;
}

interface IBoxedDone {
  done: Boolean;
}

interface IPrimitiveDone {
  done: boolean;
}
