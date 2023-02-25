import typia from "../../../src";
import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_isClone } from "../internal/_test_isClone";
export const test_isClone_DynamicComposite = _test_isClone("DynamicComposite", DynamicComposite.generate, (input) => ((input: any): typia.Primitive<DynamicComposite> | null => { const is = (input: any): input is DynamicComposite => {
    const $join = (typia.isClone as any).join;
    const $io0 = (input: any) => "string" === typeof input.id && "string" === typeof input.name && Object.keys(input).every(key => {
        const value = input[key];
        if (undefined === value)
            return true;
        if (RegExp(/^-?\d+\.?\d*$/).test(key))
            return "number" === typeof value;
        if (RegExp(/^(prefix_(.*))/).test(key))
            return "string" === typeof value;
        if (RegExp(/((.*)_postfix)$/).test(key))
            return "string" === typeof value;
        if (RegExp(/^(value_-?\d+\.?\d*)$/).test(key))
            return "string" === typeof value || "number" === typeof value || "boolean" === typeof value;
        if (RegExp(/^(between_(.*)_and_-?\d+\.?\d*)$/).test(key))
            return "boolean" === typeof value;
        return true;
    });
    return "object" === typeof input && null !== input && $io0(input);
}; const clone = (input: DynamicComposite): typia.Primitive<DynamicComposite> => {
    const $join = (typia.isClone as any).join;
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
}; if (!is(input))
    return null; const output = clone(input); return output; })(input), DynamicComposite.SPOILERS);
