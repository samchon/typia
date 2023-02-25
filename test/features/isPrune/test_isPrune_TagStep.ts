import typia from "../../../src";

import { TagStep } from "../../structures/TagStep";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_isPrune_TagStep = _test_isPrune(
    "TagStep",
    TagStep.generate,
    (input) => typia.isPrune(input),
    TagStep.SPOILERS,
);
