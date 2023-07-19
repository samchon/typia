import typia from "../../../../src";
import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { DynamicArray } from "../../../structures/DynamicArray";

export const test_misc_clone_DynamicArray = _test_misc_clone<DynamicArray>(
    DynamicArray,
)((input) =>
    ((input: DynamicArray): typia.Primitive<DynamicArray> => {
        const $join = (typia.misc.clone as any).join;
        const $cp0 = (input: any) => input.map((elem: any) => elem as any);
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
    })(input),
);
