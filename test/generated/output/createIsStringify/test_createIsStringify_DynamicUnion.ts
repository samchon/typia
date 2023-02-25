import typia from "../../../src";
import { DynamicUnion } from "../../structures/DynamicUnion";
import { _test_isStringify } from "../internal/_test_isStringify";
export const test_createIsStringify_DynamicUnion = _test_isStringify("DynamicUnion", DynamicUnion.generate, (input: DynamicUnion): string | null => { const is = (input: any): input is DynamicUnion => {
    const $join = (typia.createIsStringify as any).join;
    const $io0 = (input: any) => Object.keys(input).every(key => {
        const value = input[key];
        if (undefined === value)
            return true;
        if (RegExp(/^-?\d+\.?\d*$/).test(key))
            return "string" === typeof value;
        if (RegExp(/^(prefix_(.*))/).test(key))
            return "string" === typeof value;
        if (RegExp(/((.*)_postfix)$/).test(key))
            return "string" === typeof value;
        if (RegExp(/^(value_between_-?\d+\.?\d*_and_-?\d+\.?\d*)$/).test(key))
            return "number" === typeof value && !Number.isNaN(value);
        return true;
    });
    return "object" === typeof input && null !== input && false === Array.isArray(input) && $io0(input);
}; const stringify = (input: DynamicUnion): string => {
    const $join = (typia.createIsStringify as any).join;
    const $string = (typia.createIsStringify as any).string;
    const $so0 = (input: any) => `{${Object.entries(input).map(([key, value]) => { if (undefined === value)
        return ""; if (RegExp(/^-?\d+\.?\d*$/).test(key))
        return `${JSON.stringify(key)}:${$string(value)}`; if (RegExp(/^(prefix_(.*))/).test(key))
        return `${JSON.stringify(key)}:${$string(value)}`; if (RegExp(/((.*)_postfix)$/).test(key))
        return `${JSON.stringify(key)}:${$string(value)}`; if (RegExp(/^(value_between_-?\d+\.?\d*_and_-?\d+\.?\d*)$/).test(key))
        return `${JSON.stringify(key)}:${value}`; }).filter(str => "" !== str).join(",")}}`;
    return $so0(input);
}; return is(input) ? stringify(input) : null; }, DynamicUnion.SPOILERS);
