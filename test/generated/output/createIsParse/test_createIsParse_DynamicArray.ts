import typia from "../../../../src";
import { _test_isParse } from "../../../internal/_test_isParse";
import { DynamicArray } from "../../../structures/DynamicArray";

export const test_createIsParse_DynamicArray = _test_isParse(
    "DynamicArray",
    DynamicArray.generate,
    (input: any): typia.Primitive<DynamicArray> => {
        const is: any = (input: any): input is DynamicArray => {
            const $join: any = (typia.createIsParse as any).join;
            const $io0: any = (input: any): boolean =>
                Object.keys(input).every((key: any) => {
                    const value: any = input[key];
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
        input = JSON.parse(input);
        return is(input) ? (input as any) : null;
    },
    DynamicArray.SPOILERS,
);
