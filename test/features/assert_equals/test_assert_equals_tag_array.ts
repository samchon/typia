import TSON from "../../../src";
import { TagArray } from "../../structures/TagArray";
import { _test_assert_equals } from "../internal/_test_assert_equals";

export const test_assert_equals_tag_array = _test_assert_equals(
    "array tag",
    TagArray.generate,
    (input) => TSON.assertEquals(input),
);
