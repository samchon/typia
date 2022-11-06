import TSON from "../../../src";
import { TagStep } from "../../structures/TagStep";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_tag_step = _test_is_clone(
    "step tag",
    TagStep.generate,
    (input) => TSON.isClone(input),
    TagStep.SPOILERS,
);
