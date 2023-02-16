import typia from "typia";

import { TagRange } from "../../structures/TagRange";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_TagRange = _test_assertClone(
    "TagRange",
    TagRange.generate,
    (input) => typia.assertClone(input),
    TagRange.SPOILERS,
);
