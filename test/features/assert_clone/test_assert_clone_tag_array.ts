import TSON from "../../../src";
import { TagArray } from "../../structures/TagArray";
import { _test_assert_clone } from "./_test_assert_clone";

export const test_assert_clone_tag_array = _test_assert_clone(
    "array tag",
    TagArray.generate,
    (input) => TSON.assertClone(input),
    TagArray.SPOILERS,
);
