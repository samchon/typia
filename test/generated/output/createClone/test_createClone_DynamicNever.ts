import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { DynamicNever } from "../../../structures/DynamicNever";
export const test_createClone_DynamicNever = _test_clone("DynamicNever", DynamicNever.generate, (input: DynamicNever): typia.Primitive<DynamicNever> => {
    const $join = (typia.createClone as any).join;
    const $co0 = (input: any): any => { const output = {} as any; for (const [key, value] of Object.entries(input)) {
        if (RegExp(/(.*)/).test(key)) {
            output[key] = value as any;
            continue;
        }
    } return output; };
    return "object" === typeof input && null !== input ? $co0(input) : input as any;
});
