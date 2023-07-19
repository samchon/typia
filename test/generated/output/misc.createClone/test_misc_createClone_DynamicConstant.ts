import typia from "../../../../src";
import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { DynamicConstant } from "../../../structures/DynamicConstant";

export const test_misc_clone_DynamicConstant =
    _test_misc_clone<DynamicConstant>(DynamicConstant)(
        (input: DynamicConstant): typia.Primitive<DynamicConstant> => {
            const $co0 = (input: any): any => ({
                a: input.a as any,
                b: input.b as any,
                c: input.c as any,
                d: input.d as any,
            });
            return "object" === typeof input && null !== input
                ? $co0(input)
                : (input as any);
        },
    );
