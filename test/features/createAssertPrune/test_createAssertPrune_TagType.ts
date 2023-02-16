import typia from "typia";

import { TagType } from "../../structures/TagType";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_createAssertPrune_TagType = _test_assertPrune(
    "TagType",
    TagType.generate,
    typia.createAssertPrune<TagType>(),
    TagType.SPOILERS,
);
