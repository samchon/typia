import typia from "../../../../src";
import { _test_isPrune } from "../../../internal/_test_isPrune";
import { DynamicComposite } from "../../../structures/DynamicComposite";
export const test_isPrune_DynamicComposite = _test_isPrune("DynamicComposite", DynamicComposite.generate, (input) => ((input: any): input is DynamicComposite => { const is = (input: any): input is DynamicComposite => {
    const $join = (typia.isPrune as any).join;
    const $io0 = (input: any): boolean => "string" === typeof input.id && "string" === typeof input.name && Object.keys(input).every(key => {
        const value = input[key];
        if (undefined === value)
            return true;
        if (RegExp(/^-?\d+\.?\d*$/).test(key))
            return "number" === typeof value && Number.isFinite(value);
        if (RegExp(/^(prefix_(.*))/).test(key))
            return "string" === typeof value;
        if (RegExp(/((.*)_postfix)$/).test(key))
            return "string" === typeof value;
        if (RegExp(/^(value_-?\d+\.?\d*)$/).test(key))
            return "string" === typeof value || "number" === typeof value && Number.isFinite(value) || "boolean" === typeof value;
        if (RegExp(/^(between_(.*)_and_-?\d+\.?\d*)$/).test(key))
            return "boolean" === typeof value;
        return true;
    });
    return "object" === typeof input && null !== input && $io0(input);
}; const prune = (input: DynamicComposite): void => {
    const $join = (typia.isPrune as any).join;
    const $po0 = (input: any): any => {
        Object.entries(input).forEach(([key, value]) => {
            if (undefined === value)
                return;
            if ("id" === key)
                return;
            if ("name" === key)
                return;
            if (RegExp(/^-?\d+\.?\d*$/).test(key)) { }
            if (RegExp(/^(prefix_(.*))/).test(key)) { }
            if (RegExp(/((.*)_postfix)$/).test(key)) { }
            if (RegExp(/^(value_-?\d+\.?\d*)$/).test(key)) { }
            if (RegExp(/^(between_(.*)_and_-?\d+\.?\d*)$/).test(key)) { }
        });
        for (const key of Object.keys(input)) {
            if ("id" === key || "name" === key || RegExp(/^-?\d+\.?\d*$/).test(key) || RegExp(/^(prefix_(.*))/).test(key) || RegExp(/((.*)_postfix)$/).test(key) || RegExp(/^(value_-?\d+\.?\d*)$/).test(key) || RegExp(/^(between_(.*)_and_-?\d+\.?\d*)$/).test(key))
                continue;
            delete input[key];
        }
    };
    if ("object" === typeof input && null !== input)
        $po0(input);
}; if (!is(input))
    return false; prune(input); return true; })(input), DynamicComposite.SPOILERS);
