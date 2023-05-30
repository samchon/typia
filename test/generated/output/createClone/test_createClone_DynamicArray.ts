import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { DynamicArray } from "../../../structures/DynamicArray";
export const test_createClone_DynamicArray = _test_clone("DynamicArray", DynamicArray.generate, (input: DynamicArray): typia.Primitive<DynamicArray> => {
    const $join = (typia.createClone as any).join;
    const $co0 = (input: any): any => { const output = {} as any; for (const [key, value] of Object.entries(input)) {
        if (RegExp(/(.*)/).test(key)) {
            output[key] = Array.isArray(value) ? value.map((elem: any) => elem as any) : value as any;
            continue;
        }
    } return output; };
    return "object" === typeof input && null !== input ? $co0(input) : input as any;
});
