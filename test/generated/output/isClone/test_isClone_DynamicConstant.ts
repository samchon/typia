import typia from "../../../src";
import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_isClone } from "../internal/_test_isClone";
export const test_isClone_DynamicConstant = _test_isClone("DynamicConstant", DynamicConstant.generate, (input) => ((input: any): typia.Primitive<DynamicConstant> | null => { const is = (input: any): input is DynamicConstant => {
    const $io0 = (input: any) => "number" === typeof input.a && "number" === typeof input.b && "number" === typeof input.c && "number" === typeof input.d;
    return "object" === typeof input && null !== input && $io0(input);
}; const clone = (input: DynamicConstant): typia.Primitive<DynamicConstant> => {
    const $co0 = (input: any) => ({
        a: input.a,
        b: input.b,
        c: input.c,
        d: input.d
    });
    return "object" === typeof input && null !== input ? $co0(input) : input;
}; if (!is(input))
    return null; const output = clone(input); return output; })(input), DynamicConstant.SPOILERS);
