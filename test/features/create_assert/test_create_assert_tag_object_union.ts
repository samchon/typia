import TSON from "../../../src";
import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_assert } from "./../assert/_test_assert";

export const test_create_assert_tag_object_union = _test_assert(
    "object union tag",
    TagObjectUnion.generate,
    TSON.createAssert<TagObjectUnion>(),
    TagObjectUnion.SPOILERS,
);
