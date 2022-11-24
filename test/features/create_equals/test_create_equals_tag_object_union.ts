import TSON from "../../../src";
import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_equals } from "../internal/_test_equals";

export const test_create_equals_tag_object_union = _test_equals(
    "object union tag",
    TagObjectUnion.generate,
    TSON.createEquals<TagObjectUnion>(),
);
