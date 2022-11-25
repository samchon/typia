import TSON from "../../../src";
import { TagRange } from "../../structures/TagRange";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_TagRange = _test_assert(
    "TagRange",
    TagRange.generate,
    TSON.createAssert<TagRange>(),
    TagRange.SPOILERS,
);
