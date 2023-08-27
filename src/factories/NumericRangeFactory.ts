import ts from "typescript";

import { ProtobufAtomic } from "../typings/ProtobufAtomic";

import { ExpressionFactory } from "./ExpressionFactory";

export namespace NumericRangeFactory {
    export const number =
        (context: ts.TransformationContext) =>
        (type: ProtobufAtomic.Numeric) =>
        (input: ts.Expression): ts.Expression =>
            ExpressionFactory.transpile(context)(NUMBER_TEXT[type])(input);

    export const bigint =
        (context: ts.TransformationContext) =>
        (type: ProtobufAtomic.BigNumeric) =>
        (input: ts.Expression): ts.Expression =>
            ExpressionFactory.transpile(context)(BIGINT_TEXT[type])(input);
}

const NUMBER_TEXT = {
    int32: `Math.floor($input) === $input && -2147483648 <= $input && $input <= 2147483647`,
    uint32: `Math.floor($input) === $input && 0 <= $input && $input <= 4294967295`,
    int64: `Math.floor($input) === $input && -9223372036854775808 <= $input && $input <= 9223372036854775807`,
    uint64: `Math.floor($input) === $input && 0 <= $input && $input <= 18446744073709551615`,
    float: `-1.175494351e38 <= $input && $input <= 3.4028235e38`,
    double: `true`,
};

const BIGINT_TEXT = {
    int64: `true`,
    uint64: `BigInt(0) <= $input`,
};
