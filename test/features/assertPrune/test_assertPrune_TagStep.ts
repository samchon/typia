import typia from "typia";

import { TagStep } from "../../structures/TagStep";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_assertPrune_TagStep = _test_assertPrune(
    "TagStep",
    TagStep.generate,
    (input) => typia.assertPrune(input),
    TagStep.SPOILERS,
);
