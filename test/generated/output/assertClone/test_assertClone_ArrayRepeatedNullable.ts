import typia from "../../../../src";
import { ArrayRepeatedNullable } from "../../../structures/ArrayRepeatedNullable";
import { _test_assertClone } from "../../../internal/_test_assertClone";
export const test_assertClone_ArrayRepeatedNullable = _test_assertClone("ArrayRepeatedNullable", ArrayRepeatedNullable.generate, (input) => ((input: any): typia.Primitive<string | number | Array<ArrayRepeatedNullable> | null> => { const assert = (input: any): string | number | Array<ArrayRepeatedNullable> | null => {
    const __is = (input: any): input is string | number | Array<ArrayRepeatedNullable> | null => {
        const $ia0 = (input: any): any => input.every((elem: any) => undefined !== elem && (null === elem || "string" === typeof elem || "number" === typeof elem && Number.isFinite(elem) || Array.isArray(elem) && ($ia0(elem) || false)));
        return undefined !== input && (null === input || "string" === typeof input || "number" === typeof input && Number.isFinite(input) || Array.isArray(input) && ($ia0(input) || false));
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is string | number | Array<ArrayRepeatedNullable> | null => {
            const $guard = (typia.assertClone as any).guard;
            const $aa0 = (input: any, _path: string, _exceptionable: boolean = true): any => input.every((elem: any, _index1: number) => (undefined !== elem || $guard(_exceptionable, {
                path: _path + "[" + _index1 + "]",
                expected: "(Array<ArrayRepeatedNullable> | null | number | string)",
                value: elem
            })) && (null === elem || "string" === typeof elem || "number" === typeof elem && Number.isFinite(elem) || (Array.isArray(elem) || $guard(_exceptionable, {
                path: _path + "[" + _index1 + "]",
                expected: "(Array<ArrayRepeatedNullable> | null | number | string)",
                value: elem
            })) && ($aa0(elem, _path + "[" + _index1 + "]", true && _exceptionable) || $guard(_exceptionable, {
                path: _path + "[" + _index1 + "]",
                expected: "Array<ArrayRepeatedNullable>",
                value: elem
            })) || $guard(_exceptionable, {
                path: _path + "[" + _index1 + "]",
                expected: "(Array<ArrayRepeatedNullable> | null | number | string)",
                value: elem
            })));
            return (undefined !== input || $guard(true, {
                path: _path + "",
                expected: "(Array<ArrayRepeatedNullable> | null | number | string)",
                value: input
            })) && (null === input || "string" === typeof input || "number" === typeof input && Number.isFinite(input) || (Array.isArray(input) || $guard(true, {
                path: _path + "",
                expected: "(Array<ArrayRepeatedNullable> | null | number | string)",
                value: input
            })) && ($aa0(input, _path + "", true && _exceptionable) || $guard(_exceptionable, {
                path: _path + "",
                expected: "Array<ArrayRepeatedNullable>",
                value: input
            })) || $guard(true, {
                path: _path + "",
                expected: "(Array<ArrayRepeatedNullable> | null | number | string)",
                value: input
            }));
        })(input, "$input", true);
    return input;
}; const clone = (input: string | number | Array<ArrayRepeatedNullable> | null): typia.Primitive<string | number | Array<ArrayRepeatedNullable> | null> => {
    const $ia0 = (input: any): any => input.every((elem: any) => undefined !== elem && (null === elem || "string" === typeof elem || "number" === typeof elem || Array.isArray(elem) && ($ia0(elem) || false)));
    const $cp0 = (input: any) => $ca0(input);
    const $ca0 = (input: any): any => input.map((elem: any) => Array.isArray(elem) ? $cp0(elem) : elem as any);
    return Array.isArray(input) ? $cp0(input) : input as any;
}; assert(input); const output = clone(input); return output; })(input), ArrayRepeatedNullable.SPOILERS);
