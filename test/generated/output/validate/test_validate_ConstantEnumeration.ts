import typia from "../../../../src";
import { _test_validate } from "../../../internal/_test_validate";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";

export const test_validate_ConstantEnumeration = _test_validate(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    (input) =>
        ((
            input: any,
        ): typia.IValidation<Array<ConstantEnumeration.Enumeration>> => {
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
            const errors: any = [] as any[];
            const $report: any = (typia.validate as any).report(errors);
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is Array<ConstantEnumeration.Enumeration> => {
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
                                            path: _path + "[" + _index1 + "]",
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
        })(input),
    ConstantEnumeration.SPOILERS,
);
