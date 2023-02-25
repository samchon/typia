import typia from "../../../src";
import { DynamicNever } from "../../structures/DynamicNever";
import { _test_isStringify } from "../internal/_test_isStringify";
export const test_isStringify_DynamicNever = _test_isStringify("DynamicNever", DynamicNever.generate, (input) => ((input: DynamicNever): string | null => { const is = (input: any): input is DynamicNever => {
    const $join = (typia.isStringify as any).join;
    const $io0 = (input: any) => Object.keys(input).every(key => {
        const value = input[key];
        if (undefined === value)
            return true;
        if (RegExp(/(.*)/).test(key))
            return null !== value && undefined === value;
        return true;
    });
    return "object" === typeof input && null !== input && false === Array.isArray(input) && $io0(input);
}; const stringify = (input: DynamicNever): string => {
    const $join = (typia.isStringify as any).join;
    const $so0 = (input: any) => `{${Object.entries(input).map(([key, value]) => { if (undefined === value)
        return ""; return `${JSON.stringify(key)}:${undefined}`; }).filter(str => "" !== str).join(",")}}`;
    return $so0(input);
}; return is(input) ? stringify(input) : null; })(input), DynamicNever.SPOILERS);
