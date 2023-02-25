import typia from "../../../src";

import { TagStep } from "../../structures/TagStep";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_TagStep = _test_validateClone(
    "TagStep",
    TagStep.generate,
    (input) => typia.validateClone(input),
    TagStep.SPOILERS,
);
