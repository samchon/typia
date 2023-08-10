import typia from "../../../../src";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";

export const test_assertEquals_ConstantEnumeration =
    _test_assertEquals<ConstantEnumeration>(ConstantEnumeration)((input) =>
        ((input: any): ConstantEnumeration => {
            const __is = (
                input: any,
                _exceptionable: boolean = true,
            ): input is ConstantEnumeration => {
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any, _index1: number) =>
                            0 === elem ||
                            1 === elem ||
                            2 === elem ||
                            "Three" === elem ||
                            "Four" === elem,
                    )
                );
            };
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ConstantEnumeration => {
                    const $guard = (typia.assertEquals as any).guard;
                    return (
                        ((Array.isArray(input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "ConstantEnumeration",
                                value: input,
                            })) &&
                            input.every(
                                (elem: any, _index1: number) =>
                                    0 === elem ||
                                    1 === elem ||
                                    2 === elem ||
                                    "Three" === elem ||
                                    "Four" === elem ||
                                    $guard(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected:
                                            '("Four" | "Three" | 0 | 1 | 2)',
                                        value: elem,
                                    }),
                            )) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "ConstantEnumeration",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            return input;
        })(input),
    );
