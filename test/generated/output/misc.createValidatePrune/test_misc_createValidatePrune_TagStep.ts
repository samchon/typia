import typia from "../../../../src";
import { _test_misc_validatePrune } from "../../../internal/_test_misc_validatePrune";
import { TagStep } from "../../../structures/TagStep";

export const test_misc_validatePrune_TagStep = _test_misc_validatePrune(
    "TagStep",
)<TagStep>(TagStep)((input: any): typia.IValidation<TagStep> => {
    const validate = (input: any): typia.IValidation<TagStep> => {
        const errors = [] as any[];
        const __is = (input: any): input is TagStep => {
            const $io0 = (input: any): boolean =>
                Array.isArray(input.value) &&
                input.value.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io1(elem),
                );
            const $io1 = (input: any): boolean =>
                "number" === typeof input.exclusiveMinimum &&
                0 === (input.exclusiveMinimum % 5) - 3 &&
                3 < input.exclusiveMinimum &&
                "number" === typeof input.minimum &&
                0 === (input.minimum % 5) - 3 &&
                3 <= input.minimum &&
                "number" === typeof input.range &&
                0 === (input.range % 5) - 0 &&
                0 < input.range &&
                100 > input.range &&
                "number" === typeof input.multipleOf &&
                0 === input.multipleOf % 5 &&
                3 <= input.multipleOf &&
                99 >= input.multipleOf;
            return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input)) {
            const $report = (typia.misc.createValidatePrune as any).report(
                errors,
            );
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
                        ((Array.isArray(input.value) ||
                            $report(_exceptionable, {
                                path: _path + ".value",
                                expected: "Array<TagStep.Type>",
                                value: input.value,
                            })) &&
                            input.value
                                .map(
                                    (elem: any, _index1: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".value[" +
                                                    _index1 +
                                                    "]",
                                                expected: "TagStep.Type",
                                                value: elem,
                                            })) &&
                                            $vo1(
                                                elem,
                                                _path +
                                                    ".value[" +
                                                    _index1 +
                                                    "]",
                                                true && _exceptionable,
                                            )) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path +
                                                ".value[" +
                                                _index1 +
                                                "]",
                                            expected: "TagStep.Type",
                                            value: elem,
                                        }),
                                )
                                .every((flag: boolean) => flag)) ||
                            $report(_exceptionable, {
                                path: _path + ".value",
                                expected: "Array<TagStep.Type>",
                                value: input.value,
                            }),
                    ].every((flag: boolean) => flag);
                const $vo1 = (
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
                    ((("object" === typeof input && null !== input) ||
                        $report(true, {
                            path: _path + "",
                            expected: "TagStep",
                            value: input,
                        })) &&
                        $vo0(input, _path + "", true)) ||
                    $report(true, {
                        path: _path + "",
                        expected: "TagStep",
                        value: input,
                    })
                );
            })(input, "$input", true);
        }
        const success = 0 === errors.length;
        return {
            success,
            errors,
            data: success ? input : undefined,
        } as any;
    };
    const prune = (input: TagStep): void => {
        const $io1 = (input: any): boolean =>
            "number" === typeof input.exclusiveMinimum &&
            0 === (input.exclusiveMinimum % 5) - 3 &&
            3 < input.exclusiveMinimum &&
            "number" === typeof input.minimum &&
            0 === (input.minimum % 5) - 3 &&
            3 <= input.minimum &&
            "number" === typeof input.range &&
            0 === (input.range % 5) - 0 &&
            0 < input.range &&
            100 > input.range &&
            "number" === typeof input.multipleOf &&
            0 === input.multipleOf % 5 &&
            3 <= input.multipleOf &&
            99 >= input.multipleOf;
        const $pp0 = (input: any) =>
            input.forEach((elem: any) => {
                if ("object" === typeof elem && null !== elem) $po1(elem);
            });
        const $po0 = (input: any): any => {
            if (Array.isArray(input.value)) $pp0(input.value);
            for (const key of Object.keys(input)) {
                if ("value" === key) continue;
                delete input[key];
            }
        };
        const $po1 = (input: any): any => {
            for (const key of Object.keys(input)) {
                if (
                    "exclusiveMinimum" === key ||
                    "minimum" === key ||
                    "range" === key ||
                    "multipleOf" === key
                )
                    continue;
                delete input[key];
            }
        };
        if ("object" === typeof input && null !== input) $po0(input);
    };
    const output = validate(input);
    if (output.success) prune(input);
    return output;
});
