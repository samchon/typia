import typia from "../../../../src";
import { _test_misc_assertPrune } from "../../../internal/_test_misc_assertPrune";
import { TypeTagRangeBigInt } from "../../../structures/TypeTagRangeBigInt";

export const test_misc_assertPrune_TypeTagRangeBigInt = _test_misc_assertPrune(
    "TypeTagRangeBigInt",
)<TypeTagRangeBigInt>(TypeTagRangeBigInt)((input) =>
    ((input: any): TypeTagRangeBigInt => {
        const assert = (input: any): TypeTagRangeBigInt => {
            const __is = (input: any): input is TypeTagRangeBigInt => {
                const $io0 = (input: any): boolean =>
                    Array.isArray(input.value) &&
                    input.value.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io1(elem),
                    );
                const $io1 = (input: any): boolean =>
                    "bigint" === typeof input.greater &&
                    BigInt(3) < input.greater &&
                    "bigint" === typeof input.greater_equal &&
                    BigInt(3) <= input.greater_equal &&
                    "bigint" === typeof input.less &&
                    input.less < BigInt(7) &&
                    "bigint" === typeof input.less_equal &&
                    input.less_equal <= BigInt(7) &&
                    "bigint" === typeof input.greater_less &&
                    BigInt(3) < input.greater_less &&
                    input.greater_less < BigInt(7) &&
                    "bigint" === typeof input.greater_equal_less &&
                    BigInt(3) <= input.greater_equal_less &&
                    input.greater_equal_less < BigInt(7) &&
                    "bigint" === typeof input.greater_less_equal &&
                    BigInt(3) < input.greater_less_equal &&
                    input.greater_less_equal <= BigInt(7) &&
                    "bigint" === typeof input.greater_equal_less_equal &&
                    BigInt(3) <= input.greater_equal_less_equal &&
                    input.greater_equal_less_equal <= BigInt(7) &&
                    "bigint" === typeof input.equal &&
                    BigInt(10) <= input.equal &&
                    input.equal <= BigInt(10);
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is TypeTagRangeBigInt => {
                    const $guard = (typia.misc.assertPrune as any).guard;
                    const $ao0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ((Array.isArray(input.value) ||
                            $guard(_exceptionable, {
                                path: _path + ".value",
                                expected: "Array<TypeTagRangeBigInt.Type>",
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
                                            expected: "TypeTagRangeBigInt.Type",
                                            value: elem,
                                        })) &&
                                        $ao1(
                                            elem,
                                            _path + ".value[" + _index1 + "]",
                                            true && _exceptionable,
                                        )) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".value[" + _index1 + "]",
                                        expected: "TypeTagRangeBigInt.Type",
                                        value: elem,
                                    }),
                            )) ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected: "Array<TypeTagRangeBigInt.Type>",
                            value: input.value,
                        });
                    const $ao1 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (("bigint" === typeof input.greater &&
                            (BigInt(3) < input.greater ||
                                $guard(_exceptionable, {
                                    path: _path + ".greater",
                                    expected: "bigint & ExclusiveMinimum<3n>",
                                    value: input.greater,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".greater",
                                expected: "(bigint & ExclusiveMinimum<3n>)",
                                value: input.greater,
                            })) &&
                        (("bigint" === typeof input.greater_equal &&
                            (BigInt(3) <= input.greater_equal ||
                                $guard(_exceptionable, {
                                    path: _path + ".greater_equal",
                                    expected: "bigint & Minimum<3n>",
                                    value: input.greater_equal,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".greater_equal",
                                expected: "(bigint & Minimum<3n>)",
                                value: input.greater_equal,
                            })) &&
                        (("bigint" === typeof input.less &&
                            (input.less < BigInt(7) ||
                                $guard(_exceptionable, {
                                    path: _path + ".less",
                                    expected: "bigint & ExclusiveMaximum<7n>",
                                    value: input.less,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".less",
                                expected: "(bigint & ExclusiveMaximum<7n>)",
                                value: input.less,
                            })) &&
                        (("bigint" === typeof input.less_equal &&
                            (input.less_equal <= BigInt(7) ||
                                $guard(_exceptionable, {
                                    path: _path + ".less_equal",
                                    expected: "bigint & Maximum<7n>",
                                    value: input.less_equal,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".less_equal",
                                expected: "(bigint & Maximum<7n>)",
                                value: input.less_equal,
                            })) &&
                        (("bigint" === typeof input.greater_less &&
                            (BigInt(3) < input.greater_less ||
                                $guard(_exceptionable, {
                                    path: _path + ".greater_less",
                                    expected: "bigint & ExclusiveMinimum<3n>",
                                    value: input.greater_less,
                                })) &&
                            (input.greater_less < BigInt(7) ||
                                $guard(_exceptionable, {
                                    path: _path + ".greater_less",
                                    expected: "bigint & ExclusiveMaximum<7n>",
                                    value: input.greater_less,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".greater_less",
                                expected:
                                    "(bigint & ExclusiveMinimum<3n> & ExclusiveMaximum<7n>)",
                                value: input.greater_less,
                            })) &&
                        (("bigint" === typeof input.greater_equal_less &&
                            (BigInt(3) <= input.greater_equal_less ||
                                $guard(_exceptionable, {
                                    path: _path + ".greater_equal_less",
                                    expected: "bigint & Minimum<3n>",
                                    value: input.greater_equal_less,
                                })) &&
                            (input.greater_equal_less < BigInt(7) ||
                                $guard(_exceptionable, {
                                    path: _path + ".greater_equal_less",
                                    expected: "bigint & ExclusiveMaximum<7n>",
                                    value: input.greater_equal_less,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".greater_equal_less",
                                expected:
                                    "(bigint & Minimum<3n> & ExclusiveMaximum<7n>)",
                                value: input.greater_equal_less,
                            })) &&
                        (("bigint" === typeof input.greater_less_equal &&
                            (BigInt(3) < input.greater_less_equal ||
                                $guard(_exceptionable, {
                                    path: _path + ".greater_less_equal",
                                    expected: "bigint & ExclusiveMinimum<3n>",
                                    value: input.greater_less_equal,
                                })) &&
                            (input.greater_less_equal <= BigInt(7) ||
                                $guard(_exceptionable, {
                                    path: _path + ".greater_less_equal",
                                    expected: "bigint & Maximum<7n>",
                                    value: input.greater_less_equal,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".greater_less_equal",
                                expected:
                                    "(bigint & ExclusiveMinimum<3n> & Maximum<7n>)",
                                value: input.greater_less_equal,
                            })) &&
                        (("bigint" === typeof input.greater_equal_less_equal &&
                            (BigInt(3) <= input.greater_equal_less_equal ||
                                $guard(_exceptionable, {
                                    path: _path + ".greater_equal_less_equal",
                                    expected: "bigint & Minimum<3n>",
                                    value: input.greater_equal_less_equal,
                                })) &&
                            (input.greater_equal_less_equal <= BigInt(7) ||
                                $guard(_exceptionable, {
                                    path: _path + ".greater_equal_less_equal",
                                    expected: "bigint & Maximum<7n>",
                                    value: input.greater_equal_less_equal,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".greater_equal_less_equal",
                                expected:
                                    "(bigint & Minimum<3n> & Maximum<7n>)",
                                value: input.greater_equal_less_equal,
                            })) &&
                        (("bigint" === typeof input.equal &&
                            (BigInt(10) <= input.equal ||
                                $guard(_exceptionable, {
                                    path: _path + ".equal",
                                    expected: "bigint & Minimum<10n>",
                                    value: input.equal,
                                })) &&
                            (input.equal <= BigInt(10) ||
                                $guard(_exceptionable, {
                                    path: _path + ".equal",
                                    expected: "bigint & Maximum<10n>",
                                    value: input.equal,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".equal",
                                expected:
                                    "(bigint & Minimum<10n> & Maximum<10n>)",
                                value: input.equal,
                            }));
                    return (
                        ((("object" === typeof input && null !== input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "TypeTagRangeBigInt",
                                value: input,
                            })) &&
                            $ao0(input, _path + "", true)) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "TypeTagRangeBigInt",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            return input;
        };
        const prune = (input: TypeTagRangeBigInt): void => {
            const $io1 = (input: any): boolean =>
                "bigint" === typeof input.greater &&
                BigInt(3) < input.greater &&
                "bigint" === typeof input.greater_equal &&
                BigInt(3) <= input.greater_equal &&
                "bigint" === typeof input.less &&
                input.less < BigInt(7) &&
                "bigint" === typeof input.less_equal &&
                input.less_equal <= BigInt(7) &&
                "bigint" === typeof input.greater_less &&
                BigInt(3) < input.greater_less &&
                input.greater_less < BigInt(7) &&
                "bigint" === typeof input.greater_equal_less &&
                BigInt(3) <= input.greater_equal_less &&
                input.greater_equal_less < BigInt(7) &&
                "bigint" === typeof input.greater_less_equal &&
                BigInt(3) < input.greater_less_equal &&
                input.greater_less_equal <= BigInt(7) &&
                "bigint" === typeof input.greater_equal_less_equal &&
                BigInt(3) <= input.greater_equal_less_equal &&
                input.greater_equal_less_equal <= BigInt(7) &&
                "bigint" === typeof input.equal &&
                BigInt(10) <= input.equal &&
                input.equal <= BigInt(10);
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
    })(input),
);
