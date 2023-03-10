import typia from "../../../../src";
import { _test_assert } from "../../../internal/_test_assert";
import { ToJsonNull } from "../../../structures/ToJsonNull";

export const test_assert_ToJsonNull = _test_assert(
    "ToJsonNull",
    ToJsonNull.generate,
    (input) =>
        ((input: any): ToJsonNull => {
            const $guard = (typia.assert as any).guard;
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ToJsonNull => {
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    "function" === typeof input.toJSON ||
                    $guard(_exceptionable, {
                        path: _path + ".toJSON",
                        expected: "unknown",
                        value: input.toJSON,
                    });
                return (
                    (("object" === typeof input && null !== input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "ToJsonNull",
                            value: input,
                        })) &&
                    $ao0(input, _path + "", true)
                );
            })(input, "$input", true);
            return input;
        })(input),
);
