import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { DynamicConstant } from "../../../structures/DynamicConstant";
export const test_clone_DynamicConstant = _test_clone("DynamicConstant", DynamicConstant.generate, (input) => ((input: {    a: number;    b: number;    c: number;    d: number;}): typia.Primitive<{    a: number;    b: number;    c: number;    d: number;}> => {
    const $co0 = (input: any): any => ({
        a: input.a as any,
        b: input.b as any,
        c: input.c as any,
        d: input.d as any
    });
    return "object" === typeof input && null !== input ? $co0(input) : input as any;
})(input));
