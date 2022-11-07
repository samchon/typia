import TSON from "../../../src";
import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_assert_type } from "./_test_assert_type";

export const test_assert_type_tag_object_union = _test_assert_type(
    "object union tag",
    TagObjectUnion.generate,
    (input) => TSON.assertType(input),
    TagObjectUnion.SPOILERS,
);
