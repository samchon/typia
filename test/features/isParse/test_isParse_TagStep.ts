import typia from "../../../src";

import { TagStep } from "../../structures/TagStep";
import { _test_isParse } from "../../internal/_test_isParse";

export const test_isParse_TagStep = _test_isParse(
    "TagStep",
    TagStep.generate,
    (input) => typia.isParse<TagStep>(input),
    TagStep.SPOILERS,
);
