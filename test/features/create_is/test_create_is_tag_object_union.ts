import TSON from "../../../src";
import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_is } from "./../is/_test_is";

export const test_create_is_tag_object_union = _test_is(
    "object union tag",
    TagObjectUnion.generate,
    TSON.createIs<TagObjectUnion>(),
    TagObjectUnion.SPOILERS,
);
