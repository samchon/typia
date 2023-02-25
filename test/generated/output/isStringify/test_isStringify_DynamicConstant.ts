import typia from "../../../src";
import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_isStringify } from "../internal/_test_isStringify";
export const test_isStringify_DynamicConstant = _test_isStringify("DynamicConstant", DynamicConstant.generate, (input) => ((input: DynamicConstant): string | null => { const is = (input: any): input is DynamicConstant => {
    const $io0 = (input: any) => "number" === typeof input.a && !Number.isNaN(input.a) && ("number" === typeof input.b && !Number.isNaN(input.b)) && ("number" === typeof input.c && !Number.isNaN(input.c)) && ("number" === typeof input.d && !Number.isNaN(input.d));
    return "object" === typeof input && null !== input && $io0(input);
}; const stringify = (input: DynamicConstant): string => {
    const $so0 = (input: any) => `{"a":${input.a},"b":${input.b},"c":${input.c},"d":${input.d}}`;
    return $so0(input);
}; return is(input) ? stringify(input) : null; })(input), DynamicConstant.SPOILERS);
