import TSON from "../../../src";
import { TagStep } from "../../structures/TagStep";
import { _test_clone } from "./_test_clone";

export const test_clone_tag_step = _test_clone(
    "step tag",
    TagStep.generate,
    (input) => TSON.clone(input),
);
