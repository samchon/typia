import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { DynamicConstant } from "../../../structures/DynamicConstant";
export const test_createClone_DynamicConstant = _test_clone("DynamicConstant", DynamicConstant.generate, (input: DynamicConstant): typia.Primitive<DynamicConstant> => {
    const $co0 = (input: any): any => ({
        a: input.a as any,
        b: input.b as any,
        c: input.c as any,
        d: input.d as any
    });
    return "object" === typeof input && null !== input ? $co0(input) : input as any;
});
