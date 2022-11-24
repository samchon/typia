import TSON from "../../../src";
import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_create_is_stringify_tag_object_union = _test_is_stringify(
    "object union tag",
    TagObjectUnion.generate,
    TSON.createIsStringify<TagObjectUnion>(),
    TagObjectUnion.SPOILERS,
);
