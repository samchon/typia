import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { DynamicNever } from "../../../structures/DynamicNever";
export const test_is_DynamicNever = _test_is("DynamicNever", DynamicNever.generate, (input) => ((input: any): input is DynamicNever => {
    const $join = (typia.is as any).join;
    const $io0 = (input: any): boolean => Object.keys(input).every(key => {
        const value = input[key];
        if (undefined === value)
            return true;
        if (RegExp(/(.*)/).test(key))
            return null !== value && undefined === value;
        return true;
    });
    return "object" === typeof input && null !== input && false === Array.isArray(input) && $io0(input);
})(input), DynamicNever.SPOILERS);
