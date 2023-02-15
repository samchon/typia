import typia from "typia";

import { TagTuple } from "../../structures/TagTuple";
import { _test_is } from "../internal/_test_is";

export const test_is_TagTuple = _test_is(
    "TagTuple",
    TagTuple.generate,
    (input) => typia.is(input),
    TagTuple.SPOILERS,
);
