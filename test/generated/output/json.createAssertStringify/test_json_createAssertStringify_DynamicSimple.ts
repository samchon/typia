import typia from "../../../../src";
import { _test_json_assertStringify } from "../../../internal/_test_json_assertStringify";
import { DynamicSimple } from "../../../structures/DynamicSimple";

export const test_json_assertStringify_DynamicSimple =
    _test_json_assertStringify(
        "DynamicSimple",
        DynamicSimple.generate,
        (input: any): string => {
            const assert = (input: any): DynamicSimple => {
                const __is = (input: any): input is DynamicSimple => {
                    const $join = (typia.json.createAssertStringify as any)
                        .join;
                    const $io0 = (input: any): boolean =>
                        Object.keys(input).every((key: any) => {
                            const value = input[key];
                            if (undefined === value) return true;
                            if (RegExp(/(.*)/).test(key))
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
                    ): input is DynamicSimple => {
                        const $guard = (typia.json.createAssertStringify as any)
                            .guard;
                        const $join = (typia.json.createAssertStringify as any)
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
                                    expected: "DynamicSimple",
                                    value: input,
                                })) &&
                                $ao0(input, _path + "", true)) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "DynamicSimple",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                return input;
            };
            const stringify = (input: DynamicSimple): string => {
                const $join = (typia.json.createAssertStringify as any).join;
                const $number = (typia.json.createAssertStringify as any)
                    .number;
                const $so0 = (input: any): any =>
                    `{${Object.entries(input)
                        .map(([key, value]: [string, any]) => {
                            if (undefined === value) return "";
                            return `${JSON.stringify(key)}:${$number(value)}`;
                        })
                        .filter((str: any) => "" !== str)
                        .join(",")}}`;
                return $so0(input);
            };
            return stringify(assert(input));
        },
        DynamicSimple.SPOILERS,
    );
