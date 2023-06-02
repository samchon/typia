import typia from "../../../src";

import { TagPattern } from "../../structures/TagPattern";
import { _test_isPrune } from "../../internal/_test_isPrune";

export const test_createIsPrune_TagPattern = _test_isPrune(
    "TagPattern",
    TagPattern.generate,
    typia.createIsPrune<TagPattern>(),
    TagPattern.SPOILERS,
);
