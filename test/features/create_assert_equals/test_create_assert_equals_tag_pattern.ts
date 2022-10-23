import TSON from "../../../src";
import { TagPattern } from "../../structures/TagPattern";
import { _test_assert_equals } from "./../assert_equals/_test_assert_equals";

export const test_create_assert_equals_tag_pattern = _test_assert_equals(
    "pattern tag",
    TagPattern.generate,
    TSON.createAssertEquals<TagPattern>(),
);
