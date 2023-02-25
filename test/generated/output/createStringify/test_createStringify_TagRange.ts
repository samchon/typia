import typia from "../../../src";
import { TagRange } from "../../structures/TagRange";
import { _test_stringify } from "../internal/_test_stringify";
export const test_createStringify_TagRange = _test_stringify("TagRange", TagRange.generate, (input: TagRange): string => {
    const $so0 = (input: any) => `{"greater":${input.greater},"greater_equal":${input.greater_equal},"less":${input.less},"less_equal":${input.less_equal},"greater_less":${input.greater_less},"greater_equal_less":${input.greater_equal_less},"greater_less_equal":${input.greater_less_equal},"greater_equal_less_equal":${input.greater_equal_less_equal}}`;
    return `[${input.map((elem: any) => $so0(elem)).join(",")}]`;
});
