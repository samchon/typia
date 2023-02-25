import typia from "../../../src";
import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_equals } from "../internal/_test_equals";
export const test_equals_DynamicConstant = _test_equals("DynamicConstant", DynamicConstant.generate, (input) => ((input: any, _exceptionable: boolean): input is DynamicConstant => {
    const $io0 = (input: any, _exceptionable: boolean) => "number" === typeof input.a && "number" === typeof input.b && "number" === typeof input.c && "number" === typeof input.d && (4 === Object.keys(input).length || Object.keys(input).every(key => {
        if (["a", "b", "c", "d"].some(prop => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    return "object" === typeof input && null !== input && $io0(input, true);
})(input));
