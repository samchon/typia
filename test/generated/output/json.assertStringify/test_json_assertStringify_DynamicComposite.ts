import typia from "../../../../src";
import { _test_json_assertStringify } from "../../../internal/_test_json_assertStringify";
import { DynamicComposite } from "../../../structures/DynamicComposite";

export const test_json_assertStringify_DynamicComposite =
    _test_json_assertStringify("DynamicComposite")<DynamicComposite>(
        DynamicComposite,
    )((input) =>
        ((input: any): string => {
            const assert = (input: any): DynamicComposite => {
                const __is = (input: any): input is DynamicComposite => {
                    const $join = (typia.json.assertStringify as any).join;
                    const $io0 = (input: any): boolean =>
                        "string" === typeof input.id &&
                        "string" === typeof input.name &&
                        Object.keys(input).every((key: any) => {
                            const value = input[key];
                            if (undefined === value) return true;
                            if (
                                RegExp(
                                    /^[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
                                ).test(key)
                            )
                                return (
                                    "number" === typeof value &&
                                    Number.isFinite(value)
                                );
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
                                    "string" === typeof value ||
                                    ("number" === typeof value &&
                                        Number.isFinite(value)) ||
                                    "boolean" === typeof value
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
                        $io0(input)
                    );
                };
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is DynamicComposite => {
                        const $guard = (typia.json.assertStringify as any)
                            .guard;
                        const $join = (typia.json.assertStringify as any).join;
                        const $ao0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            ("string" === typeof input.id ||
                                $guard(_exceptionable, {
                                    path: _path + ".id",
                                    expected: "string",
                                    value: input.id,
                                })) &&
                            ("string" === typeof input.name ||
                                $guard(_exceptionable, {
                                    path: _path + ".name",
                                    expected: "string",
                                    value: input.name,
                                })) &&
                            (false === _exceptionable ||
                                Object.keys(input).every((key: any) => {
                                    const value = input[key];
                                    if (undefined === value) return true;
                                    if (
                                        RegExp(
                                            /^[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
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
                                            "string" === typeof value ||
                                            ("number" === typeof value &&
                                                Number.isFinite(value)) ||
                                            "boolean" === typeof value ||
                                            $guard(_exceptionable, {
                                                path: _path + $join(key),
                                                expected:
                                                    "(boolean | number | string)",
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
                                }));
                        return (
                            ((("object" === typeof input && null !== input) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "DynamicComposite",
                                    value: input,
                                })) &&
                                $ao0(input, _path + "", true)) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "DynamicComposite",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                return input;
            };
            const stringify = (input: DynamicComposite): string => {
                const $string = (typia.json.assertStringify as any).string;
                const $join = (typia.json.assertStringify as any).join;
                const $number = (typia.json.assertStringify as any).number;
                const $throws = (typia.json.assertStringify as any).throws;
                const $tail = (typia.json.assertStringify as any).tail;
                const $so0 = (input: any): any =>
                    `{${$tail(
                        `"id":${$string(input.id)},"name":${$string(
                            input.name,
                        )},${Object.entries(input)
                            .map(([key, value]: [string, any]) => {
                                if (undefined === value) return "";
                                if (
                                    ["id", "name"].some(
                                        (regular: any) => regular === key,
                                    )
                                )
                                    return "";
                                if (
                                    RegExp(
                                        /^[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
                                    ).test(key)
                                )
                                    return `${JSON.stringify(key)}:${$number(
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
                                        /^(value_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
                                    ).test(key)
                                )
                                    return `${JSON.stringify(key)}:${(() => {
                                        if ("string" === typeof value)
                                            return $string(value);
                                        if ("number" === typeof value)
                                            return $number(value);
                                        if ("boolean" === typeof value)
                                            return value;
                                        $throws({
                                            expected:
                                                "(boolean | number | string)",
                                            value: value,
                                        });
                                    })()}`;
                                if (
                                    RegExp(
                                        /^(between_(.*)_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
                                    ).test(key)
                                )
                                    return `${JSON.stringify(key)}:${value}`;
                                return "";
                            })
                            .filter((str: any) => "" !== str)
                            .join(",")}`,
                    )}}`;
                return $so0(input);
            };
            return stringify(assert(input));
        })(input),
    );
