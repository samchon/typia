import typia from "../../../src";
import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_is } from "../internal/_test_is";
export const test_is_DynamicConstant = _test_is("DynamicConstant", DynamicConstant.generate, (input) => ((input: any): input is DynamicConstant => {
    const $io0 = (input: any) => "number" === typeof input.a && "number" === typeof input.b && "number" === typeof input.c && "number" === typeof input.d;
    return "object" === typeof input && null !== input && $io0(input);
})(input), DynamicConstant.SPOILERS);
