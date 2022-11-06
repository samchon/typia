import TSON from "../../../src";
import { TagStep } from "../../structures/TagStep";
import { _test_assert_clone } from "./_test_assert_clone";

export const test_assert_clone_tag_step = _test_assert_clone(
    "step tag",
    TagStep.generate,
    (input) => TSON.assertClone(input),
    TagStep.SPOILERS,
);
