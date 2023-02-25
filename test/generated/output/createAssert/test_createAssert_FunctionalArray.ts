import typia from "../../../../src";
import { FunctionalArray } from "../../../structures/FunctionalArray";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_FunctionalArray = _test_assert(
    "FunctionalArray",
    FunctionalArray.generate,
    (input: any): FunctionalArray => {
        const $guard = (typia.createAssert as any).guard;
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is FunctionalArray => {
            return (
                (Array.isArray(input) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "Array<unknown>",
                        value: input,
                    })) &&
                input.every(
                    (elem: any, _index1: number) =>
                        "function" === typeof elem ||
                        $guard(true, {
                            path: _path + "[" + _index1 + "]",
                            expected: "unknown",
                            value: elem,
                        }),
                )
            );
        })(input, "$input", true);
        return input;
    },
    FunctionalArray.SPOILERS,
);
