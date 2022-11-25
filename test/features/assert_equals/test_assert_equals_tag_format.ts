import TSON from "../../../src";
import { TagFormat } from "../../structures/TagFormat";
import { _test_assert_equals } from "../internal/_test_assert_equals";

export const test_assert_equals_tag_format = _test_assert_equals(
    "format tag",
    TagFormat.generate,
    (input) => TSON.assertEquals(input),
);
