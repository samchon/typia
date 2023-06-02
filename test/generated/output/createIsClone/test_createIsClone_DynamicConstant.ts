import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { DynamicConstant } from "../../../structures/DynamicConstant";

export const test_createIsClone_DynamicConstant = _test_isClone(
    "DynamicConstant",
    DynamicConstant.generate,
    (input: any): typia.Primitive<DynamicConstant> | null => {
        const is: any = (input: any): input is DynamicConstant => {
            const $io0: any = (input: any): boolean =>
                "number" === typeof input.a &&
                Number.isFinite(input.a) &&
                "number" === typeof input.b &&
                Number.isFinite(input.b) &&
                "number" === typeof input.c &&
                Number.isFinite(input.c) &&
                "number" === typeof input.d &&
                Number.isFinite(input.d);
            return "object" === typeof input && null !== input && $io0(input);
        };
        const clone: any = (
            input: DynamicConstant,
        ): typia.Primitive<DynamicConstant> => {
            const $co0: any = (input: any): any => ({
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
        const output: any = clone(input);
        return output;
    },
    DynamicConstant.SPOILERS,
);
