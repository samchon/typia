import typia from "../../../../src";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { TagStep } from "../../../structures/TagStep";

export const test_assertEquals_TagStep = _test_assertEquals(
    "TagStep",
    TagStep.generate,
    (input) =>
        ((input: any): Array<TagStep.Type> => {
            const $guard = (typia.assertEquals as any).guard;
            const $join = (typia.assertEquals as any).join;
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is Array<TagStep.Type> => {
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (("number" === typeof input.exclusiveMinimum &&
                        (0 === (input.exclusiveMinimum % 5) - 3 ||
                            $guard(_exceptionable, {
                                path: _path + ".exclusiveMinimum",
                                expected: "number (@step 5)",
                                value: input.exclusiveMinimum,
                            })) &&
                        (3 < input.exclusiveMinimum ||
                            $guard(_exceptionable, {
                                path: _path + ".exclusiveMinimum",
                                expected: "number (@exclusiveMinimum 3)",
                                value: input.exclusiveMinimum,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".exclusiveMinimum",
                            expected: "number",
                            value: input.exclusiveMinimum,
                        })) &&
                    (("number" === typeof input.minimum &&
                        (0 === (input.minimum % 5) - 3 ||
                            $guard(_exceptionable, {
                                path: _path + ".minimum",
                                expected: "number (@step 5)",
                                value: input.minimum,
                            })) &&
                        (3 <= input.minimum ||
                            $guard(_exceptionable, {
                                path: _path + ".minimum",
                                expected: "number (@minimum 3)",
                                value: input.minimum,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".minimum",
                            expected: "number",
                            value: input.minimum,
                        })) &&
                    (("number" === typeof input.range &&
                        (0 === (input.range % 5) - 0 ||
                            $guard(_exceptionable, {
                                path: _path + ".range",
                                expected: "number (@step 5)",
                                value: input.range,
                            })) &&
                        (0 < input.range ||
                            $guard(_exceptionable, {
                                path: _path + ".range",
                                expected: "number (@exclusiveMinimum 0)",
                                value: input.range,
                            })) &&
                        (100 > input.range ||
                            $guard(_exceptionable, {
                                path: _path + ".range",
                                expected: "number (@exclusiveMaximum 100)",
                                value: input.range,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".range",
                            expected: "number",
                            value: input.range,
                        })) &&
                    (("number" === typeof input.multipleOf &&
                        (0 === input.multipleOf % 5 ||
                            $guard(_exceptionable, {
                                path: _path + ".multipleOf",
                                expected: "number (@multipleOf 5)",
                                value: input.multipleOf,
                            })) &&
                        (3 <= input.multipleOf ||
                            $guard(_exceptionable, {
                                path: _path + ".multipleOf",
                                expected: "number (@minimum 3)",
                                value: input.multipleOf,
                            })) &&
                        (99 >= input.multipleOf ||
                            $guard(_exceptionable, {
                                path: _path + ".multipleOf",
                                expected: "number (@maximum 99)",
                                value: input.multipleOf,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".multipleOf",
                            expected: "number",
                            value: input.multipleOf,
                        })) &&
                    (4 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input).every((key) => {
                            if (
                                [
                                    "exclusiveMinimum",
                                    "minimum",
                                    "range",
                                    "multipleOf",
                                ].some((prop) => key === prop)
                            )
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return $guard(_exceptionable, {
                                path: _path + $join(key),
                                expected: "undefined",
                                value: value,
                            });
                        }));
                return (
                    (Array.isArray(input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "Array<Resolve<TagStep.Type>>",
                            value: input,
                        })) &&
                    input.every(
                        (elem: any, _index1: number) =>
                            (("object" === typeof elem && null !== elem) ||
                                $guard(true, {
                                    path: _path + "[" + _index1 + "]",
                                    expected: "Resolve<TagStep.Type>",
                                    value: elem,
                                })) &&
                            $ao0(elem, _path + "[" + _index1 + "]", true),
                    )
                );
            })(input, "$input", true);
            return input;
        })(input),
);
