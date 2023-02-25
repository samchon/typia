import typia from "../../../src";
import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_stringify } from "../internal/_test_stringify";
export const test_createStringify_DynamicConstant = _test_stringify("DynamicConstant", DynamicConstant.generate, (input: DynamicConstant): string => {
    const $so0 = (input: any) => `{"a":${input.a},"b":${input.b},"c":${input.c},"d":${input.d}}`;
    return $so0(input);
});
