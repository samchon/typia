import typia from "../../../src";
import { DynamicArray } from "../../structures/DynamicArray";
import { _test_clone } from "../internal/_test_clone";
export const test_clone_DynamicArray = _test_clone("DynamicArray", DynamicArray.generate, (input) => ((input: DynamicArray): typia.Primitive<DynamicArray> => {
    const $join = (typia.clone as any).join;
    const $co0 = (input: any) => { const output = {}; for (const [key, value] of Object.entries(input)) {
        if (RegExp(/(.*)/).test(key)) {
            output[key] = Array.isArray(value) ? value.map((elem: any) => elem) : value;
            continue;
        }
    } return output; };
    return "object" === typeof input && null !== input ? $co0(input) : input;
})(input));
