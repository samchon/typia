import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { DynamicComposite } from "../../../structures/DynamicComposite";
export const test_equals_DynamicComposite = _test_equals("DynamicComposite", DynamicComposite.generate, (input) => ((input: any, _exceptionable: boolean = true): input is DynamicComposite => {
    const $join = (typia.equals as any).join;
    const $io0 = (input: any, _exceptionable: boolean = true): boolean => "string" === typeof input.id && "string" === typeof input.name && Object.keys(input).every(key => {
        if (["id", "name"].some(prop => key === prop))
            return true;
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
        return false;
    });
    return "object" === typeof input && null !== input && $io0(input, true);
})(input));
