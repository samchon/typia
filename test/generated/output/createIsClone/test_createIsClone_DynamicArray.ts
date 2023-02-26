import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { DynamicArray } from "../../../structures/DynamicArray";

export const test_createIsClone_DynamicArray = _test_isClone(
    "DynamicArray",
    DynamicArray.generate,
    (input: any): typia.Primitive<DynamicArray> | null => {
        const is = (input: any): input is DynamicArray => {
            const $join = (typia.createIsClone as any).join;
            const $io0 = (input: any): boolean =>
                Object.keys(input).every((key) => {
                    const value = input[key];
                    if (undefined === value) return true;
                    if (RegExp(/(.*)/).test(key))
                        return (
                            Array.isArray(value) &&
                            value.every((elem: any) => "string" === typeof elem)
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
        const clone = (input: DynamicArray): typia.Primitive<DynamicArray> => {
            const $join = (typia.createIsClone as any).join;
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
        if (!is(input)) return null;
        const output = clone(input);
        return output;
    },
    DynamicArray.SPOILERS,
);
