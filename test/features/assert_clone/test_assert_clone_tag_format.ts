import TSON from "../../../src";
import { TagFormat } from "../../structures/TagFormat";
import { _test_assert_clone } from "./_test_assert_clone";

export const test_assert_clone_tag_format = _test_assert_clone(
    "format tag",
    TagFormat.generate,
    (input) => TSON.assertClone(input),
    TagFormat.SPOILERS,
);
