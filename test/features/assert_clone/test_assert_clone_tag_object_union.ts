import TSON from "../../../src";
import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_assert_clone } from "./_test_assert_clone";

export const test_assert_clone_tag_object_union = _test_assert_clone(
    "object union tag",
    TagObjectUnion.generate,
    (input) => TSON.assertClone(input),
    TagObjectUnion.SPOILERS,
);
