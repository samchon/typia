import typia from "../../../../src";
import { _test_validateParse } from "../../../internal/_test_validateParse";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";

export const test_validateParse_ConstantEnumeration = _test_validateParse(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    (input) =>
        ((
            input: string,
        ): typia.IValidation<typia.Primitive<ConstantEnumeration>> => {
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
                const $report: any = (typia.validateParse as any).report(
                    errors,
                );
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
            input = JSON.parse(input);
            const output: any = validate(input);
            return output as any;
        })(input),
    ConstantEnumeration.SPOILERS,
);
