import TSON from "../../../src";
import { TagRange } from "../../structures/TagRange";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_create_assert_type_tag_range = _test_assert_type(
    "range tag",
    TagRange.generate,
    TSON.createAssertType<TagRange>(),
    TagRange.SPOILERS,
);
