import typia from "../../../src";
import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_clone } from "../internal/_test_clone";
export const test_clone_DynamicTemplate = _test_clone("DynamicTemplate", DynamicTemplate.generate, (input) => ((input: DynamicTemplate): typia.Primitive<DynamicTemplate> => {
    const $join = (typia.clone as any).join;
    const $co0 = (input: any) => { const output = {}; for (const [key, value] of Object.entries(input)) {
        if (RegExp(/^(prefix_(.*))/).test(key)) {
            output[key] = value;
            continue;
        }
        if (RegExp(/((.*)_postfix)$/).test(key)) {
            output[key] = value;
            continue;
        }
        if (RegExp(/^(value_-?\d+\.?\d*)$/).test(key)) {
            output[key] = value;
            continue;
        }
        if (RegExp(/^(between_(.*)_and_-?\d+\.?\d*)$/).test(key)) {
            output[key] = value;
            continue;
        }
    } return output; };
    return "object" === typeof input && null !== input ? $co0(input) : input;
})(input));
