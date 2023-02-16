import typia from "typia";

import { TagType } from "../../structures/TagType";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_TagType = _test_assertClone(
    "TagType",
    TagType.generate,
    (input) => typia.assertClone(input),
    TagType.SPOILERS,
);
