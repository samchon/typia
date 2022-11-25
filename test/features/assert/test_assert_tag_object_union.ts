import TSON from "../../../src";
import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_tag_object_union = _test_assert(
    "object union tag",
    TagObjectUnion.generate,
    (input) => TSON.assert(input),
    TagObjectUnion.SPOILERS,
);
