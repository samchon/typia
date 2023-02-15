import typia from "typia";

import { TagPattern } from "../../structures/TagPattern";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_TagPattern = _test_assertClone(
    "TagPattern",
    TagPattern.generate,
    (input) => typia.assertClone(input),
    TagPattern.SPOILERS,
);
