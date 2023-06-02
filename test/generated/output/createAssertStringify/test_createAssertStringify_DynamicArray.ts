import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { DynamicArray } from "../../../structures/DynamicArray";

export const test_createAssertStringify_DynamicArray = _test_assertStringify(
    "DynamicArray",
    DynamicArray.generate,
    (input: any): string => {
        const assert: any = (input: any): DynamicArray => {
            const __is: any = (input: any): input is DynamicArray => {
                const $join: any = (typia.createAssertStringify as any).join;
                const $io0: any = (input: any): boolean =>
                    Object.keys(input).every((key: any) => {
                        const value: any = input[key];
                        if (undefined === value) return true;
                        if (RegExp(/(.*)/).test(key))
                            return (
                                Array.isArray(value) &&
                                value.every(
                                    (elem: any) => "string" === typeof elem,
                                )
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
            const $guard: any = (typia.createAssertStringify as any).guard;
            const $join: any = (typia.createAssertStringify as any).join;
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is DynamicArray => {
                    const $ao0: any = (
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
                                    (Array.isArray(value) ||
                                        $guard(_exceptionable, {
                                            path: _path + $join(key),
                                            expected: "Array<string>",
                                            value: value,
                                        })) &&
                                    value.every(
                                        (elem: any, _index1: number) =>
                                            "string" === typeof elem ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    $join(key) +
                                                    "[" +
                                                    _index1 +
                                                    "]",
                                                expected: "string",
                                                value: elem,
                                            }),
                                    )
                                );
                            return true;
                        });
                    return (
                        (("object" === typeof input &&
                            null !== input &&
                            false === Array.isArray(input)) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "DynamicArray",
                                value: input,
                            })) &&
                        $ao0(input, _path + "", true)
                    );
                })(input, "$input", true);
            return input;
        };
        const stringify: any = (input: DynamicArray): string => {
            const $join: any = (typia.createAssertStringify as any).join;
            const $string: any = (typia.createAssertStringify as any).string;
            const $so0: any = (input: any): any =>
                `{${Object.entries(input)
                    .map(([key, value]: [string, any]) => {
                        if (undefined === value) return "";
                        return `${JSON.stringify(key)}:${(() =>
                            `[${value
                                .map((elem: any) => $string(elem))
                                .join(",")}]`)()}`;
                    })
                    .filter((str: any) => "" !== str)
                    .join(",")}}`;
            return $so0(input);
        };
        return stringify(assert(input));
    },
    DynamicArray.SPOILERS,
);
