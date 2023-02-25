import typia from "../../../src";
import { DynamicUndefined } from "../../structures/DynamicUndefined";
import { _test_stringify } from "../internal/_test_stringify";
export const test_stringify_DynamicUndefined = _test_stringify("DynamicUndefined", DynamicUndefined.generate, (input) => ((input: DynamicUndefined): string => {
    const $join = (typia.stringify as any).join;
    const $so0 = (input: any) => `{${Object.entries(input).map(([key, value]) => { if (undefined === value)
        return ""; return `${JSON.stringify(key)}:${undefined}`; }).filter(str => "" !== str).join(",")}}`;
    return $so0(input);
})(input));
