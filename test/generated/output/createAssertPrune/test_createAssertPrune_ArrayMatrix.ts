import typia from "../../../src";
import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_assertPrune } from "../internal/_test_assertPrune";
export const test_createAssertPrune_ArrayMatrix = _test_assertPrune("ArrayMatrix", ArrayMatrix.generate, (input: any): ArrayMatrix => { const assert = (input: any) => {
    const $guard = (typia.createAssertPrune as any).guard;
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
}; const prune = (input: ArrayMatrix): void => {
}; assert(input); prune(input); return input; }, ArrayMatrix.SPOILERS);
