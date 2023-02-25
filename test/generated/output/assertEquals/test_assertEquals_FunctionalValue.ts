import typia from "../../../../src";
import { FunctionalValue } from "../../../structures/FunctionalValue";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_FunctionalValue = _test_assertEquals(
    "FunctionalValue",
    FunctionalValue.generate,
    (input) =>
        ((input: any): FunctionalValue => {
            const $guard = (typia.assertEquals as any).guard;
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
