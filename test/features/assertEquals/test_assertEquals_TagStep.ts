import typia from "typia";

import { TagStep } from "../../structures/TagStep";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_TagStep = _test_assertEquals(
    "TagStep",
    TagStep.generate,
    (input) => typia.assertEquals(input),
);
