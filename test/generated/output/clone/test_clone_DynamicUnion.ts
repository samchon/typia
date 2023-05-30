import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { DynamicUnion } from "../../../structures/DynamicUnion";
export const test_clone_DynamicUnion = _test_clone("DynamicUnion", DynamicUnion.generate, (input) => ((input: DynamicUnion): typia.Primitive<DynamicUnion> => {
    const $join = (typia.clone as any).join;
    const $co0 = (input: any): any => { const output = {} as any; for (const [key, value] of Object.entries(input)) {
        if (RegExp(/^-?\d+\.?\d*$/).test(key)) {
            output[key] = value as any;
            continue;
        }
        if (RegExp(/^(prefix_(.*))/).test(key)) {
            output[key] = value as any;
            continue;
        }
        if (RegExp(/((.*)_postfix)$/).test(key)) {
            output[key] = value as any;
            continue;
        }
        if (RegExp(/^(value_between_-?\d+\.?\d*_and_-?\d+\.?\d*)$/).test(key)) {
            output[key] = value as any;
            continue;
        }
    } return output; };
    return "object" === typeof input && null !== input ? $co0(input) : input as any;
})(input));
