import TSON from "../../../src";
import { TagTuple } from "../../structures/TagTuple";
import { _test_assert_clone } from "./_test_assert_clone";

export const test_assert_clone_tag_tuple = _test_assert_clone(
    "tuple tag",
    TagTuple.generate,
    (input) => TSON.assertClone(input),
    TagTuple.SPOILERS,
);
