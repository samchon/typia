import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { DynamicConstant } from "../../../structures/DynamicConstant";
export const test_createEquals_DynamicConstant = _test_equals("DynamicConstant", DynamicConstant.generate, (input: any, _exceptionable: boolean = true): input is DynamicConstant => {
    const $io0 = (input: any, _exceptionable: boolean = true): boolean => "number" === typeof input.a && Number.isFinite(input.a) && ("number" === typeof input.b && Number.isFinite(input.b)) && ("number" === typeof input.c && Number.isFinite(input.c)) && ("number" === typeof input.d && Number.isFinite(input.d)) && (4 === Object.keys(input).length || Object.keys(input).every(key => {
        if (["a", "b", "c", "d"].some(prop => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    return "object" === typeof input && null !== input && $io0(input, true);
});
