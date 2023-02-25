import typia from "../../../src";
import { DynamicArray } from "../../structures/DynamicArray";
import { _test_assertStringify } from "../internal/_test_assertStringify";
export const test_createAssertStringify_DynamicArray = _test_assertStringify("DynamicArray", DynamicArray.generate, (input: DynamicArray): string => { const assert = (input: any) => {
    const $guard = (typia.createAssertStringify as any).guard;
    const $join = (typia.createAssertStringify as any).join;
    ((input: any, _path: string, _exceptionable: boolean): input is DynamicArray => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => false === _exceptionable || Object.keys(input).every(key => {
            const value = input[key];
            if (undefined === value)
                return true;
            if (RegExp(/(.*)/).test(key))
                return (Array.isArray(value) || $guard(_exceptionable, {
                    path: _path + $join(key),
                    expected: "Array<string>",
                    value: value
                })) && value.every((elem: any, _index1: number) => "string" === typeof elem || $guard(_exceptionable, {
                    path: _path + $join(key) + "[" + _index1 + "]",
                    expected: "string",
                    value: elem
                }));
            return true;
        });
        return ("object" === typeof input && null !== input && false === Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Resolve<DynamicArray>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as DynamicArray;
}; const stringify = (input: DynamicArray): string => {
    const $join = (typia.createAssertStringify as any).join;
    const $string = (typia.createAssertStringify as any).string;
    const $so0 = (input: any) => `{${Object.entries(input).map(([key, value]) => { if (undefined === value)
        return ""; return `${JSON.stringify(key)}:${`[${value.map((elem: any) => $string(elem)).join(",")}]`}`; }).filter(str => "" !== str).join(",")}}`;
    return $so0(input);
}; return stringify(assert(input)); }, DynamicArray.SPOILERS);
