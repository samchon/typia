import typia from "../../../../src";
import { _test_assertPrune } from "../../../internal/_test_assertPrune";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";

export const test_createAssertPrune_ConstantEnumeration = _test_assertPrune(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    (input: any): ConstantEnumeration => {
        const assert: any = (input: any): ConstantEnumeration => {
            const __is: any = (input: any): input is ConstantEnumeration => {
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
            const $guard: any = (typia.createAssertPrune as any).guard;
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ConstantEnumeration => {
                    return (
                        (Array.isArray(input) ||
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
                                    expected: '("Four" | "Three" | 0 | 1 | 2)',
                                    value: elem,
                                }),
                        )
                    );
                })(input, "$input", true);
            return input;
        };
        const prune: any = (input: ConstantEnumeration): void => {};
        assert(input);
        prune(input);
        return input;
    },
    ConstantEnumeration.SPOILERS,
);
