import TSON from "../../../src";
import { TagPattern } from "../../structures/TagPattern";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_create_assert_stringify_tag_pattern = _test_assert_stringify(
    "pattern tag",
    TagPattern.generate,
    TSON.createAssertStringify<TagPattern>(),
    TagPattern.SPOILERS,
);
