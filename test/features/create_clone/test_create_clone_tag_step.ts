import TSON from "../../../src";
import { TagStep } from "../../structures/TagStep";
import { _test_clone } from "../internal/_test_clone";

export const test_create_clone_tag_step = _test_clone(
    "step tag",
    TagStep.generate,
    TSON.createClone<TagStep>(),
);
