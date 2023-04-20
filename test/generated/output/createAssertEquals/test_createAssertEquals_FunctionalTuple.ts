import typia from "../../../../src";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { FunctionalTuple } from "../../../structures/FunctionalTuple";

export const test_createAssertEquals_FunctionalTuple = _test_assertEquals(
    "FunctionalTuple",
    FunctionalTuple.generate,
    (input: any): FunctionalTuple => {
        const $guard = (typia.createAssertEquals as any).guard;
        const __is = (
            input: any,
            _exceptionable: boolean = true,
        ): input is FunctionalTuple => {
            return (
                Array.isArray(input) &&
                input.length === 3 &&
                "function" === typeof input[0] &&
                "function" === typeof input[1] &&
                "function" === typeof input[2]
            );
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is FunctionalTuple => {
                return (
                    (Array.isArray(input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "[unknown, unknown, unknown]",
                            value: input,
                        })) &&
                    (input.length === 3 ||
                        $guard(true, {
                            path: _path + "",
                            expected: "[unknown, unknown, unknown]",
                            value: input,
                        })) &&
                    ("function" === typeof input[0] ||
                        $guard(true, {
                            path: _path + "[0]",
                            expected: "unknown",
                            value: input[0],
                        })) &&
                    ("function" === typeof input[1] ||
                        $guard(true, {
                            path: _path + "[1]",
                            expected: "unknown",
                            value: input[1],
                        })) &&
                    ("function" === typeof input[2] ||
                        $guard(true, {
                            path: _path + "[2]",
                            expected: "unknown",
                            value: input[2],
                        }))
                );
            })(input, "$input", true);
        return input;
    },
);
