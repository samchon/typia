import typia from "../../../src";

import { TagInfinite } from "../../structures/TagInfinite";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_TagInfinite = _test_assert(
    "TagInfinite",
    TagInfinite.generate,
    typia.createAssert<TagInfinite>(),
    TagInfinite.SPOILERS,
);
