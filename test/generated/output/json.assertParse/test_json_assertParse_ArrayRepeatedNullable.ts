import typia from "../../../../src";
import { _test_json_assertParse } from "../../../internal/_test_json_assertParse";
import { ArrayRepeatedNullable } from "../../../structures/ArrayRepeatedNullable";

export const test_json_assertParse_ArrayRepeatedNullable =
    _test_json_assertParse<ArrayRepeatedNullable>(ArrayRepeatedNullable)(
        (input) =>
            ((input: string): typia.Primitive<ArrayRepeatedNullable> => {
                const assert = (input: any): ArrayRepeatedNullable => {
                    const __is = (
                        input: any,
                    ): input is ArrayRepeatedNullable => {
                        const $ia0 = (input: any): any =>
                            input.every(
                                (elem: any) =>
                                    undefined !== elem &&
                                    (null === elem ||
                                        "string" === typeof elem ||
                                        ("number" === typeof elem &&
                                            Number.isFinite(elem)) ||
                                        (Array.isArray(elem) &&
                                            ($ia0(elem) || false))),
                            );
                        return (
                            undefined !== input &&
                            (null === input ||
                                "string" === typeof input ||
                                ("number" === typeof input &&
                                    Number.isFinite(input)) ||
                                (Array.isArray(input) &&
                                    ($ia0(input) || false)))
                        );
                    };
                    if (false === __is(input))
                        ((
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): input is ArrayRepeatedNullable => {
                            const $guard = (typia.json.assertParse as any)
                                .guard;
                            const $aa0 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): any =>
                                input.every(
                                    (elem: any, _index1: number) =>
                                        (undefined !== elem ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path + "[" + _index1 + "]",
                                                expected:
                                                    "(Array<ArrayRepeatedNullable> | null | number | string)",
                                                value: elem,
                                            })) &&
                                        (null === elem ||
                                            "string" === typeof elem ||
                                            ("number" === typeof elem &&
                                                Number.isFinite(elem)) ||
                                            ((Array.isArray(elem) ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        "[" +
                                                        _index1 +
                                                        "]",
                                                    expected:
                                                        "(Array<ArrayRepeatedNullable> | null | number | string)",
                                                    value: elem,
                                                })) &&
                                                ($aa0(
                                                    elem,
                                                    _path + "[" + _index1 + "]",
                                                    true && _exceptionable,
                                                ) ||
                                                    $guard(_exceptionable, {
                                                        path:
                                                            _path +
                                                            "[" +
                                                            _index1 +
                                                            "]",
                                                        expected:
                                                            "Array<ArrayRepeatedNullable>",
                                                        value: elem,
                                                    }))) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path + "[" + _index1 + "]",
                                                expected:
                                                    "(Array<ArrayRepeatedNullable> | null | number | string)",
                                                value: elem,
                                            })),
                                );
                            return (
                                (undefined !== input ||
                                    $guard(true, {
                                        path: _path + "",
                                        expected:
                                            "(Array<ArrayRepeatedNullable> | null | number | string)",
                                        value: input,
                                    })) &&
                                (null === input ||
                                    "string" === typeof input ||
                                    ("number" === typeof input &&
                                        Number.isFinite(input)) ||
                                    ((Array.isArray(input) ||
                                        $guard(true, {
                                            path: _path + "",
                                            expected:
                                                "(Array<ArrayRepeatedNullable> | null | number | string)",
                                            value: input,
                                        })) &&
                                        ($aa0(
                                            input,
                                            _path + "",
                                            true && _exceptionable,
                                        ) ||
                                            $guard(_exceptionable, {
                                                path: _path + "",
                                                expected:
                                                    "Array<ArrayRepeatedNullable>",
                                                value: input,
                                            }))) ||
                                    $guard(true, {
                                        path: _path + "",
                                        expected:
                                            "(Array<ArrayRepeatedNullable> | null | number | string)",
                                        value: input,
                                    }))
                            );
                        })(input, "$input", true);
                    return input;
                };
                input = JSON.parse(input);
                return assert(input) as any;
            })(input),
    );
