import typia from "../../../../src";
import { _test_json_validateStringify } from "../../../internal/_test_json_validateStringify";
import { DynamicTemplate } from "../../../structures/DynamicTemplate";

export const test_json_validateStringify_DynamicTemplate =
    _test_json_validateStringify<DynamicTemplate>(DynamicTemplate)(
        (input: DynamicTemplate): typia.IValidation<string> => {
            const validate = (
                input: any,
            ): typia.IValidation<DynamicTemplate> => {
                const errors = [] as any[];
                const __is = (input: any): input is DynamicTemplate => {
                    const $join = (typia.json.createValidateStringify as any)
                        .join;
                    const $io0 = (input: any): boolean =>
                        Object.keys(input).every((key: any) => {
                            const value = input[key];
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
                if (false === __is(input)) {
                    const $report = (
                        typia.json.createValidateStringify as any
                    ).report(errors);
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is DynamicTemplate => {
                        const $join = (
                            typia.json.createValidateStringify as any
                        ).join;
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
                }
                const success = 0 === errors.length;
                return {
                    success,
                    errors,
                    data: success ? input : undefined,
                } as any;
            };
            const stringify = (input: DynamicTemplate): string => {
                const $join = (typia.json.createValidateStringify as any).join;
                const $string = (typia.json.createValidateStringify as any)
                    .string;
                const $number = (typia.json.createValidateStringify as any)
                    .number;
                const $so0 = (input: any): any =>
                    `{${Object.entries(input)
                        .map(([key, value]: [string, any]) => {
                            if (undefined === value) return "";
                            if (RegExp(/^(prefix_(.*))/).test(key))
                                return `${JSON.stringify(key)}:${$string(
                                    value,
                                )}`;
                            if (RegExp(/((.*)_postfix)$/).test(key))
                                return `${JSON.stringify(key)}:${$string(
                                    value,
                                )}`;
                            if (RegExp(/^(value_-?\d+\.?\d*)$/).test(key))
                                return `${JSON.stringify(key)}:${$number(
                                    value,
                                )}`;
                            if (
                                RegExp(/^(between_(.*)_and_-?\d+\.?\d*)$/).test(
                                    key,
                                )
                            )
                                return `${JSON.stringify(key)}:${value}`;
                        })
                        .filter((str: any) => "" !== str)
                        .join(",")}}`;
                return $so0(input);
            };
            const output = validate(input) as any;
            if (output.success) output.data = stringify(input);
            return output;
        },
    );
