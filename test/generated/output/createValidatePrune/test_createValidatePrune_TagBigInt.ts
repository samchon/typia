import typia from "../../../../src";
import { _test_validatePrune } from "../../../internal/_test_validatePrune";
import { TagBigInt } from "../../../structures/TagBigInt";

export const test_createValidatePrune_TagBigInt = _test_validatePrune(
    "TagBigInt",
    TagBigInt.generate,
    (input: any): typia.IValidation<TagBigInt> => {
        const validate = (input: any): typia.IValidation<TagBigInt> => {
            const __is = (input: any): input is TagBigInt => {
                const $io0 = (input: any): boolean =>
                    "bigint" === typeof input.value &&
                    "bigint" === typeof input.ranged &&
                    0n <= input.ranged &&
                    100n >= input.ranged &&
                    "bigint" === typeof input.minimum &&
                    0n <= input.minimum &&
                    "bigint" === typeof input.maximum &&
                    100n >= input.maximum &&
                    "bigint" === typeof input.multipleOf &&
                    0n === input.multipleOf % 3n;
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            const errors = [] as any[];
            const $report = (typia.createValidatePrune as any).report(errors);
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is TagBigInt => {
                    const $vo0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            "bigint" === typeof input.value ||
                                $report(_exceptionable, {
                                    path: _path + ".value",
                                    expected: "bigint",
                                    value: input.value,
                                }),
                            ("bigint" === typeof input.ranged &&
                                (0n <= input.ranged ||
                                    $report(_exceptionable, {
                                        path: _path + ".ranged",
                                        expected: "bigint (@minimum 0)",
                                        value: input.ranged,
                                    })) &&
                                (100n >= input.ranged ||
                                    $report(_exceptionable, {
                                        path: _path + ".ranged",
                                        expected: "bigint (@maximum 100)",
                                        value: input.ranged,
                                    }))) ||
                                $report(_exceptionable, {
                                    path: _path + ".ranged",
                                    expected: "bigint",
                                    value: input.ranged,
                                }),
                            ("bigint" === typeof input.minimum &&
                                (0n <= input.minimum ||
                                    $report(_exceptionable, {
                                        path: _path + ".minimum",
                                        expected: "bigint (@minimum 0)",
                                        value: input.minimum,
                                    }))) ||
                                $report(_exceptionable, {
                                    path: _path + ".minimum",
                                    expected: "bigint",
                                    value: input.minimum,
                                }),
                            ("bigint" === typeof input.maximum &&
                                (100n >= input.maximum ||
                                    $report(_exceptionable, {
                                        path: _path + ".maximum",
                                        expected: "bigint (@maximum 100)",
                                        value: input.maximum,
                                    }))) ||
                                $report(_exceptionable, {
                                    path: _path + ".maximum",
                                    expected: "bigint",
                                    value: input.maximum,
                                }),
                            ("bigint" === typeof input.multipleOf &&
                                (0n === input.multipleOf % 3n ||
                                    $report(_exceptionable, {
                                        path: _path + ".multipleOf",
                                        expected: "bigint (@multipleOf 3)",
                                        value: input.multipleOf,
                                    }))) ||
                                $report(_exceptionable, {
                                    path: _path + ".multipleOf",
                                    expected: "bigint",
                                    value: input.multipleOf,
                                }),
                        ].every((flag: boolean) => flag);
                    return (
                        ((("object" === typeof input && null !== input) ||
                            $report(true, {
                                path: _path + "",
                                expected: "TagBigInt",
                                value: input,
                            })) &&
                            $vo0(input, _path + "", true)) ||
                        $report(true, {
                            path: _path + "",
                            expected: "TagBigInt",
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
        const prune = (input: TagBigInt): void => {
            const $po0 = (input: any): any => {
                for (const key of Object.keys(input)) {
                    if (
                        "value" === key ||
                        "ranged" === key ||
                        "minimum" === key ||
                        "maximum" === key ||
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
    },
    TagBigInt.SPOILERS,
);
