import typia from "typia";

import { TagStep } from "../../structures/TagStep";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_validateParse_TagStep = _test_validateParse(
    "TagStep",
    TagStep.generate,
    (input) => typia.validateParse<TagStep>(input),
    TagStep.SPOILERS,
);
