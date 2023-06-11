import typia from "../../../src";

import { TagStep } from "../../structures/TagStep";
import { _test_assertClone } from "../../internal/_test_assertClone";

export const test_assertClone_TagStep = _test_assertClone(
    "TagStep",
    TagStep.generate,
    (input) => typia.assertClone(input),
    TagStep.SPOILERS,
);
