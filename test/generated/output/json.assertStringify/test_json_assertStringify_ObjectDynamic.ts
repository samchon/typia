import typia from "../../../../src";
import { _test_json_assertStringify } from "../../../internal/_test_json_assertStringify";
import { ObjectDynamic } from "../../../structures/ObjectDynamic";

export const test_json_assertStringify_ObjectDynamic =
    _test_json_assertStringify("ObjectDynamic")<ObjectDynamic>(ObjectDynamic)(
        (input) =>
            ((input: any): string => {
                const assert = (input: any): ObjectDynamic => {
                    const __is = (input: any): input is ObjectDynamic => {
                        const $io0 = (input: any): boolean =>
                            Object.keys(input).every((key: any) => {
                                const value = input[key];
                                if (undefined === value) return true;
                                if (RegExp(/(.*)/).test(key))
                                    return (
                                        "string" === typeof value ||
                                        ("number" === typeof value &&
                                            Number.isFinite(value)) ||
                                        "boolean" === typeof value
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
                        ): input is ObjectDynamic => {
                            const $guard = (typia.json.assertStringify as any)
                                .guard;
                            const $join = (typia.json.assertStringify as any)
                                .join;
                            const $ao0 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                false === _exceptionable ||
                                Object.keys(input).every((key: any) => {
                                    const value = input[key];
                                    if (undefined === value) return true;
                                    if (RegExp(/(.*)/).test(key))
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
                                    return true;
                                });
                            return (
                                ((("object" === typeof input &&
                                    null !== input &&
                                    false === Array.isArray(input)) ||
                                    $guard(true, {
                                        path: _path + "",
                                        expected: "ObjectDynamic",
                                        value: input,
                                    })) &&
                                    $ao0(input, _path + "", true)) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "ObjectDynamic",
                                    value: input,
                                })
                            );
                        })(input, "$input", true);
                    return input;
                };
                const stringify = (input: ObjectDynamic): string => {
                    const $string = (typia.json.assertStringify as any).string;
                    const $number = (typia.json.assertStringify as any).number;
                    const $throws = (typia.json.assertStringify as any).throws;
                    const $so0 = (input: any): any =>
                        `{${Object.entries(input)
                            .map(([key, value]: [string, any]) => {
                                if (undefined === value) return "";
                                return `${JSON.stringify(key)}:${(() => {
                                    if ("string" === typeof value)
                                        return $string(value);
                                    if ("number" === typeof value)
                                        return $number(value);
                                    if ("boolean" === typeof value)
                                        return value;
                                    $throws({
                                        expected: "(boolean | number | string)",
                                        value: value,
                                    });
                                })()}`;
                            })
                            .filter((str: any) => "" !== str)
                            .join(",")}}`;
                    return $so0(input);
                };
                return stringify(assert(input));
            })(input),
    );
