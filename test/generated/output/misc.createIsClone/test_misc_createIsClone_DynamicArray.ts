import typia from "../../../../src";
import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { DynamicArray } from "../../../structures/DynamicArray";

export const test_misc_isClone_DynamicArray = _test_misc_isClone(
    "DynamicArray",
)<DynamicArray>(DynamicArray)(
    (input: any): typia.Resolved<DynamicArray> | null => {
        const is = (input: any): input is DynamicArray => {
            const $io0 = (input: any): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                false === Array.isArray(input.value) &&
                $io1(input.value);
            const $io1 = (input: any): boolean =>
                Object.keys(input).every((key: any) => {
                    const value = input[key];
                    if (undefined === value) return true;
                    if (RegExp(/(.*)/).test(key))
                        return (
                            Array.isArray(value) &&
                            value.every((elem: any) => "string" === typeof elem)
                        );
                    return true;
                });
            return "object" === typeof input && null !== input && $io0(input);
        };
        const clone = (input: DynamicArray): typia.Resolved<DynamicArray> => {
            const $io1 = (input: any): boolean =>
                Object.keys(input).every((key: any) => {
                    const value = input[key];
                    if (undefined === value) return true;
                    if (RegExp(/(.*)/).test(key))
                        return (
                            Array.isArray(value) &&
                            value.every((elem: any) => "string" === typeof elem)
                        );
                    return true;
                });
            const $cp0 = (input: any) => input.map((elem: any) => elem as any);
            const $co0 = (input: any): any => ({
                value:
                    "object" === typeof input.value && null !== input.value
                        ? $co1(input.value)
                        : (input.value as any),
            });
            const $co1 = (input: any): any => {
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
        if (!is(input)) return null;
        const output = clone(input);
        return output;
    },
);
