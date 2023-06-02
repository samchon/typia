import typia from "../../../src";

import { TagArray } from "../../structures/TagArray";
import { _test_assertClone } from "../../internal/_test_assertClone";

export const test_assertClone_TagArray = _test_assertClone(
    "TagArray",
    TagArray.generate,
    (input) => typia.assertClone(input),
    TagArray.SPOILERS,
);
