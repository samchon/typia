import TSON from "../../../src";
import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_is } from "./_test_is";

export const test_is_tag_object_union = _test_is(
    "object union tag",
    TagObjectUnion.generate,
    (input) => TSON.is(input),
    TagObjectUnion.SPOILERS,
);
