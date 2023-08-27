import typia from "../../../../src";
import { _test_misc_assertPrune } from "../../../internal/_test_misc_assertPrune";
import { TypeTagLength } from "../../../structures/TypeTagLength";

export const test_misc_assertPrune_TypeTagLength = _test_misc_assertPrune(
    "TypeTagLength",
)<TypeTagLength>(TypeTagLength)((input) =>
    ((input: any): TypeTagLength => {
        const assert = (input: any): TypeTagLength => {
            const __is = (input: any): input is TypeTagLength => {
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
                    5 <= input.fixed.length &&
                    input.fixed.length <= 5 &&
                    "string" === typeof input.minimum &&
                    3 <= input.minimum.length &&
                    "string" === typeof input.maximum &&
                    input.maximum.length <= 7 &&
                    "string" === typeof input.minimum_and_maximum &&
                    3 <= input.minimum_and_maximum.length &&
                    input.minimum_and_maximum.length <= 7 &&
                    "string" === typeof input.equal &&
                    10 <= input.equal.length &&
                    input.equal.length <= 19;
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is TypeTagLength => {
                    const $guard = (typia.misc.assertPrune as any).guard;
                    const $ao0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ((Array.isArray(input.value) ||
                            $guard(_exceptionable, {
                                path: _path + ".value",
                                expected: "Array<TypeTagLength.Type>",
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
                                            expected: "TypeTagLength.Type",
                                            value: elem,
                                        })) &&
                                        $ao1(
                                            elem,
                                            _path + ".value[" + _index1 + "]",
                                            true && _exceptionable,
                                        )) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".value[" + _index1 + "]",
                                        expected: "TypeTagLength.Type",
                                        value: elem,
                                    }),
                            )) ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected: "Array<TypeTagLength.Type>",
                            value: input.value,
                        });
                    const $ao1 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (("string" === typeof input.fixed &&
                            (5 <= input.fixed.length ||
                                $guard(_exceptionable, {
                                    path: _path + ".fixed",
                                    expected: "string & MinLength<5>",
                                    value: input.fixed,
                                })) &&
                            (input.fixed.length <= 5 ||
                                $guard(_exceptionable, {
                                    path: _path + ".fixed",
                                    expected: "string & MaxLength<5>",
                                    value: input.fixed,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".fixed",
                                expected:
                                    "(string & MinLength<5> & MaxLength<5>)",
                                value: input.fixed,
                            })) &&
                        (("string" === typeof input.minimum &&
                            (3 <= input.minimum.length ||
                                $guard(_exceptionable, {
                                    path: _path + ".minimum",
                                    expected: "string & MinLength<3>",
                                    value: input.minimum,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".minimum",
                                expected: "(string & MinLength<3>)",
                                value: input.minimum,
                            })) &&
                        (("string" === typeof input.maximum &&
                            (input.maximum.length <= 7 ||
                                $guard(_exceptionable, {
                                    path: _path + ".maximum",
                                    expected: "string & MaxLength<7>",
                                    value: input.maximum,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".maximum",
                                expected: "(string & MaxLength<7>)",
                                value: input.maximum,
                            })) &&
                        (("string" === typeof input.minimum_and_maximum &&
                            (3 <= input.minimum_and_maximum.length ||
                                $guard(_exceptionable, {
                                    path: _path + ".minimum_and_maximum",
                                    expected: "string & MinLength<3>",
                                    value: input.minimum_and_maximum,
                                })) &&
                            (input.minimum_and_maximum.length <= 7 ||
                                $guard(_exceptionable, {
                                    path: _path + ".minimum_and_maximum",
                                    expected: "string & MaxLength<7>",
                                    value: input.minimum_and_maximum,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".minimum_and_maximum",
                                expected:
                                    "(string & MinLength<3> & MaxLength<7>)",
                                value: input.minimum_and_maximum,
                            })) &&
                        (("string" === typeof input.equal &&
                            (10 <= input.equal.length ||
                                $guard(_exceptionable, {
                                    path: _path + ".equal",
                                    expected: "string & MinLength<10>",
                                    value: input.equal,
                                })) &&
                            (input.equal.length <= 19 ||
                                $guard(_exceptionable, {
                                    path: _path + ".equal",
                                    expected: "string & MaxLength<19>",
                                    value: input.equal,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".equal",
                                expected:
                                    "(string & MinLength<10> & MaxLength<19>)",
                                value: input.equal,
                            }));
                    return (
                        ((("object" === typeof input && null !== input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "TypeTagLength",
                                value: input,
                            })) &&
                            $ao0(input, _path + "", true)) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "TypeTagLength",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            return input;
        };
        const prune = (input: TypeTagLength): void => {
            const $io1 = (input: any): boolean =>
                "string" === typeof input.fixed &&
                5 <= input.fixed.length &&
                input.fixed.length <= 5 &&
                "string" === typeof input.minimum &&
                3 <= input.minimum.length &&
                "string" === typeof input.maximum &&
                input.maximum.length <= 7 &&
                "string" === typeof input.minimum_and_maximum &&
                3 <= input.minimum_and_maximum.length &&
                input.minimum_and_maximum.length <= 7 &&
                "string" === typeof input.equal &&
                10 <= input.equal.length &&
                input.equal.length <= 19;
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
                        "fixed" === key ||
                        "minimum" === key ||
                        "maximum" === key ||
                        "minimum_and_maximum" === key ||
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
    })(input),
);
