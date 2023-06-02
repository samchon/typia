import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";

export const test_assertStringify_ConstantEnumeration = _test_assertStringify(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    (input) =>
        ((input: any): string => {
            const assert: any = (
                input: any,
            ): Array<ConstantEnumeration.Enumeration> => {
                const __is: any = (
                    input: any,
                ): input is Array<ConstantEnumeration.Enumeration> => {
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
                const $guard: any = (typia.assertStringify as any).guard;
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is Array<ConstantEnumeration.Enumeration> => {
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
                                        expected:
                                            '("Four" | "Three" | 0 | 1 | 2)',
                                        value: elem,
                                    }),
                            )
                        );
                    })(input, "$input", true);
                return input;
            };
            const stringify: any = (
                input: Array<ConstantEnumeration.Enumeration>,
            ): string => {
                const $string: any = (typia.assertStringify as any).string;
                const $number: any = (typia.assertStringify as any).number;
                const $throws: any = (typia.assertStringify as any).throws;
                return (() =>
                    `[${input
                        .map((elem: any) =>
                            (() => {
                                if ("string" === typeof elem)
                                    return $string(elem);
                                if ("number" === typeof elem)
                                    return $number(elem);
                                if ("string" === typeof elem)
                                    return '"' + elem + '"';
                                $throws({
                                    expected: '("Four" | "Three" | 0 | 1 | 2)',
                                    value: elem,
                                });
                            })(),
                        )
                        .join(",")}]`)();
            };
            return stringify(assert(input));
        })(input),
    ConstantEnumeration.SPOILERS,
);
