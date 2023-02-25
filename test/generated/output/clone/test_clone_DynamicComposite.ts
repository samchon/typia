import typia from "../../../src";
import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_clone } from "../internal/_test_clone";
export const test_clone_DynamicComposite = _test_clone("DynamicComposite", DynamicComposite.generate, (input) => ((input: DynamicComposite): typia.Primitive<DynamicComposite> => {
    const $join = (typia.clone as any).join;
    const $co0 = (input: any) => { const output = {
        id: input.id,
        name: input.name
    }; for (const [key, value] of Object.entries(input)) {
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
