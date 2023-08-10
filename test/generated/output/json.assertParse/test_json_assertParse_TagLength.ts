import typia from "../../../../src";
import { _test_json_assertParse } from "../../../internal/_test_json_assertParse";
import { TagLength } from "../../../structures/TagLength";

export const test_json_assertParse_TagLength =
    _test_json_assertParse<TagLength>(TagLength)((input) =>
        ((input: string): typia.Primitive<TagLength> => {
            const assert = (input: any): TagLength => {
                const __is = (input: any): input is TagLength => {
                    const $io0 = (input: any): boolean =>
                        Array.isArray(input.value) &&
                        input.value.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io1(elem),
                        );
                    const $io1 = (input: any): boolean =>
                        "string" === typeof input.fixed &&
                        5 === input.fixed.length &&
                        "string" === typeof input.minimum &&
                        3 <= input.minimum.length &&
                        "string" === typeof input.maximum &&
                        7 >= input.maximum.length &&
                        "string" === typeof input.minimum_and_maximum &&
                        3 <= input.minimum_and_maximum.length &&
                        7 >= input.minimum_and_maximum.length;
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        $io0(input)
                    );
                };
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is TagLength => {
                        const $guard = (typia.json.assertParse as any).guard;
                        const $ao0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            ((Array.isArray(input.value) ||
                                $guard(_exceptionable, {
                                    path: _path + ".value",
                                    expected: "Array<TagLength.Type>",
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
                                                expected: "TagLength.Type",
                                                value: elem,
                                            })) &&
                                            $ao1(
                                                elem,
                                                _path +
                                                    ".value[" +
                                                    _index1 +
                                                    "]",
                                                true && _exceptionable,
                                            )) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".value[" +
                                                _index1 +
                                                "]",
                                            expected: "TagLength.Type",
                                            value: elem,
                                        }),
                                )) ||
                            $guard(_exceptionable, {
                                path: _path + ".value",
                                expected: "Array<TagLength.Type>",
                                value: input.value,
                            });
                        const $ao1 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            (("string" === typeof input.fixed &&
                                (5 === input.fixed.length ||
                                    $guard(_exceptionable, {
                                        path: _path + ".fixed",
                                        expected: "string (@length 5)",
                                        value: input.fixed,
                                    }))) ||
                                $guard(_exceptionable, {
                                    path: _path + ".fixed",
                                    expected: "string",
                                    value: input.fixed,
                                })) &&
                            (("string" === typeof input.minimum &&
                                (3 <= input.minimum.length ||
                                    $guard(_exceptionable, {
                                        path: _path + ".minimum",
                                        expected: "string (@minLength 3)",
                                        value: input.minimum,
                                    }))) ||
                                $guard(_exceptionable, {
                                    path: _path + ".minimum",
                                    expected: "string",
                                    value: input.minimum,
                                })) &&
                            (("string" === typeof input.maximum &&
                                (7 >= input.maximum.length ||
                                    $guard(_exceptionable, {
                                        path: _path + ".maximum",
                                        expected: "string (@maxLength 7)",
                                        value: input.maximum,
                                    }))) ||
                                $guard(_exceptionable, {
                                    path: _path + ".maximum",
                                    expected: "string",
                                    value: input.maximum,
                                })) &&
                            (("string" === typeof input.minimum_and_maximum &&
                                (3 <= input.minimum_and_maximum.length ||
                                    $guard(_exceptionable, {
                                        path: _path + ".minimum_and_maximum",
                                        expected: "string (@minLength 3)",
                                        value: input.minimum_and_maximum,
                                    })) &&
                                (7 >= input.minimum_and_maximum.length ||
                                    $guard(_exceptionable, {
                                        path: _path + ".minimum_and_maximum",
                                        expected: "string (@maxLength 7)",
                                        value: input.minimum_and_maximum,
                                    }))) ||
                                $guard(_exceptionable, {
                                    path: _path + ".minimum_and_maximum",
                                    expected: "string",
                                    value: input.minimum_and_maximum,
                                }));
                        return (
                            ((("object" === typeof input && null !== input) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "TagLength",
                                    value: input,
                                })) &&
                                $ao0(input, _path + "", true)) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "TagLength",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                return input;
            };
            input = JSON.parse(input);
            return assert(input) as any;
        })(input),
    );
