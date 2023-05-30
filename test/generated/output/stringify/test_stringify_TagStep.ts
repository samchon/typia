import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { TagStep } from "../../../structures/TagStep";
export const test_stringify_TagStep = _test_stringify("TagStep", TagStep.generate, (input) => ((input: Array<TagStep.Type>): string => {
    const $number = (typia.stringify as any).number;
    const $so0 = (input: any): any => `{"exclusiveMinimum":${$number(input.exclusiveMinimum)},"minimum":${$number(input.minimum)},"range":${$number(input.range)},"multipleOf":${$number(input.multipleOf)}}`;
    return `[${input.map((elem: any) => $so0(elem)).join(",")}]`;
})(input));
