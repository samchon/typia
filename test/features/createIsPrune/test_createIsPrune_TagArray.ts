import typia from "typia";

import { TagArray } from "../../structures/TagArray";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_createIsPrune_TagArray = _test_isPrune(
    "TagArray",
    TagArray.generate,
    typia.createIsPrune<TagArray>(),
    TagArray.SPOILERS,
);
