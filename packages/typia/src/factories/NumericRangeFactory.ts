import ts from "typescript";

import { ProtobufAtomic } from "../typings/ProtobufAtomic";

import { ExpressionFactory } from "./ExpressionFactory";

export namespace NumericRangeFactory {
  export const number = (
    type: ProtobufAtomic.Numeric,
    input: ts.Expression,
  ): ts.Expression => NumberPredicator[type](input);

  export const bigint = (
    type: ProtobufAtomic.BigNumeric,
    input: ts.Expression,
  ): ts.Expression => BigIntPredicator[type](input);
}

namespace NumberPredicator {
  export const int32 = (input: ts.Expression) =>
    ts.factory.createLogicalAnd(
      integer(input),
      between("-2147483648", "2147483647")(input),
    );
  export const uint32 = (input: ts.Expression) =>
    ts.factory.createLogicalAnd(
      integer(input),
      between("0", "4294967295")(input),
    );
  export const int64 = (input: ts.Expression) =>
    ts.factory.createLogicalAnd(
      integer(input),
      between("-9223372036854775808", "9223372036854775807")(input),
    );
  export const uint64 = (input: ts.Expression) =>
    ts.factory.createLogicalAnd(
      integer(input),
      between("0", "18446744073709551615")(input),
    );
  export const float = (input: ts.Expression) =>
    between("-1.175494351e38", "3.4028235e38")(input);
  export const double = () => ts.factory.createTrue();
}

namespace BigIntPredicator {
  export const int64 = () => ts.factory.createTrue();
  export const uint64 = (input: ts.Expression) =>
    ts.factory.createLessThanEquals(
      ts.factory.createCallExpression(
        ts.factory.createIdentifier("BigInt"),
        undefined,
        [ExpressionFactory.number(0)],
      ),
      input,
    );
}

const integer = (input: ts.Expression) =>
  ts.factory.createStrictEquality(
    ts.factory.createCallExpression(
      ts.factory.createIdentifier("Math.floor"),
      undefined,
      [input],
    ),
    input,
  );

const between = (x: string, y: string) => (input: ts.Expression) =>
  ts.factory.createLogicalAnd(
    ts.factory.createLessThanEquals(ts.factory.createIdentifier(x), input),
    ts.factory.createLessThanEquals(input, ts.factory.createIdentifier(y)),
  );
