import typia from "../../../../src";
import { _test_assertClone } from "../../../internal/_test_assertClone";
import { DynamicArray } from "../../../structures/DynamicArray";

export const test_assertClone_DynamicArray = _test_assertClone(
    "DynamicArray",
    DynamicArray.generate,
    (input) =>
        ((input: any): typia.Primitive<DynamicArray> => {
            const assert = (input: any): DynamicArray => {
                const __is = (input: any): input is DynamicArray => {
                    const $join = (typia.assertClone as any).join;
                    const $io0 = (input: any): boolean =>
                        Object.keys(input).every((key: any) => {
                            const value = input[key];
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
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is DynamicArray => {
                        const $guard = (typia.assertClone as any).guard;
                        const $join = (typia.assertClone as any).join;
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
                                        ((Array.isArray(value) ||
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
                                            )) ||
                                        $guard(_exceptionable, {
                                            path: _path + $join(key),
                                            expected: "Array<string>",
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
                                    expected: "DynamicArray",
                                    value: input,
                                })) &&
                                $ao0(input, _path + "", true)) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "DynamicArray",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                return input;
            };
            const clone = (
                input: DynamicArray,
            ): typia.Primitive<DynamicArray> => {
                const $join = (typia.assertClone as any).join;
                const $cp0 = (input: any) =>
                    input.map((elem: any) => elem as any);
                const $co0 = (input: any): any => {
                    const output = {} as any;
                    for (const [key, value] of Object.entries(input)) {
                        if (RegExp(/(.*)/).test(key)) {
                            output[key] = Array.isArray(value)
                                ? $cp0(value)
                                : (value as any);
                            continue;
                        }
                    }
                    return output;
                };
                return "object" === typeof input && null !== input
                    ? $co0(input)
                    : (input as any);
            };
            assert(input);
            const output = clone(input);
            return output;
        })(input),
    DynamicArray.SPOILERS,
);
