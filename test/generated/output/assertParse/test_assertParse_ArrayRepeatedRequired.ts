import typia from "../../../../src";
import { ArrayRepeatedRequired } from "../../../structures/ArrayRepeatedRequired";
import { _test_assertParse } from "../../../internal/_test_assertParse";
export const test_assertParse_ArrayRepeatedRequired = _test_assertParse("ArrayRepeatedRequired", ArrayRepeatedRequired.generate, (input) => ((input: string): typia.Primitive<ArrayRepeatedRequired> => { const assert = (input: any): ArrayRepeatedRequired => {
    const __is = (input: any): input is ArrayRepeatedRequired => {
        const $ia0 = (input: any): any => input.every((elem: any) => null !== elem && undefined !== elem && ("string" === typeof elem || "number" === typeof elem && Number.isFinite(elem) || Array.isArray(elem) && ($ia0(elem) || false)));
        return null !== input && undefined !== input && ("string" === typeof input || "number" === typeof input && Number.isFinite(input) || Array.isArray(input) && ($ia0(input) || false));
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is ArrayRepeatedRequired => {
            const $guard = (typia.assertParse as any).guard;
            const $aa0 = (input: any, _path: string, _exceptionable: boolean = true): any => input.every((elem: any, _index1: number) => (null !== elem || $guard(_exceptionable, {
                path: _path + "[" + _index1 + "]",
                expected: "(Array<ArrayRepeatedRequired> | number | string)",
                value: elem
            })) && (undefined !== elem || $guard(_exceptionable, {
                path: _path + "[" + _index1 + "]",
                expected: "(Array<ArrayRepeatedRequired> | number | string)",
                value: elem
            })) && ("string" === typeof elem || "number" === typeof elem && Number.isFinite(elem) || (Array.isArray(elem) || $guard(_exceptionable, {
                path: _path + "[" + _index1 + "]",
                expected: "(Array<ArrayRepeatedRequired> | number | string)",
                value: elem
            })) && ($aa0(elem, _path + "[" + _index1 + "]", true && _exceptionable) || $guard(_exceptionable, {
                path: _path + "[" + _index1 + "]",
                expected: "Array<ArrayRepeatedRequired>",
                value: elem
            })) || $guard(_exceptionable, {
                path: _path + "[" + _index1 + "]",
                expected: "(Array<ArrayRepeatedRequired> | number | string)",
                value: elem
            })));
            return (null !== input || $guard(true, {
                path: _path + "",
                expected: "(Array<ArrayRepeatedRequired> | number | string)",
                value: input
            })) && (undefined !== input || $guard(true, {
                path: _path + "",
                expected: "(Array<ArrayRepeatedRequired> | number | string)",
                value: input
            })) && ("string" === typeof input || "number" === typeof input && Number.isFinite(input) || (Array.isArray(input) || $guard(true, {
                path: _path + "",
                expected: "(Array<ArrayRepeatedRequired> | number | string)",
                value: input
            })) && ($aa0(input, _path + "", true && _exceptionable) || $guard(_exceptionable, {
                path: _path + "",
                expected: "Array<ArrayRepeatedRequired>",
                value: input
            })) || $guard(true, {
                path: _path + "",
                expected: "(Array<ArrayRepeatedRequired> | number | string)",
                value: input
            }));
        })(input, "$input", true);
    return input;
}; input = JSON.parse(input); return assert(input) as any; })(input), ArrayRepeatedRequired.SPOILERS);
