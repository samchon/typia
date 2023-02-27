import typia from "../../../../src";
import { _test_validatePrune } from "../../../internal/_test_validatePrune";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";

export const test_validatePrune_ConstantConstEnumeration = _test_validatePrune(
    "ConstantConstEnumeration",
    ConstantConstEnumeration.generate,
    (input) =>
        ((
            input: any,
        ): typia.IValidation<Array<ConstantConstEnumeration.Enumeration>> => {
            const validate = (
                input: any,
            ): typia.IValidation<
                Array<ConstantConstEnumeration.Enumeration>
            > => {
                const errors = [] as any[];
                const $report = (typia.validatePrune as any).report(errors);
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is Array<ConstantConstEnumeration.Enumeration> => {
                    return (
                        ((Array.isArray(input) ||
                            $report(true, {
                                path: _path + "",
                                expected:
                                    'Array<("Four" | "Three" | 0 | 1 | 2)>',
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
                            expected: 'Array<("Four" | "Three" | 0 | 1 | 2)>',
                            value: input,
                        })
                    );
                })(input, "$input", true);
                const success = 0 === errors.length;
                return {
                    success,
                    errors,
                    data: success ? input : undefined,
                } as any;
            };
            const prune = (
                input: Array<ConstantConstEnumeration.Enumeration>,
            ): void => {};
            const output = validate(input);
            if (output.success) prune(input);
            return output;
        })(input),
    ConstantConstEnumeration.SPOILERS,
);
