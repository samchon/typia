import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { DynamicTree } from "../../../structures/DynamicTree";

export const test_createAssertStringify_DynamicTree = _test_assertStringify(
    "DynamicTree",
    DynamicTree.generate,
    (input: any): string => {
        const assert: any = (input: any): DynamicTree => {
            const __is: any = (input: any): input is DynamicTree => {
                const $join: any = (typia.createAssertStringify as any).join;
                const $io0: any = (input: any): boolean =>
                    "string" === typeof input.id &&
                    "number" === typeof input.sequence &&
                    Number.isFinite(input.sequence) &&
                    "object" === typeof input.children &&
                    null !== input.children &&
                    false === Array.isArray(input.children) &&
                    $io1(input.children);
                const $io1: any = (input: any): boolean =>
                    Object.keys(input).every((key: any) => {
                        const value: any = input[key];
                        if (undefined === value) return true;
                        if (RegExp(/(.*)/).test(key))
                            return (
                                "object" === typeof value &&
                                null !== value &&
                                $io0(value)
                            );
                        return true;
                    });
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            const $guard: any = (typia.createAssertStringify as any).guard;
            const $join: any = (typia.createAssertStringify as any).join;
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is DynamicTree => {
                    const $ao0: any = (
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
                        (("number" === typeof input.sequence &&
                            Number.isFinite(input.sequence)) ||
                            $guard(_exceptionable, {
                                path: _path + ".sequence",
                                expected: "number",
                                value: input.sequence,
                            })) &&
                        (("object" === typeof input.children &&
                            null !== input.children &&
                            false === Array.isArray(input.children)) ||
                            $guard(_exceptionable, {
                                path: _path + ".children",
                                expected: "Record<string, DynamicTree>",
                                value: input.children,
                            })) &&
                        $ao1(
                            input.children,
                            _path + ".children",
                            true && _exceptionable,
                        );
                    const $ao1: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        false === _exceptionable ||
                        Object.keys(input).every((key: any) => {
                            const value: any = input[key];
                            if (undefined === value) return true;
                            if (RegExp(/(.*)/).test(key))
                                return (
                                    (("object" === typeof value &&
                                        null !== value) ||
                                        $guard(_exceptionable, {
                                            path: _path + $join(key),
                                            expected: "DynamicTree",
                                            value: value,
                                        })) &&
                                    $ao0(
                                        value,
                                        _path + $join(key),
                                        true && _exceptionable,
                                    )
                                );
                            return true;
                        });
                    return (
                        (("object" === typeof input && null !== input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "DynamicTree",
                                value: input,
                            })) &&
                        $ao0(input, _path + "", true)
                    );
                })(input, "$input", true);
            return input;
        };
        const stringify: any = (input: DynamicTree): string => {
            const $io0: any = (input: any): boolean =>
                "string" === typeof input.id &&
                "number" === typeof input.sequence &&
                "object" === typeof input.children &&
                null !== input.children &&
                false === Array.isArray(input.children) &&
                $io1(input.children);
            const $io1: any = (input: any): boolean =>
                Object.keys(input).every((key: any) => {
                    const value: any = input[key];
                    if (undefined === value) return true;
                    if (RegExp(/(.*)/).test(key))
                        return (
                            "object" === typeof value &&
                            null !== value &&
                            $io0(value)
                        );
                    return true;
                });
            const $string: any = (typia.createAssertStringify as any).string;
            const $number: any = (typia.createAssertStringify as any).number;
            const $join: any = (typia.createAssertStringify as any).join;
            const $so0: any = (input: any): any =>
                `{"id":${$string(input.id)},"sequence":${$number(
                    input.sequence,
                )},"children":${$so1(input.children)}}`;
            const $so1: any = (input: any): any =>
                `{${Object.entries(input)
                    .map(([key, value]: [string, any]) => {
                        if (undefined === value) return "";
                        return `${JSON.stringify(key)}:${$so0(value)}`;
                    })
                    .filter((str: any) => "" !== str)
                    .join(",")}}`;
            return $so0(input);
        };
        return stringify(assert(input));
    },
    DynamicTree.SPOILERS,
);
