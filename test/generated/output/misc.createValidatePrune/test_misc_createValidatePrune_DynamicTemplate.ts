import typia from "../../../../src";
import { _test_misc_validatePrune } from "../../../internal/_test_misc_validatePrune";
import { DynamicTemplate } from "../../../structures/DynamicTemplate";

export const test_misc_createValidatePrune_DynamicTemplate =
    _test_misc_validatePrune("DynamicTemplate")<DynamicTemplate>(
        DynamicTemplate,
    )((input: any): typia.IValidation<DynamicTemplate> => {
        const validate = (input: any): typia.IValidation<DynamicTemplate> => {
            const errors = [] as any[];
            const __is = (input: any): input is DynamicTemplate => {
                const $io0 = (input: any): boolean =>
                    Object.keys(input).every((key: any) => {
                        const value = input[key];
                        if (undefined === value) return true;
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
                                /^value_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
                            ).test(key)
                        )
                            return (
                                "number" === typeof value &&
                                Number.isFinite(value)
                            );
                        if (
                            "string" === typeof key &&
                            RegExp(
                                /^between_(.*)_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
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
            if (false === __is(input)) {
                const $report = (typia.misc.createValidatePrune as any).report(
                    errors,
                );
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is DynamicTemplate => {
                    const $join = (typia.misc.createValidatePrune as any).join;
                    const $vo0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            false === _exceptionable ||
                                Object.keys(input)
                                    .map((key: any) => {
                                        const value = input[key];
                                        if (undefined === value) return true;
                                        if (
                                            "string" === typeof key &&
                                            RegExp(/^prefix_(.*)/).test(key)
                                        )
                                            return (
                                                "string" === typeof value ||
                                                $report(_exceptionable, {
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
                                                $report(_exceptionable, {
                                                    path: _path + $join(key),
                                                    expected: "string",
                                                    value: value,
                                                })
                                            );
                                        if (
                                            "string" === typeof key &&
                                            RegExp(
                                                /^value_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
                                            ).test(key)
                                        )
                                            return (
                                                ("number" === typeof value &&
                                                    Number.isFinite(value)) ||
                                                $report(_exceptionable, {
                                                    path: _path + $join(key),
                                                    expected: "number",
                                                    value: value,
                                                })
                                            );
                                        if (
                                            "string" === typeof key &&
                                            RegExp(
                                                /^between_(.*)_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
                                            ).test(key)
                                        )
                                            return (
                                                "boolean" === typeof value ||
                                                $report(_exceptionable, {
                                                    path: _path + $join(key),
                                                    expected: "boolean",
                                                    value: value,
                                                })
                                            );
                                        return true;
                                    })
                                    .every((flag: boolean) => flag),
                        ].every((flag: boolean) => flag);
                    return (
                        ((("object" === typeof input &&
                            null !== input &&
                            false === Array.isArray(input)) ||
                            $report(true, {
                                path: _path + "",
                                expected: "DynamicTemplate",
                                value: input,
                            })) &&
                            $vo0(input, _path + "", true)) ||
                        $report(true, {
                            path: _path + "",
                            expected: "DynamicTemplate",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            }
            const success = 0 === errors.length;
            return {
                success,
                errors,
                data: success ? input : undefined,
            } as any;
        };
        const prune = (input: DynamicTemplate): void => {
            const $po0 = (input: any): any => {
                Object.entries(input).forEach(([key, value]: any) => {
                    if (undefined === value) return;
                    if (RegExp(/^(prefix_(.*))/).test(key)) {
                    }
                    if (RegExp(/((.*)_postfix)$/).test(key)) {
                    }
                    if (
                        RegExp(
                            /^(value_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
                        ).test(key)
                    ) {
                    }
                    if (
                        RegExp(
                            /^(between_(.*)_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
                        ).test(key)
                    ) {
                    }
                });
                for (const key of Object.keys(input)) {
                    if (
                        RegExp(/^(prefix_(.*))/).test(key) ||
                        RegExp(/((.*)_postfix)$/).test(key) ||
                        RegExp(
                            /^(value_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
                        ).test(key) ||
                        RegExp(
                            /^(between_(.*)_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
                        ).test(key)
                    )
                        continue;
                    delete input[key];
                }
            };
            if ("object" === typeof input && null !== input) $po0(input);
        };
        const output = validate(input);
        if (output.success) prune(input);
        return output;
    });
