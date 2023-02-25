import typia from "../../../src";
import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_assertParse } from "../internal/_test_assertParse";
export const test_assertParse_ArrayMatrix = _test_assertParse("ArrayMatrix", ArrayMatrix.generate, (input) => ((input: string): typia.Primitive<ArrayMatrix> => { const assert = (input: any) => {
    const $guard = (typia.assertParse as any).guard;
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
        })) && elem.every((elem: any, _index3: number) => "number" === typeof elem || $guard(true, {
            path: _path + "[" + _index1 + "][" + _index2 + "][" + _index3 + "]",
            expected: "number",
            value: elem
        }))));
    })(input, "$input", true);
    return input as ArrayMatrix;
}; input = JSON.parse(input); return assert(input); })(input), ArrayMatrix.SPOILERS);
