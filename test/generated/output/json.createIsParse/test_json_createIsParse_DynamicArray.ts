import typia from "../../../../src";
import { _test_json_isParse } from "../../../internal/_test_json_isParse";
import { DynamicArray } from "../../../structures/DynamicArray";

export const test_json_isParse_DynamicArray = _test_json_isParse(
    "DynamicArray",
)<DynamicArray>(DynamicArray)((input: any): typia.Primitive<DynamicArray> => {
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
    input = JSON.parse(input);
    return is(input) ? (input as any) : null;
});
