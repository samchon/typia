import typia from "../../../../src";
import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { DynamicConstant } from "../../../structures/DynamicConstant";

export const test_misc_isClone_DynamicConstant =
    _test_misc_isClone<DynamicConstant>(DynamicConstant)((input) =>
        ((input: any): typia.Primitive<DynamicConstant> | null => {
            const is = (input: any): input is DynamicConstant => {
                return (
                    "object" === typeof input &&
                    null !== input &&
                    "object" === typeof (input as any).value &&
                    null !== (input as any).value &&
                    "number" === typeof ((input as any).value as any).a &&
                    Number.isFinite(((input as any).value as any).a) &&
                    "number" === typeof ((input as any).value as any).b &&
                    Number.isFinite(((input as any).value as any).b) &&
                    "number" === typeof ((input as any).value as any).c &&
                    Number.isFinite(((input as any).value as any).c) &&
                    "number" === typeof ((input as any).value as any).d &&
                    Number.isFinite(((input as any).value as any).d)
                );
            };
            const clone = (
                input: DynamicConstant,
            ): typia.Primitive<DynamicConstant> => {
                const $io1 = (input: any): boolean =>
                    "number" === typeof input.a &&
                    "number" === typeof input.b &&
                    "number" === typeof input.c &&
                    "number" === typeof input.d;
                const $co0 = (input: any): any => ({
                    value:
                        "object" === typeof input.value && null !== input.value
                            ? $co1(input.value)
                            : (input.value as any),
                });
                const $co1 = (input: any): any => ({
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
    );
