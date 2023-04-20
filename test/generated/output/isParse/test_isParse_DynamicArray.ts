import typia from "../../../../src";
import { _test_isParse } from "../../../internal/_test_isParse";
import { DynamicArray } from "../../../structures/DynamicArray";

export const test_isParse_DynamicArray = _test_isParse(
    "DynamicArray",
    DynamicArray.generate,
    (input) =>
        ((input: any): typia.Primitive<DynamicArray> => {
            const is = (input: any): input is DynamicArray => {
                const $join = (typia.isParse as any).join;
                const $io0 = (input: any): boolean =>
                    Object.keys(input).every((key) => {
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
            input = JSON.parse(input);
            return is(input) ? (input as any) : null;
        })(input),
    DynamicArray.SPOILERS,
);
