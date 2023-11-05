import typia from "../../../../src";
import { _test_misc_assertPrune } from "../../../internal/_test_misc_assertPrune";
import { DynamicUnion } from "../../../structures/DynamicUnion";

export const test_misc_createAssertPrune_DynamicUnion = _test_misc_assertPrune(
    "DynamicUnion",
)<DynamicUnion>(DynamicUnion)((input: any): DynamicUnion => {
    const assert = (input: any): DynamicUnion => {
        const __is = (input: any): input is DynamicUnion => {
            const $io0 = (input: any): boolean =>
                Object.keys(input).every((key: any) => {
                    const value = input[key];
                    if (undefined === value) return true;
                    if (
                        "number" === typeof Number(key) &&
                        Number.isFinite(Number(key))
                    )
                        return "string" === typeof value;
                    if (
                        "string" === typeof key &&
                        RegExp(/^prefix_(.*)/).test(key)
                    )
                        return "string" === typeof value;
                    if (
                        "string" === typeof key &&
                        RegExp(/(.*)_postfix$/).test(key)
                    )
                        return "string" === typeof value;
                    if (
                        "string" === typeof key &&
                        RegExp(
                            /^value_between_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
                        ).test(key)
                    )
                        return (
                            "number" === typeof value && Number.isFinite(value)
                        );
                    return true;
                });
            return (
                "object" === typeof input &&
                null !== input &&
                false === Array.isArray(input) &&
                $io0(input)
            );
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is DynamicUnion => {
                const $guard = (typia.misc.createAssertPrune as any).guard;
                const $join = (typia.misc.createAssertPrune as any).join;
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    false === _exceptionable ||
                    Object.keys(input).every((key: any) => {
                        const value = input[key];
                        if (undefined === value) return true;
                        if (
                            "number" === typeof Number(key) &&
                            Number.isFinite(Number(key))
                        )
                            return (
                                "string" === typeof value ||
                                $guard(_exceptionable, {
                                    path: _path + $join(key),
                                    expected: "string",
                                    value: value,
                                })
                            );
                        if (
                            "string" === typeof key &&
                            RegExp(/^prefix_(.*)/).test(key)
                        )
                            return (
                                "string" === typeof value ||
                                $guard(_exceptionable, {
                                    path: _path + $join(key),
                                    expected: "string",
                                    value: value,
                                })
                            );
                        if (
                            "string" === typeof key &&
                            RegExp(/(.*)_postfix$/).test(key)
                        )
                            return (
                                "string" === typeof value ||
                                $guard(_exceptionable, {
                                    path: _path + $join(key),
                                    expected: "string",
                                    value: value,
                                })
                            );
                        if (
                            "string" === typeof key &&
                            RegExp(
                                /^value_between_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
                            ).test(key)
                        )
                            return (
                                ("number" === typeof value &&
                                    Number.isFinite(value)) ||
                                $guard(_exceptionable, {
                                    path: _path + $join(key),
                                    expected: "number",
                                    value: value,
                                })
                            );
                        return true;
                    });
                return (
                    ((("object" === typeof input &&
                        null !== input &&
                        false === Array.isArray(input)) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "DynamicUnion",
                            value: input,
                        })) &&
                        $ao0(input, _path + "", true)) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "DynamicUnion",
                        value: input,
                    })
                );
            })(input, "$input", true);
        return input;
    };
    const prune = (input: DynamicUnion): void => {
        const $po0 = (input: any): any => {
            Object.entries(input).forEach(([key, value]: any) => {
                if (undefined === value) return;
                if (RegExp(/^[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/).test(key)) {
                }
                if (RegExp(/^(prefix_(.*))/).test(key)) {
                }
                if (RegExp(/((.*)_postfix)$/).test(key)) {
                }
                if (
                    RegExp(
                        /^(value_between_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
                    ).test(key)
                ) {
                }
            });
            for (const key of Object.keys(input)) {
                if (
                    RegExp(/^[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/).test(key) ||
                    RegExp(/^(prefix_(.*))/).test(key) ||
                    RegExp(/((.*)_postfix)$/).test(key) ||
                    RegExp(
                        /^(value_between_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
                    ).test(key)
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
});
