import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";

export const test_assertStringify_ConstantConstEnumeration =
    _test_assertStringify(
        "ConstantConstEnumeration",
        ConstantConstEnumeration.generate,
        (input) =>
            ((input: any): string => {
                const assert = (
                    input: any,
                ): Array<ConstantConstEnumeration.Enumeration> => {
                    const __is = (
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
                    if (false === __is(input))
                        ((
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): input is Array<ConstantConstEnumeration.Enumeration> => {
                            const $guard = (typia.assertStringify as any).guard;
                            return (
                                ((Array.isArray(input) ||
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
                                                path:
                                                    _path + "[" + _index1 + "]",
                                                expected:
                                                    '("Four" | "Three" | 0 | 1 | 2)',
                                                value: elem,
                                            }),
                                    )) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "ConstantConstEnumeration",
                                    value: input,
                                })
                            );
                        })(input, "$input", true);
                    return input;
                };
                const stringify = (
                    input: Array<ConstantConstEnumeration.Enumeration>,
                ): string => {
                    const $string = (typia.assertStringify as any).string;
                    const $number = (typia.assertStringify as any).number;
                    const $throws = (typia.assertStringify as any).throws;
                    return `[${input
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
                        .join(",")}]`;
                };
                return stringify(assert(input));
            })(input),
        ConstantConstEnumeration.SPOILERS,
    );
