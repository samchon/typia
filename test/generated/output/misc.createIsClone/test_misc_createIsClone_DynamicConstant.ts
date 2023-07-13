import typia from "../../../../src";
import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { DynamicConstant } from "../../../structures/DynamicConstant";

export const test_misc_isClone_DynamicConstant = _test_misc_isClone(
    "DynamicConstant",
    DynamicConstant.generate,
    (input: any): typia.Primitive<DynamicConstant> | null => {
        const is = (input: any): input is DynamicConstant => {
            return (
                "object" === typeof input &&
                null !== input &&
                "number" === typeof (input as any).a &&
                Number.isFinite((input as any).a) &&
                "number" === typeof (input as any).b &&
                Number.isFinite((input as any).b) &&
                "number" === typeof (input as any).c &&
                Number.isFinite((input as any).c) &&
                "number" === typeof (input as any).d &&
                Number.isFinite((input as any).d)
            );
        };
        const clone = (
            input: DynamicConstant,
        ): typia.Primitive<DynamicConstant> => {
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
    },
    DynamicConstant.SPOILERS,
);
