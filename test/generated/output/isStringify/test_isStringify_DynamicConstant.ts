import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { DynamicConstant } from "../../../structures/DynamicConstant";

export const test_isStringify_DynamicConstant = _test_isStringify(
    "DynamicConstant",
    DynamicConstant.generate,
    (input) =>
        ((input: {
            a: number;
            b: number;
            c: number;
            d: number;
        }): string | null => {
            const is = (
                input: any,
            ): input is { a: number; b: number; c: number; d: number } => {
                const $io0 = (input: any): boolean =>
                    "number" === typeof input.a &&
                    Number.isFinite(input.a) &&
                    "number" === typeof input.b &&
                    Number.isFinite(input.b) &&
                    "number" === typeof input.c &&
                    Number.isFinite(input.c) &&
                    "number" === typeof input.d &&
                    Number.isFinite(input.d);
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            const stringify = (input: {
                a: number;
                b: number;
                c: number;
                d: number;
            }): string => {
                const $number = (typia.isStringify as any).number;
                const $so0 = (input: any): any =>
                    `{"a":${$number(input.a)},"b":${$number(
                        input.b,
                    )},"c":${$number(input.c)},"d":${$number(input.d)}}`;
                return $so0(input);
            };
            return is(input) ? stringify(input) : null;
        })(input),
    DynamicConstant.SPOILERS,
);
