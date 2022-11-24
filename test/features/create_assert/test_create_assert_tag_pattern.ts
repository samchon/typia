import TSON from "../../../src";
import { TagPattern } from "../../structures/TagPattern";
import { _test_assert } from "../internal/_test_assert";

export const test_create_assert_tag_pattern = _test_assert(
    "pattern tag",
    TagPattern.generate,
    TSON.createAssert<TagPattern>(),
    TagPattern.SPOILERS,
);
