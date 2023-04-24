import typia from "../../../../src";
import { _test_assertParse } from "../../../internal/_test_assertParse";
import { TagTuple } from "../../../structures/TagTuple";

export const test_createAssertParse_TagTuple = _test_assertParse(
    "TagTuple",
    TagTuple.generate,
    (input: string): typia.Primitive<TagTuple> => {
        const assert = (input: any): TagTuple => {
            const $guard = (typia.createAssertParse as any).guard;
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
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is TagTuple => {
                    const $ao0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (Array.isArray(input.tuple) ||
                            $guard(_exceptionable, {
                                path: _path + ".tuple",
                                expected:
                                    "[string, number, Array<string>, Array<number>]",
                                value: input.tuple,
                            })) &&
                        (input.tuple.length === 4 ||
                            $guard(_exceptionable, {
                                path: _path + ".tuple",
                                expected:
                                    "[string, number, Array<string>, Array<number>]",
                                value: input.tuple,
                            })) &&
                        (("string" === typeof input.tuple[0] &&
                            (3 <= input.tuple[0].length ||
                                $guard(_exceptionable, {
                                    path: _path + ".tuple[0]",
                                    expected: "string (@minLength 3)",
                                    value: input.tuple[0],
                                })) &&
                            (7 >= input.tuple[0].length ||
                                $guard(_exceptionable, {
                                    path: _path + ".tuple[0]",
                                    expected: "string (@maxLength 7)",
                                    value: input.tuple[0],
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".tuple[0]",
                                expected: "string",
                                value: input.tuple[0],
                            })) &&
                        (("number" === typeof input.tuple[1] &&
                            (3 <= input.tuple[1] ||
                                $guard(_exceptionable, {
                                    path: _path + ".tuple[1]",
                                    expected: "number (@minimum 3)",
                                    value: input.tuple[1],
                                })) &&
                            (7 >= input.tuple[1] ||
                                $guard(_exceptionable, {
                                    path: _path + ".tuple[1]",
                                    expected: "number (@maximum 7)",
                                    value: input.tuple[1],
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".tuple[1]",
                                expected: "number",
                                value: input.tuple[1],
                            })) &&
                        ((Array.isArray(input.tuple[2]) &&
                            (3 <= input.tuple[2].length ||
                                $guard(_exceptionable, {
                                    path: _path + ".tuple[2]",
                                    expected: "Array.length (@minItems 3)",
                                    value: input.tuple[2],
                                })) &&
                            (7 >= input.tuple[2].length ||
                                $guard(_exceptionable, {
                                    path: _path + ".tuple[2]",
                                    expected: "Array.length (@maxItems 7)",
                                    value: input.tuple[2],
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".tuple[2]",
                                expected: "Array<string>",
                                value: input.tuple[2],
                            })) &&
                        input.tuple[2].every(
                            (elem: any, _index1: number) =>
                                ("string" === typeof elem &&
                                    (3 <= elem.length ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".tuple[2][" +
                                                _index1 +
                                                "]",
                                            expected: "string (@minLength 3)",
                                            value: elem,
                                        })) &&
                                    (7 >= elem.length ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".tuple[2][" +
                                                _index1 +
                                                "]",
                                            expected: "string (@maxLength 7)",
                                            value: elem,
                                        }))) ||
                                $guard(_exceptionable, {
                                    path: _path + ".tuple[2][" + _index1 + "]",
                                    expected: "string",
                                    value: elem,
                                }),
                        ) &&
                        ((Array.isArray(input.tuple[3]) &&
                            (3 <= input.tuple[3].length ||
                                $guard(_exceptionable, {
                                    path: _path + ".tuple[3]",
                                    expected: "Array.length (@minItems 3)",
                                    value: input.tuple[3],
                                })) &&
                            (7 >= input.tuple[3].length ||
                                $guard(_exceptionable, {
                                    path: _path + ".tuple[3]",
                                    expected: "Array.length (@maxItems 7)",
                                    value: input.tuple[3],
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".tuple[3]",
                                expected: "Array<number>",
                                value: input.tuple[3],
                            })) &&
                        input.tuple[3].every(
                            (elem: any, _index2: number) =>
                                ("number" === typeof elem &&
                                    (3 <= elem ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".tuple[3][" +
                                                _index2 +
                                                "]",
                                            expected: "number (@minimum 3)",
                                            value: elem,
                                        })) &&
                                    (7 >= elem ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".tuple[3][" +
                                                _index2 +
                                                "]",
                                            expected: "number (@maximum 7)",
                                            value: elem,
                                        }))) ||
                                $guard(_exceptionable, {
                                    path: _path + ".tuple[3][" + _index2 + "]",
                                    expected: "number",
                                    value: elem,
                                }),
                        );
                    return (
                        (("object" === typeof input && null !== input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "Resolve<TagTuple>",
                                value: input,
                            })) &&
                        $ao0(input, _path + "", true)
                    );
                })(input, "$input", true);
            return input;
        };
        input = JSON.parse(input);
        return assert(input) as any;
    },
    TagTuple.SPOILERS,
);
