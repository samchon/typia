import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { DynamicArray } from "../../../structures/DynamicArray";

export const test_isClone_DynamicArray = _test_isClone(
    "DynamicArray",
    DynamicArray.generate,
    (input) =>
        ((input: any): typia.Primitive<DynamicArray> | null => {
            const is: any = (input: any): input is DynamicArray => {
                const $join: any = (typia.isClone as any).join;
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
            const clone: any = (
                input: DynamicArray,
            ): typia.Primitive<DynamicArray> => {
                const $join: any = (typia.isClone as any).join;
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
            if (!is(input)) return null;
            const output: any = clone(input);
            return output;
        })(input),
    DynamicArray.SPOILERS,
);
