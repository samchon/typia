import typia from "../../../../src";
import { _test_assertParse } from "../../../internal/_test_assertParse";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";

export const test_assertParse_ConstantConstEnumeration = _test_assertParse(
    "ConstantConstEnumeration",
    ConstantConstEnumeration.generate,
    (input) =>
        ((input: string): typia.Primitive<ConstantConstEnumeration> => {
            const assert: any = (input: any): ConstantConstEnumeration => {
                const __is: any = (
                    input: any,
                ): input is ConstantConstEnumeration => {
                    return (
                        Array.isArray(input) &&
                        input.every(
                            (elem: any) =>
                                0 === elem ||
                                1 === elem ||
                                2 === elem ||
                                "Three" === elem ||
                                "Four" === elem,
                        )
                    );
                };
                const $guard: any = (typia.assertParse as any).guard;
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is ConstantConstEnumeration => {
                        return (
                            (Array.isArray(input) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "ConstantConstEnumeration",
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
                            )
                        );
                    })(input, "$input", true);
                return input;
            };
            input = JSON.parse(input);
            return assert(input) as any;
        })(input),
    ConstantConstEnumeration.SPOILERS,
);
