import typia from "../../../../src";
import { _test_validateStringify } from "../../../internal/_test_validateStringify";
import { DynamicUnion } from "../../../structures/DynamicUnion";

export const test_validateStringify_DynamicUnion = _test_validateStringify(
    "DynamicUnion",
    DynamicUnion.generate,
    (input) =>
        ((input: DynamicUnion): typia.IValidation<string> => {
            const validate = (input: any): typia.IValidation<DynamicUnion> => {
                const errors = [] as any[];
                const __is = (input: any): input is DynamicUnion => {
                    const $join = (typia.validateStringify as any).join;
                    const $io0 = (input: any): boolean =>
                        Object.keys(input).every((key: any) => {
                            const value = input[key];
                            if (undefined === value) return true;
                            if (
                                RegExp(
                                    /^[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
                                ).test(key)
                            )
                                return "string" === typeof value;
                            if (RegExp(/^(prefix_(.*))/).test(key))
                                return "string" === typeof value;
                            if (RegExp(/((.*)_postfix)$/).test(key))
                                return "string" === typeof value;
                            if (
                                RegExp(
                                    /^(value_between_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
                                ).test(key)
                            )
                                return (
                                    "number" === typeof value &&
                                    Number.isFinite(value)
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
                if (false === __is(input)) {
                    const $report = (typia.validateStringify as any).report(
                        errors,
                    );
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is DynamicUnion => {
                        const $join = (typia.validateStringify as any).join;
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
                                                RegExp(
                                                    /^[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
                                                ).test(key)
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
                                                    /^(value_between_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
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
                                    expected: "DynamicUnion",
                                    value: input,
                                })) &&
                                $vo0(input, _path + "", true)) ||
                            $report(true, {
                                path: _path + "",
                                expected: "DynamicUnion",
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
            const stringify = (input: DynamicUnion): string => {
                const $join = (typia.validateStringify as any).join;
                const $string = (typia.validateStringify as any).string;
                const $number = (typia.validateStringify as any).number;
                const $so0 = (input: any): any =>
                    `{${Object.entries(input)
                        .map(([key, value]: [string, any]) => {
                            if (undefined === value) return "";
                            if (
                                RegExp(
                                    /^[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
                                ).test(key)
                            )
                                return `${JSON.stringify(key)}:${$string(
                                    value,
                                )}`;
                            if (RegExp(/^(prefix_(.*))/).test(key))
                                return `${JSON.stringify(key)}:${$string(
                                    value,
                                )}`;
                            if (RegExp(/((.*)_postfix)$/).test(key))
                                return `${JSON.stringify(key)}:${$string(
                                    value,
                                )}`;
                            if (
                                RegExp(
                                    /^(value_between_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
                                ).test(key)
                            )
                                return `${JSON.stringify(key)}:${$number(
                                    value,
                                )}`;
                            return "";
                        })
                        .filter((str: any) => "" !== str)
                        .join(",")}}`;
                return $so0(input);
            };
            const output = validate(input) as any;
            if (output.success) output.data = stringify(input);
            return output;
        })(input),
    DynamicUnion.SPOILERS,
);
