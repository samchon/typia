import typia from "../../../src";
import { DynamicTree } from "../../structures/DynamicTree";
import { _test_stringify } from "../internal/_test_stringify";
export const test_createStringify_DynamicTree = _test_stringify("DynamicTree", DynamicTree.generate, (input: DynamicTree): string => {
    const $string = (typia.createStringify as any).string;
    const $join = (typia.createStringify as any).join;
    const $io0 = (input: any) => "string" === typeof input.id && "number" === typeof input.sequence && ("object" === typeof input.children && null !== input.children && false === Array.isArray(input.children) && $io1(input.children));
    const $io1 = (input: any) => Object.keys(input).every(key => {
        const value = input[key];
        if (undefined === value)
            return true;
        if (RegExp(/(.*)/).test(key))
            return "object" === typeof value && null !== value && $io0(value);
        return true;
    });
    const $so0 = (input: any) => `{"id":${$string(input.id)},"sequence":${input.sequence},"children":${$so1(input.children)}}`;
    const $so1 = (input: any) => `{${Object.entries(input).map(([key, value]) => { if (undefined === value)
        return ""; return `${JSON.stringify(key)}:${$so0(value)}`; }).filter(str => "" !== str).join(",")}}`;
    return $so0(input);
});
