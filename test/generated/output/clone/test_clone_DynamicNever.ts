import typia from "../../../src";
import { DynamicNever } from "../../structures/DynamicNever";
import { _test_clone } from "../internal/_test_clone";
export const test_clone_DynamicNever = _test_clone("DynamicNever", DynamicNever.generate, (input) => ((input: DynamicNever): typia.Primitive<DynamicNever> => {
    const $join = (typia.clone as any).join;
    const $co0 = (input: any) => { const output = {}; for (const [key, value] of Object.entries(input)) {
        if (RegExp(/(.*)/).test(key)) {
            output[key] = value;
            continue;
        }
    } return output; };
    return "object" === typeof input && null !== input ? $co0(input) : input;
})(input));
