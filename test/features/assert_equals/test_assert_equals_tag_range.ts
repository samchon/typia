import TSON from "../../../src";
import { TagRange } from "../../structures/TagRange";
import { _test_assert_equals } from "./_test_assert_equals";

export const test_assert_equals_tag_range = _test_assert_equals(
    "range tag",
    TagRange.generate,
    (input) => TSON.assertEquals(input),
);
