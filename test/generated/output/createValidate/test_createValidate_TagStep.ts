import typia from "../../../../src";
import { _test_validate } from "../../../internal/_test_validate";
import { TagStep } from "../../../structures/TagStep";

export const test_createValidate_TagStep = _test_validate(
    "TagStep",
    TagStep.generate,
    (input: any): typia.IValidation<TagStep> => {
        const errors = [] as any[];
        const $report = (typia.createValidate as any).report(errors);
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is TagStep => {
            const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                [
                    ("number" === typeof input.exclusiveMinimum &&
                        (0 === (input.exclusiveMinimum % 5) - 3 ||
                            $report(_exceptionable, {
                                path: _path + ".exclusiveMinimum",
                                expected: "number (@step 5)",
                                value: input.exclusiveMinimum,
                            })) &&
                        (3 < input.exclusiveMinimum ||
                            $report(_exceptionable, {
                                path: _path + ".exclusiveMinimum",
                                expected: "number (@exclusiveMinimum 3)",
                                value: input.exclusiveMinimum,
                            }))) ||
                        $report(_exceptionable, {
                            path: _path + ".exclusiveMinimum",
                            expected: "number",
                            value: input.exclusiveMinimum,
                        }),
                    ("number" === typeof input.minimum &&
                        (0 === (input.minimum % 5) - 3 ||
                            $report(_exceptionable, {
                                path: _path + ".minimum",
                                expected: "number (@step 5)",
                                value: input.minimum,
                            })) &&
                        (3 <= input.minimum ||
                            $report(_exceptionable, {
                                path: _path + ".minimum",
                                expected: "number (@minimum 3)",
                                value: input.minimum,
                            }))) ||
                        $report(_exceptionable, {
                            path: _path + ".minimum",
                            expected: "number",
                            value: input.minimum,
                        }),
                    ("number" === typeof input.range &&
                        (0 === (input.range % 5) - 0 ||
                            $report(_exceptionable, {
                                path: _path + ".range",
                                expected: "number (@step 5)",
                                value: input.range,
                            })) &&
                        (0 < input.range ||
                            $report(_exceptionable, {
                                path: _path + ".range",
                                expected: "number (@exclusiveMinimum 0)",
                                value: input.range,
                            })) &&
                        (100 > input.range ||
                            $report(_exceptionable, {
                                path: _path + ".range",
                                expected: "number (@exclusiveMaximum 100)",
                                value: input.range,
                            }))) ||
                        $report(_exceptionable, {
                            path: _path + ".range",
                            expected: "number",
                            value: input.range,
                        }),
                    ("number" === typeof input.multipleOf &&
                        (0 === input.multipleOf % 5 ||
                            $report(_exceptionable, {
                                path: _path + ".multipleOf",
                                expected: "number (@multipleOf 5)",
                                value: input.multipleOf,
                            })) &&
                        (3 <= input.multipleOf ||
                            $report(_exceptionable, {
                                path: _path + ".multipleOf",
                                expected: "number (@minimum 3)",
                                value: input.multipleOf,
                            })) &&
                        (99 >= input.multipleOf ||
                            $report(_exceptionable, {
                                path: _path + ".multipleOf",
                                expected: "number (@maximum 99)",
                                value: input.multipleOf,
                            }))) ||
                        $report(_exceptionable, {
                            path: _path + ".multipleOf",
                            expected: "number",
                            value: input.multipleOf,
                        }),
                ].every((flag: boolean) => flag);
            return (
                ((Array.isArray(input) ||
                    $report(true, {
                        path: _path + "",
                        expected: "Array<Resolve<TagStep.Type>>",
                        value: input,
                    })) &&
                    input
                        .map(
                            (elem: any, _index1: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $report(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected: "Resolve<TagStep.Type>",
                                        value: elem,
                                    })) &&
                                    $vo0(
                                        elem,
                                        _path + "[" + _index1 + "]",
                                        true,
                                    )) ||
                                $report(true, {
                                    path: _path + "[" + _index1 + "]",
                                    expected: "Resolve<TagStep.Type>",
                                    value: elem,
                                }),
                        )
                        .every((flag: boolean) => flag)) ||
                $report(true, {
                    path: _path + "",
                    expected: "Array<Resolve<TagStep.Type>>",
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
    TagStep.SPOILERS,
);
