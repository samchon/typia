import typia from "typia";

import { TagRange } from "../../structures/TagRange";
import { _test_isParse } from "../internal/_test_isParse";

export const test_createIsParse_TagRange = _test_isParse(
    "TagRange",
    TagRange.generate,
    typia.createIsParse<TagRange>(),
    TagRange.SPOILERS,
);
