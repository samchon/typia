import typia from "../../../../src";
import { FunctionalValueUnion } from "../../../structures/FunctionalValueUnion";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_FunctionalValueUnion = _test_validate(
    "FunctionalValueUnion",
    FunctionalValueUnion.generate,
    (input: any): typia.IValidation<FunctionalValueUnion> => {
        const errors = [] as any[];
        const $report = (typia.createValidate as any).report(errors);
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is FunctionalValueUnion => {
            return (
                ((Array.isArray(input) ||
                    $report(true, {
                        path: _path + "",
                        expected: "Array<(null | number | string)>",
                        value: input,
                    })) &&
                    input
                        .map(
                            (elem: any, _index1: number) =>
                                (undefined !== elem ||
                                    $report(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected: "(null | number | string)",
                                        value: elem,
                                    })) &&
                                (null === elem ||
                                    "function" === typeof elem ||
                                    "string" === typeof elem ||
                                    ("number" === typeof elem &&
                                        Number.isFinite(elem)) ||
                                    $report(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected: "(null | number | string)",
                                        value: elem,
                                    })),
                        )
                        .every((flag: boolean) => flag)) ||
                $report(true, {
                    path: _path + "",
                    expected: "Array<(null | number | string)>",
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
    FunctionalValueUnion.SPOILERS,
);
