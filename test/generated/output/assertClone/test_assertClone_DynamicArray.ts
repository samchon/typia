import typia from "../../../../src";
import { _test_assertClone } from "../../../internal/_test_assertClone";
import { DynamicArray } from "../../../structures/DynamicArray";

export const test_assertClone_DynamicArray = _test_assertClone(
    "DynamicArray",
    DynamicArray.generate,
    (input) =>
        ((input: any): typia.Primitive<DynamicArray> => {
            const assert: any = (input: any): DynamicArray => {
                const __is: any = (input: any): input is DynamicArray => {
                    const $join: any = (typia.assertClone as any).join;
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
                const $guard: any = (typia.assertClone as any).guard;
                const $join: any = (typia.assertClone as any).join;
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
            const clone: any = (
                input: DynamicArray,
            ): typia.Primitive<DynamicArray> => {
                const $join: any = (typia.assertClone as any).join;
                const $co0: any = (input: any): any => {
                    const output: any = {} as any;
                    for (const [key, value] of Object.entries(input)) {
                        if (RegExp(/(.*)/).test(key)) {
                            output[key] = Array.isArray(value)
                                ? (() =>
                                      value.map((elem: any) => elem as any))()
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
            const output: any = clone(input);
            return output;
        })(input),
    DynamicArray.SPOILERS,
);
