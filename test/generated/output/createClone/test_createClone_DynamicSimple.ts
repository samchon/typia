import typia from "../../../src";
import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_clone } from "../internal/_test_clone";
export const test_createClone_DynamicSimple = _test_clone("DynamicSimple", DynamicSimple.generate, (input: DynamicSimple): typia.Primitive<DynamicSimple> => {
    const $join = (typia.createClone as any).join;
    const $co0 = (input: any) => { const output = {}; for (const [key, value] of Object.entries(input)) {
        if (RegExp(/(.*)/).test(key)) {
            output[key] = value;
            continue;
        }
    } return output; };
    return "object" === typeof input && null !== input ? $co0(input) : input;
});
