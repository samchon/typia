import TSON from "../../../src";
import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_assert_equals } from "../internal/_test_assert_equals";

export const test_assert_equals_tag_object_union = _test_assert_equals(
    "object union tag",
    TagObjectUnion.generate,
    (input) => TSON.assertEquals(input),
);
