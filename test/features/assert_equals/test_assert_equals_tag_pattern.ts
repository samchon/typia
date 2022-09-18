import TSON from "../../../src";
import { TagPattern } from "../../structures/TagPattern";
import { _test_assert_equals } from "./_test_assert_equals";

export const test_assert_equals_tag_pattern = _test_assert_equals(
    "pattern tag",
    TagPattern.generate,
    (input) => TSON.assertEquals(input),
);
