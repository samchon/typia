import typia from "../../../src";
import { ObjectDynamic } from "../../structures/ObjectDynamic";
import { _test_stringify } from "../internal/_test_stringify";
export const test_stringify_ObjectDynamic = _test_stringify("ObjectDynamic", ObjectDynamic.generate, (input) => ((input: ObjectDynamic): string => {
    const $join = (typia.stringify as any).join;
    const $string = (typia.stringify as any).string;
    const $number = (typia.stringify as any).number;
    const $throws = (typia.stringify as any).throws;
    const $so0 = (input: any) => `{${Object.entries(input).map(([key, value]) => { if (undefined === value)
        return ""; return `${JSON.stringify(key)}:${(() => {
        if ("string" === typeof value)
            return $string(value);
        if ("number" === typeof value)
            return $number(value);
        if ("boolean" === typeof value)
            return value;
        $throws({
            expected: "(boolean | number | string)",
            value: value
        });
    })()}`; }).filter(str => "" !== str).join(",")}}`;
    return $so0(input);
})(input));
