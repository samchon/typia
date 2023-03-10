import typia from "../../../../src";
import { _test_validateClone } from "../../../internal/_test_validateClone";
import { DynamicArray } from "../../../structures/DynamicArray";

export const test_validateClone_DynamicArray = _test_validateClone(
    "DynamicArray",
    DynamicArray.generate,
    (input) =>
        ((input: any): typia.IValidation<typia.Primitive<DynamicArray>> => {
            const validate = (input: any): typia.IValidation<DynamicArray> => {
                const errors = [] as any[];
                const $report = (typia.validateClone as any).report(errors);
                const $join = (typia.validateClone as any).join;
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is DynamicArray => {
                    const $vo0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            false === _exceptionable ||
                                Object.keys(input)
                                    .map((key) => {
                                        const value = input[key];
                                        if (undefined === value) return true;
                                        if (RegExp(/(.*)/).test(key))
                                            return (
                                                ((Array.isArray(value) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path + $join(key),
                                                        expected:
                                                            "Array<string>",
                                                        value: value,
                                                    })) &&
                                                    value
                                                        .map(
                                                            (
                                                                elem: any,
                                                                _index1: number,
                                                            ) =>
                                                                "string" ===
                                                                    typeof elem ||
                                                                $report(
                                                                    _exceptionable,
                                                                    {
                                                                        path:
                                                                            _path +
                                                                            $join(
                                                                                key,
                                                                            ) +
                                                                            "[" +
                                                                            _index1 +
                                                                            "]",
                                                                        expected:
                                                                            "string",
                                                                        value: elem,
                                                                    },
                                                                ),
                                                        )
                                                        .every(
                                                            (flag: boolean) =>
                                                                flag,
                                                        )) ||
                                                $report(_exceptionable, {
                                                    path: _path + $join(key),
                                                    expected: "Array<string>",
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
                                expected: "DynamicArray",
                                value: input,
                            })) &&
                            $vo0(input, _path + "", true)) ||
                        $report(true, {
                            path: _path + "",
                            expected: "DynamicArray",
                            value: input,
                        })
                    );
                })(input, "$input", true);
                const success = 0 === errors.length;
                return {
                    success,
                    errors,
                    data: success ? input : undefined,
                } as any;
            };
            const clone = (
                input: DynamicArray,
            ): typia.Primitive<DynamicArray> => {
                const $join = (typia.validateClone as any).join;
                const $co0 = (input: any): any => {
                    const output = {} as any;
                    for (const [key, value] of Object.entries(input)) {
                        if (RegExp(/(.*)/).test(key)) {
                            output[key] = Array.isArray(value)
                                ? value.map((elem: any) => elem as any)
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
            const output = validate(input) as any;
            if (output.success) output.data = clone(input);
            return output;
        })(input),
    DynamicArray.SPOILERS,
);
