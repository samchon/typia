import typia from "../../../../src";
import { DynamicUnion } from "../../../structures/DynamicUnion";
import { _test_isStringify } from "../../../internal/_test_isStringify";
export const test_isStringify_DynamicUnion = _test_isStringify("DynamicUnion", DynamicUnion.generate, (input) => ((input: DynamicUnion): string | null => { const is = (input: any): input is DynamicUnion => {
    const $join = (typia.isStringify as any).join;
    const $io0 = (input: any): boolean => Object.keys(input).every((key: any) => {
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
            return "number" === typeof value && Number.isFinite(value);
        return true;
    });
    return "object" === typeof input && null !== input && false === Array.isArray(input) && $io0(input);
}; const stringify = (input: DynamicUnion): string => {
    const $join = (typia.isStringify as any).join;
    const $string = (typia.isStringify as any).string;
    const $number = (typia.isStringify as any).number;
    const $so0 = (input: any): any => `{${Object.entries(input).map(([key, value]: [string, any]) => { if (undefined === value)
        return ""; if (RegExp(/^-?\d+\.?\d*$/).test(key))
        return `${JSON.stringify(key)}:${$string(value)}`; if (RegExp(/^(prefix_(.*))/).test(key))
        return `${JSON.stringify(key)}:${$string(value)}`; if (RegExp(/((.*)_postfix)$/).test(key))
        return `${JSON.stringify(key)}:${$string(value)}`; if (RegExp(/^(value_between_-?\d+\.?\d*_and_-?\d+\.?\d*)$/).test(key))
        return `${JSON.stringify(key)}:${$number(value)}`; }).filter((str: any) => "" !== str).join(",")}}`;
    return $so0(input);
}; return is(input) ? stringify(input) : null; })(input), DynamicUnion.SPOILERS);
