import typia from "typia";

import { TagArray } from "../../structures/TagArray";
import { _test_is } from "../internal/_test_is";

export const test_is_TagArray = _test_is(
    "TagArray",
    TagArray.generate,
    (input) => typia.is(input),
    TagArray.SPOILERS,
);
