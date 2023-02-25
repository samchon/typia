import typia from "../../../src";
import { ToJsonArray } from "../../structures/ToJsonArray";
import { _test_stringify } from "../internal/_test_stringify";
export const test_stringify_ToJsonArray = _test_stringify("ToJsonArray", ToJsonArray.generate, (input) => ((input: ToJsonArray): string => {
    const $number = (typia.stringify as any).number;
    const $string = (typia.stringify as any).string;
    return `[${`[${input[0].toJSON().map((elem: any) => elem).join(",")}]`},${`[${input[1].toJSON().map((elem: any) => $number(elem)).join(",")}]`},${`[${input[2].toJSON().map((elem: any) => $string(elem)).join(",")}]`},${`[${input[3].toJSON().map((elem: any) => `{"id":${$string(elem.id)}}`).join(",")}]`}]`;
})(input));
