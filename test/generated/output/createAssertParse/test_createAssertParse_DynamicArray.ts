import typia from "../../../../src";
import { DynamicArray } from "../../../structures/DynamicArray";
import { _test_assertParse } from "../../../internal/_test_assertParse";
export const test_createAssertParse_DynamicArray = _test_assertParse("DynamicArray", DynamicArray.generate, (input: string): typia.Primitive<DynamicArray> => { const assert = (input: any): DynamicArray => {
    const __is = (input: any): input is DynamicArray => {
        const $join = (typia.createAssertParse as any).join;
        const $io0 = (input: any): boolean => Object.keys(input).every((key: any) => {
            const value = input[key];
            if (undefined === value)
                return true;
            if (RegExp(/(.*)/).test(key))
                return Array.isArray(value) && value.every((elem: any) => "string" === typeof elem);
            return true;
        });
        return "object" === typeof input && null !== input && false === Array.isArray(input) && $io0(input);
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is DynamicArray => {
            const $guard = (typia.createAssertParse as any).guard;
            const $join = (typia.createAssertParse as any).join;
            const $ao0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => false === _exceptionable || Object.keys(input).every((key: any) => {
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
                    })) || $guard(_exceptionable, {
                        path: _path + $join(key),
                        expected: "Array<string>",
                        value: value
                    });
                return true;
            });
            return ("object" === typeof input && null !== input && false === Array.isArray(input) || $guard(true, {
                path: _path + "",
                expected: "DynamicArray",
                value: input
            })) && $ao0(input, _path + "", true) || $guard(true, {
                path: _path + "",
                expected: "DynamicArray",
                value: input
            });
        })(input, "$input", true);
    return input;
}; input = JSON.parse(input); return assert(input) as any; }, DynamicArray.SPOILERS);
