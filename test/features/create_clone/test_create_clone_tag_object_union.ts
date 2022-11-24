import TSON from "../../../src";
import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_clone } from "../internal/_test_clone";

export const test_create_clone_tag_object_union = _test_clone(
    "object union tag",
    TagObjectUnion.generate,
    TSON.createClone<TagObjectUnion>(),
);
