import typia from "../../../src";

import { TagPattern } from "../../structures/TagPattern";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_TagPattern = _test_assert(
    "TagPattern",
    TagPattern.generate,
    typia.createAssert<TagPattern>(),
    TagPattern.SPOILERS,
);
