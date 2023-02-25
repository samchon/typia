import typia from "../../../src";
import { ObjectDynamic } from "../../structures/ObjectDynamic";
import { _test_clone } from "../internal/_test_clone";
export const test_createClone_ObjectDynamic = _test_clone("ObjectDynamic", ObjectDynamic.generate, (input: ObjectDynamic): typia.Primitive<ObjectDynamic> => {
    const $join = (typia.createClone as any).join;
    const $co0 = (input: any) => { const output = {}; for (const [key, value] of Object.entries(input)) {
        if (RegExp(/(.*)/).test(key)) {
            output[key] = value;
            continue;
        }
    } return output; };
    return "object" === typeof input && null !== input ? $co0(input) : input;
});
