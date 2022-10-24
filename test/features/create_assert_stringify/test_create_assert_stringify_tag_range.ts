import TSON from "../../../src";
import { TagRange } from "../../structures/TagRange";
import { _test_assert_stringify } from "./../assert_stringify/_test_assert_stringify";

export const test_create_assert_stringify_tag_range = _test_assert_stringify(
    "range tag",
    TagRange.generate,
    TSON.createAssertStringify<TagRange>(),
    TagRange.SPOILERS,
);
