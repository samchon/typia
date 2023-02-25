import typia from "../../../src";

import { TagRange } from "../../structures/TagRange";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_TagRange = _test_assertStringify(
    "TagRange",
    TagRange.generate,
    typia.createAssertStringify<TagRange>(),
    TagRange.SPOILERS,
);
