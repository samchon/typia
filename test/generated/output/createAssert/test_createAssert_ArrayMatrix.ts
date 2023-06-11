import typia from "../../../../src";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";
import { _test_assert } from "../../../internal/_test_assert";
export const test_createAssert_ArrayMatrix = _test_assert("ArrayMatrix", ArrayMatrix.generate, (input: any): ArrayMatrix => {
    const __is = (input: any): input is ArrayMatrix => {
        return Array.isArray(input) && input.every((elem: any) => Array.isArray(elem) && elem.every((elem: any) => Array.isArray(elem) && elem.every((elem: any) => "number" === typeof elem && Number.isFinite(elem))));
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is ArrayMatrix => {
            const $guard = (typia.createAssert as any).guard;
            return (Array.isArray(input) || $guard(true, {
                path: _path + "",
                expected: "ArrayMatrix",
                value: input
            })) && input.every((elem: any, _index1: number) => (Array.isArray(elem) || $guard(true, {
                path: _path + "[" + _index1 + "]",
                expected: "Array<Array<number>>",
                value: elem
            })) && elem.every((elem: any, _index2: number) => (Array.isArray(elem) || $guard(true, {
                path: _path + "[" + _index1 + "][" + _index2 + "]",
                expected: "Array<number>",
                value: elem
            })) && elem.every((elem: any, _index3: number) => "number" === typeof elem && Number.isFinite(elem) || $guard(true, {
                path: _path + "[" + _index1 + "][" + _index2 + "][" + _index3 + "]",
                expected: "number",
                value: elem
            })) || $guard(true, {
                path: _path + "[" + _index1 + "][" + _index2 + "]",
                expected: "Array<number>",
                value: elem
            })) || $guard(true, {
                path: _path + "[" + _index1 + "]",
                expected: "Array<Array<number>>",
                value: elem
            })) || $guard(true, {
                path: _path + "",
                expected: "ArrayMatrix",
                value: input
            });
        })(input, "$input", true);
    return input;
}, ArrayMatrix.SPOILERS);
