import typia from "../../../../src";
import { _test_validate } from "../../../internal/_test_validate";
import { TagTuple } from "../../../structures/TagTuple";

export const test_createValidate_TagTuple = _test_validate(
    "TagTuple",
    TagTuple.generate,
    (input: any): typia.IValidation<TagTuple> => {
        const __is = (input: any): input is TagTuple => {
            const $io0 = (input: any): boolean =>
                Array.isArray(input.tuple) &&
                input.tuple.length === 4 &&
                "string" === typeof input.tuple[0] &&
                3 <= input.tuple[0].length &&
                7 >= input.tuple[0].length &&
                "number" === typeof input.tuple[1] &&
                3 <= input.tuple[1] &&
                7 >= input.tuple[1] &&
                Array.isArray(input.tuple[2]) &&
                3 <= input.tuple[2].length &&
                7 >= input.tuple[2].length &&
                input.tuple[2].every(
                    (elem: any) =>
                        "string" === typeof elem &&
                        3 <= elem.length &&
                        7 >= elem.length,
                ) &&
                Array.isArray(input.tuple[3]) &&
                3 <= input.tuple[3].length &&
                7 >= input.tuple[3].length &&
                input.tuple[3].every(
                    (elem: any) =>
                        "number" === typeof elem && 3 <= elem && 7 >= elem,
                );
            return "object" === typeof input && null !== input && $io0(input);
        };
        const errors = [] as any[];
        const $report = (typia.createValidate as any).report(errors);
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is TagTuple => {
                const $vo0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        ((Array.isArray(input.tuple) ||
                            $report(_exceptionable, {
                                path: _path + ".tuple",
                                expected:
                                    "[string, number, Array<string>, Array<number>]",
                                value: input.tuple,
                            })) &&
                            (input.tuple.length === 4 ||
                                $report(_exceptionable, {
                                    path: _path + ".tuple",
                                    expected:
                                        "[string, number, Array<string>, Array<number>]",
                                    value: input.tuple,
                                })) &&
                            [
                                ("string" === typeof input.tuple[0] &&
                                    (3 <= input.tuple[0].length ||
                                        $report(_exceptionable, {
                                            path: _path + ".tuple[0]",
                                            expected: "string (@minLength 3)",
                                            value: input.tuple[0],
                                        })) &&
                                    (7 >= input.tuple[0].length ||
                                        $report(_exceptionable, {
                                            path: _path + ".tuple[0]",
                                            expected: "string (@maxLength 7)",
                                            value: input.tuple[0],
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".tuple[0]",
                                        expected: "string",
                                        value: input.tuple[0],
                                    }),
                                ("number" === typeof input.tuple[1] &&
                                    (3 <= input.tuple[1] ||
                                        $report(_exceptionable, {
                                            path: _path + ".tuple[1]",
                                            expected: "number (@minimum 3)",
                                            value: input.tuple[1],
                                        })) &&
                                    (7 >= input.tuple[1] ||
                                        $report(_exceptionable, {
                                            path: _path + ".tuple[1]",
                                            expected: "number (@maximum 7)",
                                            value: input.tuple[1],
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".tuple[1]",
                                        expected: "number",
                                        value: input.tuple[1],
                                    }),
                                (((Array.isArray(input.tuple[2]) &&
                                    (3 <= input.tuple[2].length ||
                                        $report(_exceptionable, {
                                            path: _path + ".tuple[2]",
                                            expected:
                                                "Array.length (@minItems 3)",
                                            value: input.tuple[2],
                                        })) &&
                                    (7 >= input.tuple[2].length ||
                                        $report(_exceptionable, {
                                            path: _path + ".tuple[2]",
                                            expected:
                                                "Array.length (@maxItems 7)",
                                            value: input.tuple[2],
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".tuple[2]",
                                        expected: "Array<string>",
                                        value: input.tuple[2],
                                    })) &&
                                    input.tuple[2]
                                        .map(
                                            (elem: any, _index1: number) =>
                                                ("string" === typeof elem &&
                                                    (3 <= elem.length ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    ".tuple[2][" +
                                                                    _index1 +
                                                                    "]",
                                                                expected:
                                                                    "string (@minLength 3)",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                    (7 >= elem.length ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    ".tuple[2][" +
                                                                    _index1 +
                                                                    "]",
                                                                expected:
                                                                    "string (@maxLength 7)",
                                                                value: elem,
                                                            },
                                                        ))) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".tuple[2][" +
                                                        _index1 +
                                                        "]",
                                                    expected: "string",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".tuple[2]",
                                        expected: "Array<string>",
                                        value: input.tuple[2],
                                    }),
                                (((Array.isArray(input.tuple[3]) &&
                                    (3 <= input.tuple[3].length ||
                                        $report(_exceptionable, {
                                            path: _path + ".tuple[3]",
                                            expected:
                                                "Array.length (@minItems 3)",
                                            value: input.tuple[3],
                                        })) &&
                                    (7 >= input.tuple[3].length ||
                                        $report(_exceptionable, {
                                            path: _path + ".tuple[3]",
                                            expected:
                                                "Array.length (@maxItems 7)",
                                            value: input.tuple[3],
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".tuple[3]",
                                        expected: "Array<number>",
                                        value: input.tuple[3],
                                    })) &&
                                    input.tuple[3]
                                        .map(
                                            (elem: any, _index2: number) =>
                                                ("number" === typeof elem &&
                                                    (3 <= elem ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    ".tuple[3][" +
                                                                    _index2 +
                                                                    "]",
                                                                expected:
                                                                    "number (@minimum 3)",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                    (7 >= elem ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    ".tuple[3][" +
                                                                    _index2 +
                                                                    "]",
                                                                expected:
                                                                    "number (@maximum 7)",
                                                                value: elem,
                                                            },
                                                        ))) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".tuple[3][" +
                                                        _index2 +
                                                        "]",
                                                    expected: "number",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".tuple[3]",
                                        expected: "Array<number>",
                                        value: input.tuple[3],
                                    }),
                            ].every((flag: boolean) => flag)) ||
                            $report(_exceptionable, {
                                path: _path + ".tuple",
                                expected:
                                    "[string, number, Array<string>, Array<number>]",
                                value: input.tuple,
                            }),
                    ].every((flag: boolean) => flag);
                return (
                    ((("object" === typeof input && null !== input) ||
                        $report(true, {
                            path: _path + "",
                            expected: "TagTuple",
                            value: input,
                        })) &&
                        $vo0(input, _path + "", true)) ||
                    $report(true, {
                        path: _path + "",
                        expected: "TagTuple",
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
    TagTuple.SPOILERS,
);
