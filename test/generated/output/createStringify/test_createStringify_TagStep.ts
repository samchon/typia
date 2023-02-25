import typia from "../../../src";
import { TagStep } from "../../structures/TagStep";
import { _test_stringify } from "../internal/_test_stringify";
export const test_createStringify_TagStep = _test_stringify("TagStep", TagStep.generate, (input: TagStep): string => {
    const $so0 = (input: any) => `{"exclusiveMinimum":${input.exclusiveMinimum},"minimum":${input.minimum},"range":${input.range},"multipleOf":${input.multipleOf}}`;
    return `[${input.map((elem: any) => $so0(elem)).join(",")}]`;
});
