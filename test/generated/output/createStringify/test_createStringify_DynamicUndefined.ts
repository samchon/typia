import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { DynamicUndefined } from "../../../structures/DynamicUndefined";
export const test_createStringify_DynamicUndefined = _test_stringify("DynamicUndefined", DynamicUndefined.generate, (input: DynamicUndefined): string => {
    const $join = (typia.createStringify as any).join;
    const $so0 = (input: any): any => `{${Object.entries(input).map(([key, value]: [string, any]) => { if (undefined === value)
        return ""; return `${JSON.stringify(key)}:${undefined}`; }).filter(str => "" !== str).join(",")}}`;
    return $so0(input);
});
