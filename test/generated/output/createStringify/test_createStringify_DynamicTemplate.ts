import typia from "../../../src";
import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_stringify } from "../internal/_test_stringify";
export const test_createStringify_DynamicTemplate = _test_stringify("DynamicTemplate", DynamicTemplate.generate, (input: DynamicTemplate): string => {
    const $join = (typia.createStringify as any).join;
    const $string = (typia.createStringify as any).string;
    const $so0 = (input: any) => `{${Object.entries(input).map(([key, value]) => { if (undefined === value)
        return ""; if (RegExp(/^(prefix_(.*))/).test(key))
        return `${JSON.stringify(key)}:${$string(value)}`; if (RegExp(/((.*)_postfix)$/).test(key))
        return `${JSON.stringify(key)}:${$string(value)}`; if (RegExp(/^(value_-?\d+\.?\d*)$/).test(key))
        return `${JSON.stringify(key)}:${value}`; if (RegExp(/^(between_(.*)_and_-?\d+\.?\d*)$/).test(key))
        return `${JSON.stringify(key)}:${value}`; }).filter(str => "" !== str).join(",")}}`;
    return $so0(input);
});
