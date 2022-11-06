import TSON from "../../../src";
import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_is_clone } from "./../is_clone/_test_is_clone";

export const test_create_is_clone_tag_object_union = _test_is_clone(
    "object union tag",
    TagObjectUnion.generate,
    TSON.createIsClone<TagObjectUnion>(),
    TagObjectUnion.SPOILERS,
);
