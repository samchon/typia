import typia from "../../../src";
import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_assertStringify } from "../internal/_test_assertStringify";
export const test_assertStringify_ArrayMatrix = _test_assertStringify("ArrayMatrix", ArrayMatrix.generate, (input) => ((input: ArrayMatrix): string => { const assert = (input: any) => {
    const $guard = (typia.assertStringify as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is ArrayMatrix => {
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Array<Array<Array<number>>>",
            value: input
        })) && input.every((elem: any, _index1: number) => (Array.isArray(elem) || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "Array<Array<number>>",
            value: elem
        })) && elem.every((elem: any, _index2: number) => (Array.isArray(elem) || $guard(true, {
            path: _path + "[" + _index1 + "][" + _index2 + "]",
            expected: "Array<number>",
            value: elem
        })) && elem.every((elem: any, _index3: number) => "number" === typeof elem && !Number.isNaN(elem) || $guard(true, {
            path: _path + "[" + _index1 + "][" + _index2 + "][" + _index3 + "]",
            expected: "number",
            value: elem
        }))));
    })(input, "$input", true);
    return input as ArrayMatrix;
}; const stringify = (input: ArrayMatrix): string => {
    return `[${input.map((elem: any) => `[${elem.map((elem: any) => `[${elem.map((elem: any) => elem).join(",")}]`).join(",")}]`).join(",")}]`;
}; return stringify(assert(input)); })(input), ArrayMatrix.SPOILERS);
