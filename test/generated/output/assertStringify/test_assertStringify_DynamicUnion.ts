import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { DynamicUnion } from "../../../structures/DynamicUnion";

export const test_assertStringify_DynamicUnion = _test_assertStringify(
    "DynamicUnion",
    DynamicUnion.generate,
    (input) =>
        ((input: any): string => {
            const assert = (input: any): DynamicUnion => {
                const $guard = (typia.assertStringify as any).guard;
                const $join = (typia.assertStringify as any).join;
                const __is = (input: any): input is DynamicUnion => {
                    const $join = (typia.assertStringify as any).join;
                    const $io0 = (input: any): boolean =>
                        Object.keys(input).every((key) => {
                            const value = input[key];
                            if (undefined === value) return true;
                            if (RegExp(/^-?\d+\.?\d*$/).test(key))
                                return "string" === typeof value;
                            if (RegExp(/^(prefix_(.*))/).test(key))
                                return "string" === typeof value;
                            if (RegExp(/((.*)_postfix)$/).test(key))
                                return "string" === typeof value;
                            if (
                                RegExp(
                                    /^(value_between_-?\d+\.?\d*_and_-?\d+\.?\d*)$/,
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
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is DynamicUnion => {
                        const $ao0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            false === _exceptionable ||
                            Object.keys(input).every((key) => {
                                const value = input[key];
                                if (undefined === value) return true;
                                if (RegExp(/^-?\d+\.?\d*$/).test(key))
                                    return (
                                        "string" === typeof value ||
                                        $guard(_exceptionable, {
                                            path: _path + $join(key),
                                            expected: "string",
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
                                        /^(value_between_-?\d+\.?\d*_and_-?\d+\.?\d*)$/,
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
                            (("object" === typeof input &&
                                null !== input &&
                                false === Array.isArray(input)) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "DynamicUnion",
                                    value: input,
                                })) &&
                            $ao0(input, _path + "", true)
                        );
                    })(input, "$input", true);
                return input;
            };
            const stringify = (input: DynamicUnion): string => {
                const $join = (typia.assertStringify as any).join;
                const $string = (typia.assertStringify as any).string;
                const $number = (typia.assertStringify as any).number;
                const $so0 = (input: any): any =>
                    `{${Object.entries(input)
                        .map(([key, value]: [string, any]) => {
                            if (undefined === value) return "";
                            if (RegExp(/^-?\d+\.?\d*$/).test(key))
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
                                    /^(value_between_-?\d+\.?\d*_and_-?\d+\.?\d*)$/,
                                ).test(key)
                            )
                                return `${JSON.stringify(key)}:${$number(
                                    value,
                                )}`;
                        })
                        .filter((str) => "" !== str)
                        .join(",")}}`;
                return $so0(input);
            };
            return stringify(assert(input));
        })(input),
    DynamicUnion.SPOILERS,
);
