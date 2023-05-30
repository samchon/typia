import typia from "../../../../src";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { FunctionalArray } from "../../../structures/FunctionalArray";
export const test_assertEquals_FunctionalArray = _test_assertEquals("FunctionalArray", FunctionalArray.generate, (input) => ((input: any): Array<(...args: Array<any>) => > => {
    const $guard = (typia.assertEquals as any).guard;
    const __is = (input: any, _exceptionable: boolean = true): input is Array<(...args: Array<any>) => > => {
        return Array.isArray(input) && input.every((elem: any, _index1: number) => "function" === typeof elem);
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is Array<(...args: Array<any>) => > => {
            return (Array.isArray(input) || $guard(true, {
                path: _path + "",
                expected: "Array<unknown>",
                value: input
            })) && input.every((elem: any, _index1: number) => "function" === typeof elem || $guard(true, {
                path: _path + "[" + _index1 + "]",
                expected: "unknown",
                value: elem
            }));
        })(input, "$input", true);
    return input;
})(input));
