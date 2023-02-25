import typia from "../../../src";
import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_isStringify } from "../internal/_test_isStringify";
export const test_createIsStringify_DynamicSimple = _test_isStringify("DynamicSimple", DynamicSimple.generate, (input: DynamicSimple): string | null => { const is = (input: any): input is DynamicSimple => {
    const $join = (typia.createIsStringify as any).join;
    const $io0 = (input: any) => Object.keys(input).every(key => {
        const value = input[key];
        if (undefined === value)
            return true;
        if (RegExp(/(.*)/).test(key))
            return "number" === typeof value && !Number.isNaN(value);
        return true;
    });
    return "object" === typeof input && null !== input && false === Array.isArray(input) && $io0(input);
}; const stringify = (input: DynamicSimple): string => {
    const $join = (typia.createIsStringify as any).join;
    const $so0 = (input: any) => `{${Object.entries(input).map(([key, value]) => { if (undefined === value)
        return ""; return `${JSON.stringify(key)}:${value}`; }).filter(str => "" !== str).join(",")}}`;
    return $so0(input);
}; return is(input) ? stringify(input) : null; }, DynamicSimple.SPOILERS);
