import TSON from "../../../src";
import { TagRange } from "../../structures/TagRange";
import { _test_assert_clone } from "./_test_assert_clone";

export const test_assert_clone_tag_range = _test_assert_clone(
    "range tag",
    TagRange.generate,
    (input) => TSON.assertClone(input),
    TagRange.SPOILERS,
);
