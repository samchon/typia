import typia from "../../../src";
import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_stringify } from "../internal/_test_stringify";
export const test_createStringify_DynamicSimple = _test_stringify("DynamicSimple", DynamicSimple.generate, (input: DynamicSimple): string => {
    const $join = (typia.createStringify as any).join;
    const $so0 = (input: any) => `{${Object.entries(input).map(([key, value]) => { if (undefined === value)
        return ""; return `${JSON.stringify(key)}:${value}`; }).filter(str => "" !== str).join(",")}}`;
    return $so0(input);
});
