import TSON from "../../../src";
import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_create_assert_type_tag_object_union = _test_assert_type(
    "object union tag",
    TagObjectUnion.generate,
    TSON.createAssertType<TagObjectUnion>(),
    TagObjectUnion.SPOILERS,
);
