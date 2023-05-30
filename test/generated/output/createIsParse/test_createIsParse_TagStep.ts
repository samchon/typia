import typia from "../../../../src";
import { _test_isParse } from "../../../internal/_test_isParse";
import { TagStep } from "../../../structures/TagStep";
export const test_createIsParse_TagStep = _test_isParse("TagStep", TagStep.generate, (input: any): typia.Primitive<TagStep> => { const is = (input: any): input is TagStep => {
    const $io0 = (input: any): boolean => "number" === typeof input.exclusiveMinimum && 0 === input.exclusiveMinimum % 5 - 3 && 3 < input.exclusiveMinimum && ("number" === typeof input.minimum && 0 === input.minimum % 5 - 3 && 3 <= input.minimum) && ("number" === typeof input.range && 0 === input.range % 5 - 0 && 0 < input.range && 100 > input.range) && ("number" === typeof input.multipleOf && 0 === input.multipleOf % 5 && 3 <= input.multipleOf && 99 >= input.multipleOf);
    return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem));
}; input = JSON.parse(input); return is(input) ? input as any : null; }, TagStep.SPOILERS);
