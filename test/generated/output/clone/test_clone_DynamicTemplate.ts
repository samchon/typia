import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { DynamicTemplate } from "../../../structures/DynamicTemplate";
export const test_clone_DynamicTemplate = _test_clone("DynamicTemplate", DynamicTemplate.generate, (input) => ((input: DynamicTemplate): typia.Primitive<DynamicTemplate> => {
    const $join = (typia.clone as any).join;
    const $co0 = (input: any): any => { const output = {} as any; for (const [key, value] of Object.entries(input)) {
        if (RegExp(/^(prefix_(.*))/).test(key)) {
            output[key] = value as any;
            continue;
        }
        if (RegExp(/((.*)_postfix)$/).test(key)) {
            output[key] = value as any;
            continue;
        }
        if (RegExp(/^(value_-?\d+\.?\d*)$/).test(key)) {
            output[key] = value as any;
            continue;
        }
        if (RegExp(/^(between_(.*)_and_-?\d+\.?\d*)$/).test(key)) {
            output[key] = value as any;
            continue;
        }
    } return output; };
    return "object" === typeof input && null !== input ? $co0(input) : input as any;
})(input));
