import typia from "typia";

import { TagTuple } from "../../structures/TagTuple";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_TagTuple = _test_assert(
    "TagTuple",
    TagTuple.generate,
    typia.createAssert<TagTuple>(),
    TagTuple.SPOILERS,
);
