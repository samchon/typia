import typia from "typia";

import { TagType } from "../../structures/TagType";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_TagType = _test_assert(
    "TagType",
    TagType.generate,
    (input) => typia.assert(input),
    TagType.SPOILERS,
);
