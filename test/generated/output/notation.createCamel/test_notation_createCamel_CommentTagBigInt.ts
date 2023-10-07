import typia from "../../../../src";
import { _test_notation_validateGeneral } from "../../../internal/_test_notation_validateGeneral";
import { CommentTagBigInt } from "../../../structures/CommentTagBigInt";

export const test_notation_createValidateCamel_CommentTagBigInt =
    _test_notation_validateGeneral("CommentTagBigInt")<CommentTagBigInt>(
        CommentTagBigInt,
    )<typia.CamelCase<CommentTagBigInt>>({
        convert: (
            input: any,
        ): typia.IValidation<typia.CamelCase<CommentTagBigInt>> => {
            const validate = (
                input: any,
            ): typia.IValidation<CommentTagBigInt> => {
                const errors = [] as any[];
                const __is = (input: any): input is CommentTagBigInt => {
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        "bigint" === typeof (input as any).value &&
                        "bigint" === typeof (input as any).ranged &&
                        0 <= (input as any).ranged &&
                        (input as any).ranged <= 100 &&
                        "bigint" === typeof (input as any).minimum &&
                        0 <= (input as any).minimum &&
                        "bigint" === typeof (input as any).maximum &&
                        (input as any).maximum <= 100 &&
                        "bigint" === typeof (input as any).multipleOf &&
                        (input as any).multipleOf % 3n === 0n
                    );
                };
                if (false === __is(input)) {
                    const $report = (
                        typia.notations.createValidateCamel as any
                    ).report(errors);
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is CommentTagBigInt => {
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
                                    (0 <= input.ranged ||
                                        $report(_exceptionable, {
                                            path: _path + ".ranged",
                                            expected: "bigint & Minimum<0n>",
                                            value: input.ranged,
                                        })) &&
                                    (input.ranged <= 100 ||
                                        $report(_exceptionable, {
                                            path: _path + ".ranged",
                                            expected: "bigint & Maximum<100n>",
                                            value: input.ranged,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".ranged",
                                        expected:
                                            "(bigint & Minimum<0n> & Maximum<100n>)",
                                        value: input.ranged,
                                    }),
                                ("bigint" === typeof input.minimum &&
                                    (0 <= input.minimum ||
                                        $report(_exceptionable, {
                                            path: _path + ".minimum",
                                            expected: "bigint & Minimum<0n>",
                                            value: input.minimum,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".minimum",
                                        expected: "(bigint & Minimum<0n>)",
                                        value: input.minimum,
                                    }),
                                ("bigint" === typeof input.maximum &&
                                    (input.maximum <= 100 ||
                                        $report(_exceptionable, {
                                            path: _path + ".maximum",
                                            expected: "bigint & Maximum<100n>",
                                            value: input.maximum,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".maximum",
                                        expected: "(bigint & Maximum<100n>)",
                                        value: input.maximum,
                                    }),
                                ("bigint" === typeof input.multipleOf &&
                                    (input.multipleOf % 3n === 0n ||
                                        $report(_exceptionable, {
                                            path: _path + ".multipleOf",
                                            expected: "bigint & MultipleOf<3n>",
                                            value: input.multipleOf,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".multipleOf",
                                        expected: "(bigint & MultipleOf<3n>)",
                                        value: input.multipleOf,
                                    }),
                            ].every((flag: boolean) => flag);
                        return (
                            ((("object" === typeof input && null !== input) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "CommentTagBigInt",
                                    value: input,
                                })) &&
                                $vo0(input, _path + "", true)) ||
                            $report(true, {
                                path: _path + "",
                                expected: "CommentTagBigInt",
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
                input: CommentTagBigInt,
            ): typia.CamelCase<CommentTagBigInt> => {
                const $co0 = (input: any): any => ({
                    value: input.value as any,
                    ranged: input.ranged as any,
                    minimum: input.minimum as any,
                    maximum: input.maximum as any,
                    multipleOf: input.multipleOf as any,
                });
                return "object" === typeof input && null !== input
                    ? $co0(input)
                    : (input as any);
            };
            const output = validate(input) as any;
            if (output.success) output.data = general(input);
            return output;
        },
        assert: (input: any): typia.CamelCase<CommentTagBigInt> => {
            const __is = (
                input: any,
            ): input is typia.CamelCase<CommentTagBigInt> => {
                return (
                    "object" === typeof input &&
                    null !== input &&
                    "bigint" === typeof (input as any).value &&
                    "bigint" === typeof (input as any).ranged &&
                    0 <= (input as any).ranged &&
                    (input as any).ranged <= 100 &&
                    "bigint" === typeof (input as any).minimum &&
                    0 <= (input as any).minimum &&
                    "bigint" === typeof (input as any).maximum &&
                    (input as any).maximum <= 100 &&
                    "bigint" === typeof (input as any).multipleOf &&
                    (input as any).multipleOf % 3n === 0n
                );
            };
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is typia.CamelCase<CommentTagBigInt> => {
                    const $guard = (typia.createAssert as any).guard;
                    const $ao0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ("bigint" === typeof input.value ||
                            $guard(_exceptionable, {
                                path: _path + ".value",
                                expected: "bigint",
                                value: input.value,
                            })) &&
                        (("bigint" === typeof input.ranged &&
                            (0 <= input.ranged ||
                                $guard(_exceptionable, {
                                    path: _path + ".ranged",
                                    expected: "bigint & Minimum<0n>",
                                    value: input.ranged,
                                })) &&
                            (input.ranged <= 100 ||
                                $guard(_exceptionable, {
                                    path: _path + ".ranged",
                                    expected: "bigint & Maximum<100n>",
                                    value: input.ranged,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".ranged",
                                expected:
                                    "(bigint & Minimum<0n> & Maximum<100n>)",
                                value: input.ranged,
                            })) &&
                        (("bigint" === typeof input.minimum &&
                            (0 <= input.minimum ||
                                $guard(_exceptionable, {
                                    path: _path + ".minimum",
                                    expected: "bigint & Minimum<0n>",
                                    value: input.minimum,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".minimum",
                                expected: "(bigint & Minimum<0n>)",
                                value: input.minimum,
                            })) &&
                        (("bigint" === typeof input.maximum &&
                            (input.maximum <= 100 ||
                                $guard(_exceptionable, {
                                    path: _path + ".maximum",
                                    expected: "bigint & Maximum<100n>",
                                    value: input.maximum,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".maximum",
                                expected: "(bigint & Maximum<100n>)",
                                value: input.maximum,
                            })) &&
                        (("bigint" === typeof input.multipleOf &&
                            (input.multipleOf % 3n === 0n ||
                                $guard(_exceptionable, {
                                    path: _path + ".multipleOf",
                                    expected: "bigint & MultipleOf<3n>",
                                    value: input.multipleOf,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".multipleOf",
                                expected: "(bigint & MultipleOf<3n>)",
                                value: input.multipleOf,
                            }));
                    return (
                        ((("object" === typeof input && null !== input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "CommentTagBigInt",
                                value: input,
                            })) &&
                            $ao0(input, _path + "", true)) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "CommentTagBigInt",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            return input;
        },
    });
