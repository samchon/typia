import typia from "../../../../src";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { FunctionalArray } from "../../../structures/FunctionalArray";

export const test_createAssertEquals_FunctionalArray = _test_assertEquals(
    "FunctionalArray",
    FunctionalArray.generate,
    (input: any): FunctionalArray => {
        const __is: any = (
            input: any,
            _exceptionable: boolean = true,
        ): input is FunctionalArray => {
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any, _index1: number) => "function" === typeof elem,
                )
            );
        };
        const $guard: any = (typia.createAssertEquals as any).guard;
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is FunctionalArray => {
                return (
                    (Array.isArray(input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "FunctionalArray",
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
);
