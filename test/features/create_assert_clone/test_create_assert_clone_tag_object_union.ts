import TSON from "../../../src";
import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_assert_clone } from "./../assert_clone/_test_assert_clone";

export const test_create_assert_clone_tag_object_union = _test_assert_clone(
    "object union tag",
    TagObjectUnion.generate,
    TSON.createAssertClone<TagObjectUnion>(),
    TagObjectUnion.SPOILERS,
);
