import TSON from "../../../src";
import { TagType } from "../../structures/TagType";
import { _test_assert_clone } from "./_test_assert_clone";

export const test_assert_clone_tag_type = _test_assert_clone(
    "type tag",
    TagType.generate,
    (input) => TSON.assertClone(input),
    TagType.SPOILERS,
);
