import typia from "../../../src";
import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_isParse } from "../internal/_test_isParse";
export const test_isParse_DynamicConstant = _test_isParse("DynamicConstant", DynamicConstant.generate, (input) => ((input: any): typia.Primitive<DynamicConstant> => { const is = (input: any): input is DynamicConstant => {
    const $io0 = (input: any) => "number" === typeof input.a && "number" === typeof input.b && "number" === typeof input.c && "number" === typeof input.d;
    return "object" === typeof input && null !== input && $io0(input);
}; input = JSON.parse(input); return is(input) ? input as any : null; })(input), DynamicConstant.SPOILERS);
