import typia from "../../../src";

import { TagStep } from "../../structures/TagStep";
import { _test_assert } from "../../internal/_test_assert";

export const test_assert_TagStep = _test_assert(
    "TagStep",
    TagStep.generate,
    (input) => typia.assert(input),
    TagStep.SPOILERS,
);
