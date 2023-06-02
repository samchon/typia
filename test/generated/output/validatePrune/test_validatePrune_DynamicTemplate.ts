import typia from "../../../../src";
import { _test_validatePrune } from "../../../internal/_test_validatePrune";
import { DynamicTemplate } from "../../../structures/DynamicTemplate";

export const test_validatePrune_DynamicTemplate = _test_validatePrune(
    "DynamicTemplate",
    DynamicTemplate.generate,
    (input) =>
        ((input: any): typia.IValidation<DynamicTemplate> => {
            const validate: any = (
                input: any,
            ): typia.IValidation<DynamicTemplate> => {
                const __is: any = (input: any): input is DynamicTemplate => {
                    const $join: any = (typia.validatePrune as any).join;
                    const $io0: any = (input: any): boolean =>
                        Object.keys(input).every((key: any) => {
                            const value: any = input[key];
                            if (undefined === value) return true;
                            if (RegExp(/^(prefix_(.*))/).test(key))
                                return "string" === typeof value;
                            if (RegExp(/((.*)_postfix)$/).test(key))
                                return "string" === typeof value;
                            if (RegExp(/^(value_-?\d+\.?\d*)$/).test(key))
                                return (
                                    "number" === typeof value &&
                                    Number.isFinite(value)
                                );
                            if (
                                RegExp(/^(between_(.*)_and_-?\d+\.?\d*)$/).test(
                                    key,
                                )
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
                const errors: any = [] as any[];
                const $report: any = (typia.validatePrune as any).report(
                    errors,
                );
                const $join: any = (typia.validatePrune as any).join;
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is DynamicTemplate => {
                        const $vo0: any = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                false === _exceptionable ||
                                    Object.keys(input)
                                        .map((key: any) => {
                                            const value: any = input[key];
                                            if (undefined === value)
                                                return true;
                                            if (
                                                RegExp(/^(prefix_(.*))/).test(
                                                    key,
                                                )
                                            )
                                                return (
                                                    "string" === typeof value ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path + $join(key),
                                                        expected: "string",
                                                        value: value,
                                                    })
                                                );
                                            if (
                                                RegExp(/((.*)_postfix)$/).test(
                                                    key,
                                                )
                                            )
                                                return (
                                                    "string" === typeof value ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path + $join(key),
                                                        expected: "string",
                                                        value: value,
                                                    })
                                                );
                                            if (
                                                RegExp(
                                                    /^(value_-?\d+\.?\d*)$/,
                                                ).test(key)
                                            )
                                                return (
                                                    ("number" ===
                                                        typeof value &&
                                                        Number.isFinite(
                                                            value,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path + $join(key),
                                                        expected: "number",
                                                        value: value,
                                                    })
                                                );
                                            if (
                                                RegExp(
                                                    /^(between_(.*)_and_-?\d+\.?\d*)$/,
                                                ).test(key)
                                            )
                                                return (
                                                    "boolean" ===
                                                        typeof value ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path + $join(key),
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
                const success: any = 0 === errors.length;
                return {
                    success,
                    errors,
                    data: success ? input : undefined,
                } as any;
            };
            const prune: any = (input: DynamicTemplate): void => {
                const $join: any = (typia.validatePrune as any).join;
                const $po0: any = (input: any): any => {
                    Object.entries(input).forEach(([key, value]: any) => {
                        if (undefined === value) return;
                        if (RegExp(/^(prefix_(.*))/).test(key)) {
                        }
                        if (RegExp(/((.*)_postfix)$/).test(key)) {
                        }
                        if (RegExp(/^(value_-?\d+\.?\d*)$/).test(key)) {
                        }
                        if (
                            RegExp(/^(between_(.*)_and_-?\d+\.?\d*)$/).test(key)
                        ) {
                        }
                    });
                    for (const key: any of Object.keys(input)) {
                        if (
                            RegExp(/^(prefix_(.*))/).test(key) ||
                            RegExp(/((.*)_postfix)$/).test(key) ||
                            RegExp(/^(value_-?\d+\.?\d*)$/).test(key) ||
                            RegExp(/^(between_(.*)_and_-?\d+\.?\d*)$/).test(key)
                        )
                            continue;
                        delete input[key];
                    }
                };
                if ("object" === typeof input && null !== input) $po0(input);
            };
            const output: any = validate(input);
            if (output.success) prune(input);
            return output;
        })(input),
    DynamicTemplate.SPOILERS,
);
