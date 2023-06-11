import typia from "../../../../src";
import { DynamicArray } from "../../../structures/DynamicArray";
import { _test_assert } from "../../../internal/_test_assert";
export const test_assert_DynamicArray = _test_assert("DynamicArray", DynamicArray.generate, (input) => ((input: any): DynamicArray => {
    const __is = (input: any): input is DynamicArray => {
        const $join = (typia.assert as any).join;
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
            const $guard = (typia.assert as any).guard;
            const $join = (typia.assert as any).join;
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
})(input), DynamicArray.SPOILERS);
