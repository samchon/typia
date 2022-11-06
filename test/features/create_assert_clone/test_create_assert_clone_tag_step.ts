import TSON from "../../../src";
import { TagStep } from "../../structures/TagStep";
import { _test_assert_clone } from "./../assert_clone/_test_assert_clone";

export const test_create_assert_clone_tag_step = _test_assert_clone(
    "step tag",
    TagStep.generate,
    TSON.createAssertClone<TagStep>(),
    TagStep.SPOILERS,
);
