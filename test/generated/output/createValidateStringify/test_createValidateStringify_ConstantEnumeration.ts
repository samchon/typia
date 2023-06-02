import typia from "../../../../src";
import { _test_validateStringify } from "../../../internal/_test_validateStringify";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";

export const test_createValidateStringify_ConstantEnumeration =
    _test_validateStringify(
        "ConstantEnumeration",
        ConstantEnumeration.generate,
        (input: ConstantEnumeration): typia.IValidation<string> => {
            const validate: any = (
                input: any,
            ): typia.IValidation<ConstantEnumeration> => {
                const __is: any = (
                    input: any,
                ): input is ConstantEnumeration => {
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
                const errors: any = [] as any[];
                const $report: any = (
                    typia.createValidateStringify as any
                ).report(errors);
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is ConstantEnumeration => {
                        return (
                            ((Array.isArray(input) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "ConstantEnumeration",
                                    value: input,
                                })) &&
                                input
                                    .map(
                                        (elem: any, _index1: number) =>
                                            0 === elem ||
                                            1 === elem ||
                                            2 === elem ||
                                            "Three" === elem ||
                                            "Four" === elem ||
                                            $report(true, {
                                                path:
                                                    _path + "[" + _index1 + "]",
                                                expected:
                                                    '("Four" | "Three" | 0 | 1 | 2)',
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag)) ||
                            $report(true, {
                                path: _path + "",
                                expected: "ConstantEnumeration",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                const success: any = 0 === errors.length;
                return {
                    success,
                    errors,
                    data: success ? input : undefined,
                } as any;
            };
            const stringify: any = (input: ConstantEnumeration): string => {
                const $string: any = (typia.createValidateStringify as any)
                    .string;
                const $number: any = (typia.createValidateStringify as any)
                    .number;
                const $throws: any = (typia.createValidateStringify as any)
                    .throws;
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
            const output: any = validate(input) as any;
            if (output.success) output.data = stringify(input);
            return output;
        },
        ConstantEnumeration.SPOILERS,
    );
