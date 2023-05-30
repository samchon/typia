import typia from "../../../../src";
import { _test_isParse } from "../../../internal/_test_isParse";
import { DynamicTemplate } from "../../../structures/DynamicTemplate";
export const test_createIsParse_DynamicTemplate = _test_isParse("DynamicTemplate", DynamicTemplate.generate, (input: any): typia.Primitive<DynamicTemplate> => { const is = (input: any): input is DynamicTemplate => {
    const $join = (typia.createIsParse as any).join;
    const $io0 = (input: any): boolean => Object.keys(input).every(key => {
        const value = input[key];
        if (undefined === value)
            return true;
        if (RegExp(/^(prefix_(.*))/).test(key))
            return "string" === typeof value;
        if (RegExp(/((.*)_postfix)$/).test(key))
            return "string" === typeof value;
        if (RegExp(/^(value_-?\d+\.?\d*)$/).test(key))
            return "number" === typeof value && Number.isFinite(value);
        if (RegExp(/^(between_(.*)_and_-?\d+\.?\d*)$/).test(key))
            return "boolean" === typeof value;
        return true;
    });
    return "object" === typeof input && null !== input && false === Array.isArray(input) && $io0(input);
}; input = JSON.parse(input); return is(input) ? input as any : null; }, DynamicTemplate.SPOILERS);
