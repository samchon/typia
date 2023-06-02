import typia from "../../../../src";
import { _test_assertClone } from "../../../internal/_test_assertClone";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";

export const test_createAssertClone_ConstantEnumeration = _test_assertClone(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    (input: any): typia.Primitive<ConstantEnumeration> => {
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
            const $guard: any = (typia.createAssertClone as any).guard;
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
        const clone: any = (
            input: ConstantEnumeration,
        ): typia.Primitive<ConstantEnumeration> => {
            return Array.isArray(input)
                ? (() => input.map((elem: any) => elem as any))()
                : (input as any);
        };
        assert(input);
        const output: any = clone(input);
        return output;
    },
    ConstantEnumeration.SPOILERS,
);
