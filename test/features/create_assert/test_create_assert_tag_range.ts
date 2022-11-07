import TSON from "../../../src";
import { TagRange } from "../../structures/TagRange";
import { _test_assert } from "./../assert/_test_assert";

export const test_create_assert_tag_range = _test_assert(
    "range tag",
    TagRange.generate,
    TSON.createAssert<TagRange>(),
    TagRange.SPOILERS,
);
