import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { TagRange } from "../../structures/TagRange";

export const test_createAssert_TagRange = _test_assert(
    "TagRange",
    TagRange.generate,
    typia.createAssert<TagRange>(),
    TagRange.SPOILERS,
);
