import typia from "../../../../src";
import { _test_assertPrune } from "../../../internal/_test_assertPrune";
import { TagRange } from "../../../structures/TagRange";

export const test_createAssertPrune_TagRange = _test_assertPrune(
    "TagRange",
    TagRange.generate,
    (input: any): TagRange => {
        const assert = (input: any): TagRange => {
            const __is = (input: any): input is TagRange => {
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
                    Number.isFinite(input.greater) &&
                    Math.floor(input.greater) === input.greater &&
                    3 < input.greater &&
                    "number" === typeof input.greater_equal &&
                    Number.isFinite(input.greater_equal) &&
                    Math.floor(input.greater_equal) === input.greater_equal &&
                    3 <= input.greater_equal &&
                    "number" === typeof input.less &&
                    Number.isFinite(input.less) &&
                    Math.floor(input.less) === input.less &&
                    7 > input.less &&
                    "number" === typeof input.less_equal &&
                    Number.isFinite(input.less_equal) &&
                    Math.floor(input.less_equal) === input.less_equal &&
                    7 >= input.less_equal &&
                    "number" === typeof input.greater_less &&
                    Math.floor(input.greater_less) === input.greater_less &&
                    3 < input.greater_less &&
                    7 > input.greater_less &&
                    "number" === typeof input.greater_equal_less &&
                    Math.floor(input.greater_equal_less) ===
                        input.greater_equal_less &&
                    3 <= input.greater_equal_less &&
                    7 > input.greater_equal_less &&
                    "number" === typeof input.greater_less_equal &&
                    Math.floor(input.greater_less_equal) ===
                        input.greater_less_equal &&
                    3 < input.greater_less_equal &&
                    7 >= input.greater_less_equal &&
                    "number" === typeof input.greater_equal_less_equal &&
                    Math.floor(input.greater_equal_less_equal) ===
                        input.greater_equal_less_equal &&
                    3 <= input.greater_equal_less_equal &&
                    7 >= input.greater_equal_less_equal &&
                    "number" === typeof input.equal &&
                    Math.floor(input.equal) === input.equal &&
                    10 <= input.equal &&
                    10 >= input.equal;
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is TagRange => {
                    const $guard = (typia.createAssertPrune as any).guard;
                    const $ao0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ((Array.isArray(input.value) ||
                            $guard(_exceptionable, {
                                path: _path + ".value",
                                expected: "Array<TagRange.Type>",
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
                                            expected: "TagRange.Type",
                                            value: elem,
                                        })) &&
                                        $ao1(
                                            elem,
                                            _path + ".value[" + _index1 + "]",
                                            true && _exceptionable,
                                        )) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".value[" + _index1 + "]",
                                        expected: "TagRange.Type",
                                        value: elem,
                                    }),
                            )) ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected: "Array<TagRange.Type>",
                            value: input.value,
                        });
                    const $ao1 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (("number" === typeof input.greater &&
                            Number.isFinite(input.greater) &&
                            (Math.floor(input.greater) === input.greater ||
                                $guard(_exceptionable, {
                                    path: _path + ".greater",
                                    expected: "number (@type int)",
                                    value: input.greater,
                                })) &&
                            (3 < input.greater ||
                                $guard(_exceptionable, {
                                    path: _path + ".greater",
                                    expected: "number (@exclusiveMinimum 3)",
                                    value: input.greater,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".greater",
                                expected: "number",
                                value: input.greater,
                            })) &&
                        (("number" === typeof input.greater_equal &&
                            Number.isFinite(input.greater_equal) &&
                            (Math.floor(input.greater_equal) ===
                                input.greater_equal ||
                                $guard(_exceptionable, {
                                    path: _path + ".greater_equal",
                                    expected: "number (@type int)",
                                    value: input.greater_equal,
                                })) &&
                            (3 <= input.greater_equal ||
                                $guard(_exceptionable, {
                                    path: _path + ".greater_equal",
                                    expected: "number (@minimum 3)",
                                    value: input.greater_equal,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".greater_equal",
                                expected: "number",
                                value: input.greater_equal,
                            })) &&
                        (("number" === typeof input.less &&
                            Number.isFinite(input.less) &&
                            (Math.floor(input.less) === input.less ||
                                $guard(_exceptionable, {
                                    path: _path + ".less",
                                    expected: "number (@type int)",
                                    value: input.less,
                                })) &&
                            (7 > input.less ||
                                $guard(_exceptionable, {
                                    path: _path + ".less",
                                    expected: "number (@exclusiveMaximum 7)",
                                    value: input.less,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".less",
                                expected: "number",
                                value: input.less,
                            })) &&
                        (("number" === typeof input.less_equal &&
                            Number.isFinite(input.less_equal) &&
                            (Math.floor(input.less_equal) ===
                                input.less_equal ||
                                $guard(_exceptionable, {
                                    path: _path + ".less_equal",
                                    expected: "number (@type int)",
                                    value: input.less_equal,
                                })) &&
                            (7 >= input.less_equal ||
                                $guard(_exceptionable, {
                                    path: _path + ".less_equal",
                                    expected: "number (@maximum 7)",
                                    value: input.less_equal,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".less_equal",
                                expected: "number",
                                value: input.less_equal,
                            })) &&
                        (("number" === typeof input.greater_less &&
                            (Math.floor(input.greater_less) ===
                                input.greater_less ||
                                $guard(_exceptionable, {
                                    path: _path + ".greater_less",
                                    expected: "number (@type int)",
                                    value: input.greater_less,
                                })) &&
                            (3 < input.greater_less ||
                                $guard(_exceptionable, {
                                    path: _path + ".greater_less",
                                    expected: "number (@exclusiveMinimum 3)",
                                    value: input.greater_less,
                                })) &&
                            (7 > input.greater_less ||
                                $guard(_exceptionable, {
                                    path: _path + ".greater_less",
                                    expected: "number (@exclusiveMaximum 7)",
                                    value: input.greater_less,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".greater_less",
                                expected: "number",
                                value: input.greater_less,
                            })) &&
                        (("number" === typeof input.greater_equal_less &&
                            (Math.floor(input.greater_equal_less) ===
                                input.greater_equal_less ||
                                $guard(_exceptionable, {
                                    path: _path + ".greater_equal_less",
                                    expected: "number (@type int)",
                                    value: input.greater_equal_less,
                                })) &&
                            (3 <= input.greater_equal_less ||
                                $guard(_exceptionable, {
                                    path: _path + ".greater_equal_less",
                                    expected: "number (@minimum 3)",
                                    value: input.greater_equal_less,
                                })) &&
                            (7 > input.greater_equal_less ||
                                $guard(_exceptionable, {
                                    path: _path + ".greater_equal_less",
                                    expected: "number (@exclusiveMaximum 7)",
                                    value: input.greater_equal_less,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".greater_equal_less",
                                expected: "number",
                                value: input.greater_equal_less,
                            })) &&
                        (("number" === typeof input.greater_less_equal &&
                            (Math.floor(input.greater_less_equal) ===
                                input.greater_less_equal ||
                                $guard(_exceptionable, {
                                    path: _path + ".greater_less_equal",
                                    expected: "number (@type int)",
                                    value: input.greater_less_equal,
                                })) &&
                            (3 < input.greater_less_equal ||
                                $guard(_exceptionable, {
                                    path: _path + ".greater_less_equal",
                                    expected: "number (@exclusiveMinimum 3)",
                                    value: input.greater_less_equal,
                                })) &&
                            (7 >= input.greater_less_equal ||
                                $guard(_exceptionable, {
                                    path: _path + ".greater_less_equal",
                                    expected: "number (@maximum 7)",
                                    value: input.greater_less_equal,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".greater_less_equal",
                                expected: "number",
                                value: input.greater_less_equal,
                            })) &&
                        (("number" === typeof input.greater_equal_less_equal &&
                            (Math.floor(input.greater_equal_less_equal) ===
                                input.greater_equal_less_equal ||
                                $guard(_exceptionable, {
                                    path: _path + ".greater_equal_less_equal",
                                    expected: "number (@type int)",
                                    value: input.greater_equal_less_equal,
                                })) &&
                            (3 <= input.greater_equal_less_equal ||
                                $guard(_exceptionable, {
                                    path: _path + ".greater_equal_less_equal",
                                    expected: "number (@minimum 3)",
                                    value: input.greater_equal_less_equal,
                                })) &&
                            (7 >= input.greater_equal_less_equal ||
                                $guard(_exceptionable, {
                                    path: _path + ".greater_equal_less_equal",
                                    expected: "number (@maximum 7)",
                                    value: input.greater_equal_less_equal,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".greater_equal_less_equal",
                                expected: "number",
                                value: input.greater_equal_less_equal,
                            })) &&
                        (("number" === typeof input.equal &&
                            (Math.floor(input.equal) === input.equal ||
                                $guard(_exceptionable, {
                                    path: _path + ".equal",
                                    expected: "number (@type int)",
                                    value: input.equal,
                                })) &&
                            (10 <= input.equal ||
                                $guard(_exceptionable, {
                                    path: _path + ".equal",
                                    expected: "number (@minimum 10)",
                                    value: input.equal,
                                })) &&
                            (10 >= input.equal ||
                                $guard(_exceptionable, {
                                    path: _path + ".equal",
                                    expected: "number (@maximum 10)",
                                    value: input.equal,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".equal",
                                expected: "number",
                                value: input.equal,
                            }));
                    return (
                        ((("object" === typeof input && null !== input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "TagRange",
                                value: input,
                            })) &&
                            $ao0(input, _path + "", true)) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "TagRange",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            return input;
        };
        const prune = (input: TagRange): void => {
            const $io1 = (input: any): boolean =>
                "number" === typeof input.greater &&
                Math.floor(input.greater) === input.greater &&
                3 < input.greater &&
                "number" === typeof input.greater_equal &&
                Math.floor(input.greater_equal) === input.greater_equal &&
                3 <= input.greater_equal &&
                "number" === typeof input.less &&
                Math.floor(input.less) === input.less &&
                7 > input.less &&
                "number" === typeof input.less_equal &&
                Math.floor(input.less_equal) === input.less_equal &&
                7 >= input.less_equal &&
                "number" === typeof input.greater_less &&
                Math.floor(input.greater_less) === input.greater_less &&
                3 < input.greater_less &&
                7 > input.greater_less &&
                "number" === typeof input.greater_equal_less &&
                Math.floor(input.greater_equal_less) ===
                    input.greater_equal_less &&
                3 <= input.greater_equal_less &&
                7 > input.greater_equal_less &&
                "number" === typeof input.greater_less_equal &&
                Math.floor(input.greater_less_equal) ===
                    input.greater_less_equal &&
                3 < input.greater_less_equal &&
                7 >= input.greater_less_equal &&
                "number" === typeof input.greater_equal_less_equal &&
                Math.floor(input.greater_equal_less_equal) ===
                    input.greater_equal_less_equal &&
                3 <= input.greater_equal_less_equal &&
                7 >= input.greater_equal_less_equal &&
                "number" === typeof input.equal &&
                Math.floor(input.equal) === input.equal &&
                10 <= input.equal &&
                10 >= input.equal;
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
                        "greater" === key ||
                        "greater_equal" === key ||
                        "less" === key ||
                        "less_equal" === key ||
                        "greater_less" === key ||
                        "greater_equal_less" === key ||
                        "greater_less_equal" === key ||
                        "greater_equal_less_equal" === key ||
                        "equal" === key
                    )
                        continue;
                    delete input[key];
                }
            };
            if ("object" === typeof input && null !== input) $po0(input);
        };
        assert(input);
        prune(input);
        return input;
    },
    TagRange.SPOILERS,
);
