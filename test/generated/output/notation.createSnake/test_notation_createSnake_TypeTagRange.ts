import typia from "../../../../src";
import { _test_notation_validateGeneral } from "../../../internal/_test_notation_validateGeneral";
import { TypeTagRange } from "../../../structures/TypeTagRange";

export const test_notation_createValidateSnake_TypeTagRange =
    _test_notation_validateGeneral("TypeTagRange")<TypeTagRange>(TypeTagRange)<
        typia.SnakeCase<TypeTagRange>
    >({
        convert: (
            input: any,
        ): typia.IValidation<typia.SnakeCase<TypeTagRange>> => {
            const validate = (input: any): typia.IValidation<TypeTagRange> => {
                const errors = [] as any[];
                const __is = (input: any): input is TypeTagRange => {
                    const $io0 = (input: any): boolean =>
                        Array.isArray(input.value) &&
                        input.value.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io1(elem),
                        );
                    const $io1 = (input: any): boolean =>
                        "number" === typeof input.greater &&
                        Math.floor(input.greater) === input.greater &&
                        -2147483648 <= input.greater &&
                        input.greater <= 2147483647 &&
                        3 < input.greater &&
                        "number" === typeof input.greater_equal &&
                        Math.floor(input.greater_equal) ===
                            input.greater_equal &&
                        -2147483648 <= input.greater_equal &&
                        input.greater_equal <= 2147483647 &&
                        3 <= input.greater_equal &&
                        "number" === typeof input.less &&
                        Math.floor(input.less) === input.less &&
                        -2147483648 <= input.less &&
                        input.less <= 2147483647 &&
                        input.less < 7 &&
                        "number" === typeof input.less_equal &&
                        Math.floor(input.less_equal) === input.less_equal &&
                        -2147483648 <= input.less_equal &&
                        input.less_equal <= 2147483647 &&
                        input.less_equal <= 7 &&
                        "number" === typeof input.greater_less &&
                        Math.floor(input.greater_less) === input.greater_less &&
                        -2147483648 <= input.greater_less &&
                        input.greater_less <= 2147483647 &&
                        3 < input.greater_less &&
                        input.greater_less < 7 &&
                        "number" === typeof input.greater_equal_less &&
                        Math.floor(input.greater_equal_less) ===
                            input.greater_equal_less &&
                        -2147483648 <= input.greater_equal_less &&
                        input.greater_equal_less <= 2147483647 &&
                        3 <= input.greater_equal_less &&
                        input.greater_equal_less < 7 &&
                        "number" === typeof input.greater_less_equal &&
                        Math.floor(input.greater_less_equal) ===
                            input.greater_less_equal &&
                        -2147483648 <= input.greater_less_equal &&
                        input.greater_less_equal <= 2147483647 &&
                        3 < input.greater_less_equal &&
                        input.greater_less_equal <= 7 &&
                        "number" === typeof input.greater_equal_less_equal &&
                        Math.floor(input.greater_equal_less_equal) ===
                            input.greater_equal_less_equal &&
                        -2147483648 <= input.greater_equal_less_equal &&
                        input.greater_equal_less_equal <= 2147483647 &&
                        3 <= input.greater_equal_less_equal &&
                        input.greater_equal_less_equal <= 7 &&
                        "number" === typeof input.equal &&
                        Math.floor(input.equal) === input.equal &&
                        -2147483648 <= input.equal &&
                        input.equal <= 2147483647 &&
                        10 <= input.equal &&
                        input.equal <= 10;
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        $io0(input)
                    );
                };
                if (false === __is(input)) {
                    const $report = (
                        typia.notations.createValidateSnake as any
                    ).report(errors);
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is TypeTagRange => {
                        const $vo0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ((Array.isArray(input.value) ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "Array<TypeTagRange.Type>",
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
                                                        expected:
                                                            "TypeTagRange.Type",
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
                                                    expected:
                                                        "TypeTagRange.Type",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "Array<TypeTagRange.Type>",
                                        value: input.value,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo1 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ("number" === typeof input.greater &&
                                    ((Math.floor(input.greater) ===
                                        input.greater &&
                                        -2147483648 <= input.greater &&
                                        input.greater <= 2147483647) ||
                                        $report(_exceptionable, {
                                            path: _path + ".greater",
                                            expected: 'number & Type<"int32">',
                                            value: input.greater,
                                        })) &&
                                    (3 < input.greater ||
                                        $report(_exceptionable, {
                                            path: _path + ".greater",
                                            expected:
                                                "number & ExclusiveMinimum<3>",
                                            value: input.greater,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".greater",
                                        expected:
                                            '(number & Type<"int32"> & ExclusiveMinimum<3>)',
                                        value: input.greater,
                                    }),
                                ("number" === typeof input.greater_equal &&
                                    ((Math.floor(input.greater_equal) ===
                                        input.greater_equal &&
                                        -2147483648 <= input.greater_equal &&
                                        input.greater_equal <= 2147483647) ||
                                        $report(_exceptionable, {
                                            path: _path + ".greater_equal",
                                            expected: 'number & Type<"int32">',
                                            value: input.greater_equal,
                                        })) &&
                                    (3 <= input.greater_equal ||
                                        $report(_exceptionable, {
                                            path: _path + ".greater_equal",
                                            expected: "number & Minimum<3>",
                                            value: input.greater_equal,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".greater_equal",
                                        expected:
                                            '(number & Type<"int32"> & Minimum<3>)',
                                        value: input.greater_equal,
                                    }),
                                ("number" === typeof input.less &&
                                    ((Math.floor(input.less) === input.less &&
                                        -2147483648 <= input.less &&
                                        input.less <= 2147483647) ||
                                        $report(_exceptionable, {
                                            path: _path + ".less",
                                            expected: 'number & Type<"int32">',
                                            value: input.less,
                                        })) &&
                                    (input.less < 7 ||
                                        $report(_exceptionable, {
                                            path: _path + ".less",
                                            expected:
                                                "number & ExclusiveMaximum<7>",
                                            value: input.less,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".less",
                                        expected:
                                            '(number & Type<"int32"> & ExclusiveMaximum<7>)',
                                        value: input.less,
                                    }),
                                ("number" === typeof input.less_equal &&
                                    ((Math.floor(input.less_equal) ===
                                        input.less_equal &&
                                        -2147483648 <= input.less_equal &&
                                        input.less_equal <= 2147483647) ||
                                        $report(_exceptionable, {
                                            path: _path + ".less_equal",
                                            expected: 'number & Type<"int32">',
                                            value: input.less_equal,
                                        })) &&
                                    (input.less_equal <= 7 ||
                                        $report(_exceptionable, {
                                            path: _path + ".less_equal",
                                            expected: "number & Maximum<7>",
                                            value: input.less_equal,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".less_equal",
                                        expected:
                                            '(number & Type<"int32"> & Maximum<7>)',
                                        value: input.less_equal,
                                    }),
                                ("number" === typeof input.greater_less &&
                                    ((Math.floor(input.greater_less) ===
                                        input.greater_less &&
                                        -2147483648 <= input.greater_less &&
                                        input.greater_less <= 2147483647) ||
                                        $report(_exceptionable, {
                                            path: _path + ".greater_less",
                                            expected: 'number & Type<"int32">',
                                            value: input.greater_less,
                                        })) &&
                                    (3 < input.greater_less ||
                                        $report(_exceptionable, {
                                            path: _path + ".greater_less",
                                            expected:
                                                "number & ExclusiveMinimum<3>",
                                            value: input.greater_less,
                                        })) &&
                                    (input.greater_less < 7 ||
                                        $report(_exceptionable, {
                                            path: _path + ".greater_less",
                                            expected:
                                                "number & ExclusiveMaximum<7>",
                                            value: input.greater_less,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".greater_less",
                                        expected:
                                            '(number & Type<"int32"> & ExclusiveMinimum<3> & ExclusiveMaximum<7>)',
                                        value: input.greater_less,
                                    }),
                                ("number" === typeof input.greater_equal_less &&
                                    ((Math.floor(input.greater_equal_less) ===
                                        input.greater_equal_less &&
                                        -2147483648 <=
                                            input.greater_equal_less &&
                                        input.greater_equal_less <=
                                            2147483647) ||
                                        $report(_exceptionable, {
                                            path: _path + ".greater_equal_less",
                                            expected: 'number & Type<"int32">',
                                            value: input.greater_equal_less,
                                        })) &&
                                    (3 <= input.greater_equal_less ||
                                        $report(_exceptionable, {
                                            path: _path + ".greater_equal_less",
                                            expected: "number & Minimum<3>",
                                            value: input.greater_equal_less,
                                        })) &&
                                    (input.greater_equal_less < 7 ||
                                        $report(_exceptionable, {
                                            path: _path + ".greater_equal_less",
                                            expected:
                                                "number & ExclusiveMaximum<7>",
                                            value: input.greater_equal_less,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".greater_equal_less",
                                        expected:
                                            '(number & Type<"int32"> & Minimum<3> & ExclusiveMaximum<7>)',
                                        value: input.greater_equal_less,
                                    }),
                                ("number" === typeof input.greater_less_equal &&
                                    ((Math.floor(input.greater_less_equal) ===
                                        input.greater_less_equal &&
                                        -2147483648 <=
                                            input.greater_less_equal &&
                                        input.greater_less_equal <=
                                            2147483647) ||
                                        $report(_exceptionable, {
                                            path: _path + ".greater_less_equal",
                                            expected: 'number & Type<"int32">',
                                            value: input.greater_less_equal,
                                        })) &&
                                    (3 < input.greater_less_equal ||
                                        $report(_exceptionable, {
                                            path: _path + ".greater_less_equal",
                                            expected:
                                                "number & ExclusiveMinimum<3>",
                                            value: input.greater_less_equal,
                                        })) &&
                                    (input.greater_less_equal <= 7 ||
                                        $report(_exceptionable, {
                                            path: _path + ".greater_less_equal",
                                            expected: "number & Maximum<7>",
                                            value: input.greater_less_equal,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".greater_less_equal",
                                        expected:
                                            '(number & Type<"int32"> & ExclusiveMinimum<3> & Maximum<7>)',
                                        value: input.greater_less_equal,
                                    }),
                                ("number" ===
                                    typeof input.greater_equal_less_equal &&
                                    ((Math.floor(
                                        input.greater_equal_less_equal,
                                    ) === input.greater_equal_less_equal &&
                                        -2147483648 <=
                                            input.greater_equal_less_equal &&
                                        input.greater_equal_less_equal <=
                                            2147483647) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path +
                                                ".greater_equal_less_equal",
                                            expected: 'number & Type<"int32">',
                                            value: input.greater_equal_less_equal,
                                        })) &&
                                    (3 <= input.greater_equal_less_equal ||
                                        $report(_exceptionable, {
                                            path:
                                                _path +
                                                ".greater_equal_less_equal",
                                            expected: "number & Minimum<3>",
                                            value: input.greater_equal_less_equal,
                                        })) &&
                                    (input.greater_equal_less_equal <= 7 ||
                                        $report(_exceptionable, {
                                            path:
                                                _path +
                                                ".greater_equal_less_equal",
                                            expected: "number & Maximum<7>",
                                            value: input.greater_equal_less_equal,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path:
                                            _path + ".greater_equal_less_equal",
                                        expected:
                                            '(number & Type<"int32"> & Minimum<3> & Maximum<7>)',
                                        value: input.greater_equal_less_equal,
                                    }),
                                ("number" === typeof input.equal &&
                                    ((Math.floor(input.equal) === input.equal &&
                                        -2147483648 <= input.equal &&
                                        input.equal <= 2147483647) ||
                                        $report(_exceptionable, {
                                            path: _path + ".equal",
                                            expected: 'number & Type<"int32">',
                                            value: input.equal,
                                        })) &&
                                    (10 <= input.equal ||
                                        $report(_exceptionable, {
                                            path: _path + ".equal",
                                            expected: "number & Minimum<10>",
                                            value: input.equal,
                                        })) &&
                                    (input.equal <= 10 ||
                                        $report(_exceptionable, {
                                            path: _path + ".equal",
                                            expected: "number & Maximum<10>",
                                            value: input.equal,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".equal",
                                        expected:
                                            '(number & Type<"int32"> & Minimum<10> & Maximum<10>)',
                                        value: input.equal,
                                    }),
                            ].every((flag: boolean) => flag);
                        return (
                            ((("object" === typeof input && null !== input) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "TypeTagRange",
                                    value: input,
                                })) &&
                                $vo0(input, _path + "", true)) ||
                            $report(true, {
                                path: _path + "",
                                expected: "TypeTagRange",
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
            const general = (
                input: TypeTagRange,
            ): typia.SnakeCase<TypeTagRange> => {
                const $io1 = (input: any): boolean =>
                    "number" === typeof input.greater &&
                    Math.floor(input.greater) === input.greater &&
                    -2147483648 <= input.greater &&
                    input.greater <= 2147483647 &&
                    3 < input.greater &&
                    "number" === typeof input.greater_equal &&
                    Math.floor(input.greater_equal) === input.greater_equal &&
                    -2147483648 <= input.greater_equal &&
                    input.greater_equal <= 2147483647 &&
                    3 <= input.greater_equal &&
                    "number" === typeof input.less &&
                    Math.floor(input.less) === input.less &&
                    -2147483648 <= input.less &&
                    input.less <= 2147483647 &&
                    input.less < 7 &&
                    "number" === typeof input.less_equal &&
                    Math.floor(input.less_equal) === input.less_equal &&
                    -2147483648 <= input.less_equal &&
                    input.less_equal <= 2147483647 &&
                    input.less_equal <= 7 &&
                    "number" === typeof input.greater_less &&
                    Math.floor(input.greater_less) === input.greater_less &&
                    -2147483648 <= input.greater_less &&
                    input.greater_less <= 2147483647 &&
                    3 < input.greater_less &&
                    input.greater_less < 7 &&
                    "number" === typeof input.greater_equal_less &&
                    Math.floor(input.greater_equal_less) ===
                        input.greater_equal_less &&
                    -2147483648 <= input.greater_equal_less &&
                    input.greater_equal_less <= 2147483647 &&
                    3 <= input.greater_equal_less &&
                    input.greater_equal_less < 7 &&
                    "number" === typeof input.greater_less_equal &&
                    Math.floor(input.greater_less_equal) ===
                        input.greater_less_equal &&
                    -2147483648 <= input.greater_less_equal &&
                    input.greater_less_equal <= 2147483647 &&
                    3 < input.greater_less_equal &&
                    input.greater_less_equal <= 7 &&
                    "number" === typeof input.greater_equal_less_equal &&
                    Math.floor(input.greater_equal_less_equal) ===
                        input.greater_equal_less_equal &&
                    -2147483648 <= input.greater_equal_less_equal &&
                    input.greater_equal_less_equal <= 2147483647 &&
                    3 <= input.greater_equal_less_equal &&
                    input.greater_equal_less_equal <= 7 &&
                    "number" === typeof input.equal &&
                    Math.floor(input.equal) === input.equal &&
                    -2147483648 <= input.equal &&
                    input.equal <= 2147483647 &&
                    10 <= input.equal &&
                    input.equal <= 10;
                const $cp0 = (input: any) =>
                    input.map((elem: any) =>
                        "object" === typeof elem && null !== elem
                            ? $co1(elem)
                            : (elem as any),
                    );
                const $co0 = (input: any): any => ({
                    value: Array.isArray(input.value)
                        ? $cp0(input.value)
                        : (input.value as any),
                });
                const $co1 = (input: any): any => ({
                    greater: input.greater as any,
                    greater_equal: input.greater_equal as any,
                    less: input.less as any,
                    less_equal: input.less_equal as any,
                    greater_less: input.greater_less as any,
                    greater_equal_less: input.greater_equal_less as any,
                    greater_less_equal: input.greater_less_equal as any,
                    greater_equal_less_equal:
                        input.greater_equal_less_equal as any,
                    equal: input.equal as any,
                });
                return "object" === typeof input && null !== input
                    ? $co0(input)
                    : (input as any);
            };
            const output = validate(input) as any;
            if (output.success) output.data = general(input);
            return output;
        },
        assert: (input: any): typia.SnakeCase<TypeTagRange> => {
            const __is = (
                input: any,
            ): input is typia.SnakeCase<TypeTagRange> => {
                const $io0 = (input: any): boolean =>
                    Array.isArray(input.value) &&
                    input.value.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io1(elem),
                    );
                const $io1 = (input: any): boolean =>
                    "number" === typeof input.greater &&
                    Math.floor(input.greater) === input.greater &&
                    -2147483648 <= input.greater &&
                    input.greater <= 2147483647 &&
                    3 < input.greater &&
                    "number" === typeof input.greater_equal &&
                    Math.floor(input.greater_equal) === input.greater_equal &&
                    -2147483648 <= input.greater_equal &&
                    input.greater_equal <= 2147483647 &&
                    3 <= input.greater_equal &&
                    "number" === typeof input.less &&
                    Math.floor(input.less) === input.less &&
                    -2147483648 <= input.less &&
                    input.less <= 2147483647 &&
                    input.less < 7 &&
                    "number" === typeof input.less_equal &&
                    Math.floor(input.less_equal) === input.less_equal &&
                    -2147483648 <= input.less_equal &&
                    input.less_equal <= 2147483647 &&
                    input.less_equal <= 7 &&
                    "number" === typeof input.greater_less &&
                    Math.floor(input.greater_less) === input.greater_less &&
                    -2147483648 <= input.greater_less &&
                    input.greater_less <= 2147483647 &&
                    3 < input.greater_less &&
                    input.greater_less < 7 &&
                    "number" === typeof input.greater_equal_less &&
                    Math.floor(input.greater_equal_less) ===
                        input.greater_equal_less &&
                    -2147483648 <= input.greater_equal_less &&
                    input.greater_equal_less <= 2147483647 &&
                    3 <= input.greater_equal_less &&
                    input.greater_equal_less < 7 &&
                    "number" === typeof input.greater_less_equal &&
                    Math.floor(input.greater_less_equal) ===
                        input.greater_less_equal &&
                    -2147483648 <= input.greater_less_equal &&
                    input.greater_less_equal <= 2147483647 &&
                    3 < input.greater_less_equal &&
                    input.greater_less_equal <= 7 &&
                    "number" === typeof input.greater_equal_less_equal &&
                    Math.floor(input.greater_equal_less_equal) ===
                        input.greater_equal_less_equal &&
                    -2147483648 <= input.greater_equal_less_equal &&
                    input.greater_equal_less_equal <= 2147483647 &&
                    3 <= input.greater_equal_less_equal &&
                    input.greater_equal_less_equal <= 7 &&
                    "number" === typeof input.equal &&
                    Math.floor(input.equal) === input.equal &&
                    -2147483648 <= input.equal &&
                    input.equal <= 2147483647 &&
                    10 <= input.equal &&
                    input.equal <= 10;
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is typia.SnakeCase<TypeTagRange> => {
                    const $guard = (typia.createAssert as any).guard;
                    const $ao0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ((Array.isArray(input.value) ||
                            $guard(_exceptionable, {
                                path: _path + ".value",
                                expected: "Array<TypeTagRange.Type>",
                                value: input.value,
                            })) &&
                            input.value.every(
                                (elem: any, _index1: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".value[" +
                                                _index1 +
                                                "]",
                                            expected: "TypeTagRange.Type",
                                            value: elem,
                                        })) &&
                                        $ao1(
                                            elem,
                                            _path + ".value[" + _index1 + "]",
                                            true && _exceptionable,
                                        )) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".value[" + _index1 + "]",
                                        expected: "TypeTagRange.Type",
                                        value: elem,
                                    }),
                            )) ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected: "Array<TypeTagRange.Type>",
                            value: input.value,
                        });
                    const $ao1 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (("number" === typeof input.greater &&
                            ((Math.floor(input.greater) === input.greater &&
                                -2147483648 <= input.greater &&
                                input.greater <= 2147483647) ||
                                $guard(_exceptionable, {
                                    path: _path + ".greater",
                                    expected: 'number & Type<"int32">',
                                    value: input.greater,
                                })) &&
                            (3 < input.greater ||
                                $guard(_exceptionable, {
                                    path: _path + ".greater",
                                    expected: "number & ExclusiveMinimum<3>",
                                    value: input.greater,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".greater",
                                expected:
                                    '(number & Type<"int32"> & ExclusiveMinimum<3>)',
                                value: input.greater,
                            })) &&
                        (("number" === typeof input.greater_equal &&
                            ((Math.floor(input.greater_equal) ===
                                input.greater_equal &&
                                -2147483648 <= input.greater_equal &&
                                input.greater_equal <= 2147483647) ||
                                $guard(_exceptionable, {
                                    path: _path + ".greater_equal",
                                    expected: 'number & Type<"int32">',
                                    value: input.greater_equal,
                                })) &&
                            (3 <= input.greater_equal ||
                                $guard(_exceptionable, {
                                    path: _path + ".greater_equal",
                                    expected: "number & Minimum<3>",
                                    value: input.greater_equal,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".greater_equal",
                                expected:
                                    '(number & Type<"int32"> & Minimum<3>)',
                                value: input.greater_equal,
                            })) &&
                        (("number" === typeof input.less &&
                            ((Math.floor(input.less) === input.less &&
                                -2147483648 <= input.less &&
                                input.less <= 2147483647) ||
                                $guard(_exceptionable, {
                                    path: _path + ".less",
                                    expected: 'number & Type<"int32">',
                                    value: input.less,
                                })) &&
                            (input.less < 7 ||
                                $guard(_exceptionable, {
                                    path: _path + ".less",
                                    expected: "number & ExclusiveMaximum<7>",
                                    value: input.less,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".less",
                                expected:
                                    '(number & Type<"int32"> & ExclusiveMaximum<7>)',
                                value: input.less,
                            })) &&
                        (("number" === typeof input.less_equal &&
                            ((Math.floor(input.less_equal) ===
                                input.less_equal &&
                                -2147483648 <= input.less_equal &&
                                input.less_equal <= 2147483647) ||
                                $guard(_exceptionable, {
                                    path: _path + ".less_equal",
                                    expected: 'number & Type<"int32">',
                                    value: input.less_equal,
                                })) &&
                            (input.less_equal <= 7 ||
                                $guard(_exceptionable, {
                                    path: _path + ".less_equal",
                                    expected: "number & Maximum<7>",
                                    value: input.less_equal,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".less_equal",
                                expected:
                                    '(number & Type<"int32"> & Maximum<7>)',
                                value: input.less_equal,
                            })) &&
                        (("number" === typeof input.greater_less &&
                            ((Math.floor(input.greater_less) ===
                                input.greater_less &&
                                -2147483648 <= input.greater_less &&
                                input.greater_less <= 2147483647) ||
                                $guard(_exceptionable, {
                                    path: _path + ".greater_less",
                                    expected: 'number & Type<"int32">',
                                    value: input.greater_less,
                                })) &&
                            (3 < input.greater_less ||
                                $guard(_exceptionable, {
                                    path: _path + ".greater_less",
                                    expected: "number & ExclusiveMinimum<3>",
                                    value: input.greater_less,
                                })) &&
                            (input.greater_less < 7 ||
                                $guard(_exceptionable, {
                                    path: _path + ".greater_less",
                                    expected: "number & ExclusiveMaximum<7>",
                                    value: input.greater_less,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".greater_less",
                                expected:
                                    '(number & Type<"int32"> & ExclusiveMinimum<3> & ExclusiveMaximum<7>)',
                                value: input.greater_less,
                            })) &&
                        (("number" === typeof input.greater_equal_less &&
                            ((Math.floor(input.greater_equal_less) ===
                                input.greater_equal_less &&
                                -2147483648 <= input.greater_equal_less &&
                                input.greater_equal_less <= 2147483647) ||
                                $guard(_exceptionable, {
                                    path: _path + ".greater_equal_less",
                                    expected: 'number & Type<"int32">',
                                    value: input.greater_equal_less,
                                })) &&
                            (3 <= input.greater_equal_less ||
                                $guard(_exceptionable, {
                                    path: _path + ".greater_equal_less",
                                    expected: "number & Minimum<3>",
                                    value: input.greater_equal_less,
                                })) &&
                            (input.greater_equal_less < 7 ||
                                $guard(_exceptionable, {
                                    path: _path + ".greater_equal_less",
                                    expected: "number & ExclusiveMaximum<7>",
                                    value: input.greater_equal_less,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".greater_equal_less",
                                expected:
                                    '(number & Type<"int32"> & Minimum<3> & ExclusiveMaximum<7>)',
                                value: input.greater_equal_less,
                            })) &&
                        (("number" === typeof input.greater_less_equal &&
                            ((Math.floor(input.greater_less_equal) ===
                                input.greater_less_equal &&
                                -2147483648 <= input.greater_less_equal &&
                                input.greater_less_equal <= 2147483647) ||
                                $guard(_exceptionable, {
                                    path: _path + ".greater_less_equal",
                                    expected: 'number & Type<"int32">',
                                    value: input.greater_less_equal,
                                })) &&
                            (3 < input.greater_less_equal ||
                                $guard(_exceptionable, {
                                    path: _path + ".greater_less_equal",
                                    expected: "number & ExclusiveMinimum<3>",
                                    value: input.greater_less_equal,
                                })) &&
                            (input.greater_less_equal <= 7 ||
                                $guard(_exceptionable, {
                                    path: _path + ".greater_less_equal",
                                    expected: "number & Maximum<7>",
                                    value: input.greater_less_equal,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".greater_less_equal",
                                expected:
                                    '(number & Type<"int32"> & ExclusiveMinimum<3> & Maximum<7>)',
                                value: input.greater_less_equal,
                            })) &&
                        (("number" === typeof input.greater_equal_less_equal &&
                            ((Math.floor(input.greater_equal_less_equal) ===
                                input.greater_equal_less_equal &&
                                -2147483648 <= input.greater_equal_less_equal &&
                                input.greater_equal_less_equal <= 2147483647) ||
                                $guard(_exceptionable, {
                                    path: _path + ".greater_equal_less_equal",
                                    expected: 'number & Type<"int32">',
                                    value: input.greater_equal_less_equal,
                                })) &&
                            (3 <= input.greater_equal_less_equal ||
                                $guard(_exceptionable, {
                                    path: _path + ".greater_equal_less_equal",
                                    expected: "number & Minimum<3>",
                                    value: input.greater_equal_less_equal,
                                })) &&
                            (input.greater_equal_less_equal <= 7 ||
                                $guard(_exceptionable, {
                                    path: _path + ".greater_equal_less_equal",
                                    expected: "number & Maximum<7>",
                                    value: input.greater_equal_less_equal,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".greater_equal_less_equal",
                                expected:
                                    '(number & Type<"int32"> & Minimum<3> & Maximum<7>)',
                                value: input.greater_equal_less_equal,
                            })) &&
                        (("number" === typeof input.equal &&
                            ((Math.floor(input.equal) === input.equal &&
                                -2147483648 <= input.equal &&
                                input.equal <= 2147483647) ||
                                $guard(_exceptionable, {
                                    path: _path + ".equal",
                                    expected: 'number & Type<"int32">',
                                    value: input.equal,
                                })) &&
                            (10 <= input.equal ||
                                $guard(_exceptionable, {
                                    path: _path + ".equal",
                                    expected: "number & Minimum<10>",
                                    value: input.equal,
                                })) &&
                            (input.equal <= 10 ||
                                $guard(_exceptionable, {
                                    path: _path + ".equal",
                                    expected: "number & Maximum<10>",
                                    value: input.equal,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".equal",
                                expected:
                                    '(number & Type<"int32"> & Minimum<10> & Maximum<10>)',
                                value: input.equal,
                            }));
                    return (
                        ((("object" === typeof input && null !== input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "TypeTagRange",
                                value: input,
                            })) &&
                            $ao0(input, _path + "", true)) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "TypeTagRange",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            return input;
        },
    });
