import typia from "../../../src";
import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_clone } from "../internal/_test_clone";
export const test_clone_DynamicConstant = _test_clone("DynamicConstant", DynamicConstant.generate, (input) => ((input: DynamicConstant): typia.Primitive<DynamicConstant> => {
    const $co0 = (input: any) => ({
        a: input.a,
        b: input.b,
        c: input.c,
        d: input.d
    });
    return "object" === typeof input && null !== input ? $co0(input) : input;
})(input));
