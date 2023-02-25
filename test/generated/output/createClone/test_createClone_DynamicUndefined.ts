import typia from "../../../src";
import { DynamicUndefined } from "../../structures/DynamicUndefined";
import { _test_clone } from "../internal/_test_clone";
export const test_createClone_DynamicUndefined = _test_clone("DynamicUndefined", DynamicUndefined.generate, (input: DynamicUndefined): typia.Primitive<DynamicUndefined> => {
    const $join = (typia.createClone as any).join;
    const $co0 = (input: any) => { const output = {}; for (const [key, value] of Object.entries(input)) {
        if (RegExp(/(.*)/).test(key)) {
            output[key] = value;
            continue;
        }
    } return output; };
    return "object" === typeof input && null !== input ? $co0(input) : input;
});
