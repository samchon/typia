import typia from "../../../src";
import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_stringify } from "../internal/_test_stringify";
export const test_stringify_DynamicConstant = _test_stringify("DynamicConstant", DynamicConstant.generate, (input) => ((input: DynamicConstant): string => {
    const $number = (typia.stringify as any).number;
    const $so0 = (input: any) => `{"a":${$number(input.a)},"b":${$number(input.b)},"c":${$number(input.c)},"d":${$number(input.d)}}`;
    return $so0(input);
})(input));
