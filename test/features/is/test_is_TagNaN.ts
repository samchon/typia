import typia from "typia";

import { TagNaN } from "../../structures/TagNaN";
import { _test_is } from "../internal/_test_is";

export const test_is_TagNaN = _test_is(
    "TagNaN",
    TagNaN.generate,
    (input) => typia.is(input),
    TagNaN.SPOILERS,
);
