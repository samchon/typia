import TSON from "../../../src";
import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_assert_stringify } from "./_test_assert_stringify";

export const test_assert_stringify_tag_object_union = _test_assert_stringify(
    "object union tag",
    TagObjectUnion.generate,
    (input) => TSON.assertStringify(input),
    TagObjectUnion.SPOILERS,
);
