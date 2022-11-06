import TSON from "../../../src";
import { TagStep } from "../../structures/TagStep";
import { _test_is_clone } from "./../is_clone/_test_is_clone";

export const test_create_is_clone_tag_step = _test_is_clone(
    "step tag",
    TagStep.generate,
    TSON.createIsClone<TagStep>(),
    TagStep.SPOILERS,
);
