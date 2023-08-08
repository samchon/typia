import typia from "../../../../src";
import { _test_misc_assertClone } from "../../../internal/_test_misc_assertClone";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";

export const test_misc_assertClone_ConstantEnumeration = _test_misc_assertClone(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    (input: any): typia.Primitive<ConstantEnumeration> => {
        const assert = (input: any): ConstantEnumeration => {
            const __is = (input: any): input is ConstantEnumeration => {
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
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ConstantEnumeration => {
                    const $guard = (typia.misc.createAssertClone as any).guard;
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
        };
        const clone = (
            input: ConstantEnumeration,
        ): typia.Primitive<ConstantEnumeration> => {
            const $cp0 = (input: any) => input.map((elem: any) => elem as any);
            return Array.isArray(input) ? $cp0(input) : (input as any);
        };
        assert(input);
        const output = clone(input);
        return output;
    },
    ConstantEnumeration.SPOILERS,
);
