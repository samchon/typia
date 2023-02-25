import typia from "../../../src";
import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_equals } from "../internal/_test_equals";
export const test_createEquals_DynamicComposite = _test_equals("DynamicComposite", DynamicComposite.generate, (input: any, _exceptionable: boolean): input is DynamicComposite => {
    const $join = (typia.createEquals as any).join;
    const $io0 = (input: any, _exceptionable: boolean) => "string" === typeof input.id && "string" === typeof input.name && Object.keys(input).every(key => {
        if (["id", "name"].some(prop => key === prop))
            return true;
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
        return false;
    });
    return "object" === typeof input && null !== input && $io0(input, true);
});
