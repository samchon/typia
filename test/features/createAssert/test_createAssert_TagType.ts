import typia from "../../../src";

import { TagType } from "../../structures/TagType";
import { _test_assert } from "../../internal/_test_assert";

export const test_createAssert_TagType = _test_assert(
    "TagType",
    TagType.generate,
    typia.createAssert<TagType>(),
    TagType.SPOILERS,
);
