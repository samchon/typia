import typia from "../../../../src";
import { FunctionalValue } from "../../../structures/FunctionalValue";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_FunctionalValue = _test_assert(
    "FunctionalValue",
    FunctionalValue.generate,
    (input) =>
        ((input: any): FunctionalValue => {
            const $guard = (typia.assert as any).guard;
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is FunctionalValue => {
                return (
                    "function" === typeof input ||
                    $guard(true, {
                        path: _path + "",
                        expected: "unknown",
                        value: input,
                    })
                );
            })(input, "$input", true);
            return input;
        })(input),
);
