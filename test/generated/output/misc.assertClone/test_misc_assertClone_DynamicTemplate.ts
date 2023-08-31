import typia from "../../../../src";
import { _test_misc_assertClone } from "../../../internal/_test_misc_assertClone";
import { DynamicTemplate } from "../../../structures/DynamicTemplate";

export const test_misc_assertClone_DynamicTemplate = _test_misc_assertClone(
    "DynamicTemplate",
)<DynamicTemplate>(DynamicTemplate)((input) =>
    ((input: any): typia.Resolved<DynamicTemplate> => {
        const assert = (input: any): DynamicTemplate => {
            const __is = (input: any): input is DynamicTemplate => {
                const $io0 = (input: any): boolean =>
                    Object.keys(input).every((key: any) => {
                        const value = input[key];
                        if (undefined === value) return true;
                        if (RegExp(/^(prefix_(.*))/).test(key))
                            return "string" === typeof value;
                        if (RegExp(/((.*)_postfix)$/).test(key))
                            return "string" === typeof value;
                        if (
                            RegExp(
                                /^(value_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
                            ).test(key)
                        )
                            return (
                                "number" === typeof value &&
                                Number.isFinite(value)
                            );
                        if (
                            RegExp(
                                /^(between_(.*)_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
                            ).test(key)
                        )
                            return "boolean" === typeof value;
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
                ): input is DynamicTemplate => {
                    const $guard = (typia.misc.assertClone as any).guard;
                    const $join = (typia.misc.assertClone as any).join;
                    const $ao0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        false === _exceptionable ||
                        Object.keys(input).every((key: any) => {
                            const value = input[key];
                            if (undefined === value) return true;
                            if (RegExp(/^(prefix_(.*))/).test(key))
                                return (
                                    "string" === typeof value ||
                                    $guard(_exceptionable, {
                                        path: _path + $join(key),
                                        expected: "string",
                                        value: value,
                                    })
                                );
                            if (RegExp(/((.*)_postfix)$/).test(key))
                                return (
                                    "string" === typeof value ||
                                    $guard(_exceptionable, {
                                        path: _path + $join(key),
                                        expected: "string",
                                        value: value,
                                    })
                                );
                            if (
                                RegExp(
                                    /^(value_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
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
                            if (
                                RegExp(
                                    /^(between_(.*)_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
                                ).test(key)
                            )
                                return (
                                    "boolean" === typeof value ||
                                    $guard(_exceptionable, {
                                        path: _path + $join(key),
                                        expected: "boolean",
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
                                expected: "DynamicTemplate",
                                value: input,
                            })) &&
                            $ao0(input, _path + "", true)) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "DynamicTemplate",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            return input;
        };
        const clone = (
            input: DynamicTemplate,
        ): typia.Resolved<DynamicTemplate> => {
            const $co0 = (input: any): any => {
                const output = {} as any;
                for (const [key, value] of Object.entries(input)) {
                    if (RegExp(/^(prefix_(.*))/).test(key)) {
                        output[key] = value as any;
                        continue;
                    }
                    if (RegExp(/((.*)_postfix)$/).test(key)) {
                        output[key] = value as any;
                        continue;
                    }
                    if (
                        RegExp(
                            /^(value_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
                        ).test(key)
                    ) {
                        output[key] = value as any;
                        continue;
                    }
                    if (
                        RegExp(
                            /^(between_(.*)_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
                        ).test(key)
                    ) {
                        output[key] = value as any;
                        continue;
                    }
                }
                return output;
            };
            return "object" === typeof input && null !== input
                ? $co0(input)
                : (input as any);
        };
        assert(input);
        const output = clone(input);
        return output;
    })(input),
);
