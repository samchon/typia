import typia from "../../../../src";
import { _test_assertClone } from "../../../internal/_test_assertClone";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";

export const test_assertClone_ConstantConstEnumeration = _test_assertClone(
    "ConstantConstEnumeration",
    ConstantConstEnumeration.generate,
    (input) =>
        ((
            input: any,
        ): typia.Primitive<Array<ConstantConstEnumeration.Enumeration>> => {
            const assert: any = (
                input: any,
            ): Array<ConstantConstEnumeration.Enumeration> => {
                const __is: any = (
                    input: any,
                ): input is Array<ConstantConstEnumeration.Enumeration> => {
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
                const $guard: any = (typia.assertClone as any).guard;
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is Array<ConstantConstEnumeration.Enumeration> => {
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
            const clone: any = (
                input: Array<ConstantConstEnumeration.Enumeration>,
            ): typia.Primitive<Array<ConstantConstEnumeration.Enumeration>> => {
                return Array.isArray(input)
                    ? (() => input.map((elem: any) => elem as any))()
                    : (input as any);
            };
            assert(input);
            const output: any = clone(input);
            return output;
        })(input),
    ConstantConstEnumeration.SPOILERS,
);
