import typia from "../../../../src";
import { _test_validateEquals } from "../../../internal/_test_validateEquals";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";

export const test_validateEquals_ConstantEnumeration = _test_validateEquals(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    (input) =>
        ((
            input: any,
        ): typia.IValidation<Array<ConstantEnumeration.Enumeration>> => {
            const errors = [] as any[];
            const $report = (typia.validateEquals as any).report(errors);
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ConstantEnumeration => {
                return (
                    ((Array.isArray(input) ||
                        $report(true, {
                            path: _path + "",
                            expected: 'Array<("Four" | "Three" | 0 | 1 | 2)>',
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
        })(input),
);
