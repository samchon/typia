import typia from "../../../src";
import { FunctionalArray } from "../../structures/FunctionalArray";
import { _test_assert } from "../internal/_test_assert";
export const test_assert_FunctionalArray = _test_assert("FunctionalArray", FunctionalArray.generate, (input) => ((input: any) => {
    const $guard = (typia.assert as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is FunctionalArray => {
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Array<unknown>",
            value: input
        })) && input.every((elem: any, _index1: number) => true || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "unknown",
            value: elem
        }));
    })(input, "$input", true);
    return input as FunctionalArray;
})(input), FunctionalArray.SPOILERS);
