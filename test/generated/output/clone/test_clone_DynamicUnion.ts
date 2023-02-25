import typia from "../../../src";
import { DynamicUnion } from "../../structures/DynamicUnion";
import { _test_clone } from "../internal/_test_clone";
export const test_clone_DynamicUnion = _test_clone("DynamicUnion", DynamicUnion.generate, (input) => ((input: DynamicUnion): typia.Primitive<DynamicUnion> => {
    const $join = (typia.clone as any).join;
    const $co0 = (input: any) => { const output = {}; for (const [key, value] of Object.entries(input)) {
        if (RegExp(/^-?\d+\.?\d*$/).test(key)) {
            output[key] = value;
            continue;
        }
        if (RegExp(/^(prefix_(.*))/).test(key)) {
            output[key] = value;
            continue;
        }
        if (RegExp(/((.*)_postfix)$/).test(key)) {
            output[key] = value;
            continue;
        }
        if (RegExp(/^(value_between_-?\d+\.?\d*_and_-?\d+\.?\d*)$/).test(key)) {
            output[key] = value;
            continue;
        }
    } return output; };
    return "object" === typeof input && null !== input ? $co0(input) : input;
})(input));
