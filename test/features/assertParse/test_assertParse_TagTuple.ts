import typia from "typia";

import { TagTuple } from "../../structures/TagTuple";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_assertParse_TagTuple = _test_assertParse(
    "TagTuple",
    TagTuple.generate,
    (input) => typia.assertParse<TagTuple>(input),
    TagTuple.SPOILERS,
);
