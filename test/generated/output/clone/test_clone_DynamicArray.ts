import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { DynamicArray } from "../../../structures/DynamicArray";

export const test_clone_DynamicArray = _test_clone(
    "DynamicArray",
    DynamicArray.generate,
    (input) =>
        ((input: DynamicArray): typia.Primitive<DynamicArray> => {
            const $join: any = (typia.clone as any).join;
            const $co0: any = (input: any): any => {
                const output: any = {} as any;
                for (const [key, value] of Object.entries(input)) {
                    if (RegExp(/(.*)/).test(key)) {
                        output[key] = Array.isArray(value)
                            ? (() => value.map((elem: any) => elem as any))()
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
