import typia from "../../../../src";
import { _test_json_assertStringify } from "../../../internal/_test_json_assertStringify";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";

export const test_json_assertStringify_ConstantConstEnumeration =
    _test_json_assertStringify(
        "ConstantConstEnumeration",
        ConstantConstEnumeration.generate,
        (input: any): string => {
            const assert = (input: any): ConstantConstEnumeration => {
                const __is = (
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
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is ConstantConstEnumeration => {
                        const $guard = (typia.json.createAssertStringify as any)
                            .guard;
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
                                            path: _path + "[" + _index1 + "]",
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
            const stringify = (input: ConstantConstEnumeration): string => {
                const $string = (typia.json.createAssertStringify as any)
                    .string;
                const $number = (typia.json.createAssertStringify as any)
                    .number;
                const $throws = (typia.json.createAssertStringify as any)
                    .throws;
                return `[${input
                    .map((elem: any) =>
                        (() => {
                            if ("string" === typeof elem) return $string(elem);
                            if ("number" === typeof elem) return $number(elem);
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
        },
        ConstantConstEnumeration.SPOILERS,
    );
