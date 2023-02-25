import typia from "../../../src";
import { DynamicNever } from "../../structures/DynamicNever";
import { _test_stringify } from "../internal/_test_stringify";
export const test_stringify_DynamicNever = _test_stringify("DynamicNever", DynamicNever.generate, (input) => ((input: DynamicNever): string => {
    const $join = (typia.stringify as any).join;
    const $so0 = (input: any) => `{${Object.entries(input).map(([key, value]) => { if (undefined === value)
        return ""; return `${JSON.stringify(key)}:${undefined}`; }).filter(str => "" !== str).join(",")}}`;
    return $so0(input);
})(input));
