import TSON from "../../../src";
import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_tag_object_union = _test_is_clone(
    "object union tag",
    TagObjectUnion.generate,
    (input) => TSON.isClone(input),
    TagObjectUnion.SPOILERS,
);
