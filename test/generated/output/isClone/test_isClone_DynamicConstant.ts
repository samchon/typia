import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { DynamicConstant } from "../../../structures/DynamicConstant";

export const test_isClone_DynamicConstant = _test_isClone(
    "DynamicConstant",
    DynamicConstant.generate,
    (input) =>
        ((
            input: any,
        ): typia.Primitive<{
            a: number;
            b: number;
            c: number;
            d: number;
        }> | null => {
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
            const clone = (input: {
                a: number;
                b: number;
                c: number;
                d: number;
            }): typia.Primitive<{
                a: number;
                b: number;
                c: number;
                d: number;
            }> => {
                const $co0 = (input: any): any => ({
                    a: input.a as any,
                    b: input.b as any,
                    c: input.c as any,
                    d: input.d as any,
                });
                return "object" === typeof input && null !== input
                    ? $co0(input)
                    : (input as any);
            };
            if (!is(input)) return null;
            const output = clone(input);
            return output;
        })(input),
    DynamicConstant.SPOILERS,
);
