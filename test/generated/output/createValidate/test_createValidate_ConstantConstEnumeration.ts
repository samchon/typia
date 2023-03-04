import typia from "../../../../src";
import { _test_validate } from "../../../internal/_test_validate";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";

export const test_createValidate_ConstantConstEnumeration = _test_validate(
    "ConstantConstEnumeration",
    ConstantConstEnumeration.generate,
    (input: any): typia.IValidation<ConstantConstEnumeration> => {
        const errors = [] as any[];
        const $report = (typia.createValidate as any).report(errors);
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is ConstantConstEnumeration => {
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
                                    expected: '("Four" | "Three" | 0 | 1 | 2)',
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
    },
    ConstantConstEnumeration.SPOILERS,
);