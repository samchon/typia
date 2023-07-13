import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { TagStep } from "../../structures/TagStep";

export const test_misc_clone_TagStep = _test_misc_clone(
    "TagStep",
    TagStep.generate,
    typia.misc.createClone<TagStep>(),
);
