import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { TagRange } from "../../structures/TagRange";

export const test_createAssertStringify_TagRange = _test_assertStringify(
    "TagRange",
    TagRange.generate,
    typia.createAssertStringify<TagRange>(),
    TagRange.SPOILERS,
);
