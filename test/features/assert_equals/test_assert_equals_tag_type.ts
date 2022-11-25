import TSON from "../../../src";
import { TagType } from "../../structures/TagType";
import { _test_assert_equals } from "../internal/_test_assert_equals";

export const test_assert_equals_tag_type = _test_assert_equals(
    "type tag",
    TagType.generate,
    (input) => TSON.assertEquals(input),
);
