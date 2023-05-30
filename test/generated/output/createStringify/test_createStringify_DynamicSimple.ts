import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { DynamicSimple } from "../../../structures/DynamicSimple";
export const test_createStringify_DynamicSimple = _test_stringify("DynamicSimple", DynamicSimple.generate, (input: DynamicSimple): string => {
    const $join = (typia.createStringify as any).join;
    const $number = (typia.createStringify as any).number;
    const $so0 = (input: any): any => `{${Object.entries(input).map(([key, value]: [string, any]) => { if (undefined === value)
        return ""; return `${JSON.stringify(key)}:${$number(value)}`; }).filter(str => "" !== str).join(",")}}`;
    return $so0(input);
});
