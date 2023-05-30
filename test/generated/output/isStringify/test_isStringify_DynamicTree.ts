import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { DynamicTree } from "../../../structures/DynamicTree";
export const test_isStringify_DynamicTree = _test_isStringify("DynamicTree", DynamicTree.generate, (input) => ((input: DynamicTree): string | null => { const is = (input: any): input is DynamicTree => {
    const $join = (typia.isStringify as any).join;
    const $io0 = (input: any): boolean => "string" === typeof input.id && ("number" === typeof input.sequence && Number.isFinite(input.sequence)) && ("object" === typeof input.children && null !== input.children && false === Array.isArray(input.children) && $io1(input.children));
    const $io1 = (input: any): boolean => Object.keys(input).every(key => {
        const value = input[key];
        if (undefined === value)
            return true;
        if (RegExp(/(.*)/).test(key))
            return "object" === typeof value && null !== value && $io0(value);
        return true;
    });
    return "object" === typeof input && null !== input && $io0(input);
}; const stringify = (input: DynamicTree): string => {
    const $string = (typia.isStringify as any).string;
    const $number = (typia.isStringify as any).number;
    const $join = (typia.isStringify as any).join;
    const $io0 = (input: any): boolean => "string" === typeof input.id && "number" === typeof input.sequence && ("object" === typeof input.children && null !== input.children && false === Array.isArray(input.children) && $io1(input.children));
    const $io1 = (input: any): boolean => Object.keys(input).every(key => {
        const value = input[key];
        if (undefined === value)
            return true;
        if (RegExp(/(.*)/).test(key))
            return "object" === typeof value && null !== value && $io0(value);
        return true;
    });
    const $so0 = (input: any): any => `{"id":${$string(input.id)},"sequence":${$number(input.sequence)},"children":${$so1(input.children)}}`;
    const $so1 = (input: any): any => `{${Object.entries(input).map(([key, value]: [string, any]) => { if (undefined === value)
        return ""; return `${JSON.stringify(key)}:${$so0(value)}`; }).filter(str => "" !== str).join(",")}}`;
    return $so0(input);
}; return is(input) ? stringify(input) : null; })(input), DynamicTree.SPOILERS);
