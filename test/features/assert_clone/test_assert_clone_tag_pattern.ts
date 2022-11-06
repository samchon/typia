import TSON from "../../../src";
import { TagPattern } from "../../structures/TagPattern";
import { _test_assert_clone } from "./_test_assert_clone";

export const test_assert_clone_tag_pattern = _test_assert_clone(
    "pattern tag",
    TagPattern.generate,
    (input) => TSON.assertClone(input),
    TagPattern.SPOILERS,
);
