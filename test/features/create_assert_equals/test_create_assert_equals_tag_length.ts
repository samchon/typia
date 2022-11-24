import TSON from "../../../src";
import { TagLength } from "../../structures/TagLength";
import { _test_assert_equals } from "../internal/_test_assert_equals";

export const test_create_assert_equals_tag_length = _test_assert_equals(
    "length tag",
    TagLength.generate,
    TSON.createAssertEquals<TagLength>(),
);
