import TSON from "../../../src";
import { TagFormat } from "../../structures/TagFormat";
import { _test_assert_equals } from "./../assert_equals/_test_assert_equals";

export const test_create_assert_equals_tag_format = _test_assert_equals(
    "format tag",
    TagFormat.generate,
    TSON.createAssertEquals<TagFormat>(),
);
