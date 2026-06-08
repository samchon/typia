import { Primitive, tags } from "@typia/interface";

export type PrimitiveVariadicTupleCases = [
  AssertAssignable<ExpectedLiteralVariadic, LiteralVariadic>,
  AssertAssignable<LiteralVariadic, ExpectedLiteralVariadic>,
  AssertAssignable<ExpectedDateRest, DateRest>,
  AssertAssignable<DateRest, ExpectedDateRest>,
  AssertAssignable<ExpectedObjectRest, ObjectRest>,
  AssertAssignable<ObjectRest, ExpectedObjectRest>,
  AssertAssignable<ExpectedOptionalTuple, OptionalTuple>,
  AssertAssignable<OptionalTuple, ExpectedOptionalTuple>,
  AssertAssignable<ExpectedStringArray, StringArray>,
  AssertAssignable<StringArray, ExpectedStringArray>,
  AssertAssignable<ExpectedDateArray, DateArray>,
  AssertAssignable<DateArray, ExpectedDateArray>,
  AssertAssignable<ExpectedObjectArray, ObjectArray>,
  AssertAssignable<ObjectArray, ExpectedObjectArray>,
  AssertAssignable<ExpectedUnionTuple, UnionTuple>,
  AssertAssignable<UnionTuple, ExpectedUnionTuple>,
];

export const validLiteral: LiteralVariadic = ["asdf", "middle", "zxcv"];

// @ts-expect-error literal head must not widen to string.
export const invalidHead: LiteralVariadic = ["qwer", "middle", "zxcv"];

// @ts-expect-error literal tail must not widen to string.
export const invalidTail: LiteralVariadic = ["asdf", "middle", "qwer"];

type AssertAssignable<Expected, Actual> = [Actual] extends [Expected]
  ? true
  : never;

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
