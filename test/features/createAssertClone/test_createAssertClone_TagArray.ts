import typia from "typia";

import { TagArray } from "../../structures/TagArray";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_TagArray = _test_assertClone(
    "TagArray",
    TagArray.generate,
    typia.createAssertClone<TagArray>(),
    TagArray.SPOILERS,
);
