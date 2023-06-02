import typia from "../../../src";

import { TagStep } from "../../structures/TagStep";
import { _test_clone } from "../../internal/_test_clone";

export const test_clone_TagStep = _test_clone(
    "TagStep",
    TagStep.generate,
    (input) => typia.clone(input),
);
