import typia from "../../../src";

import { TagInfinite } from "../../structures/TagInfinite";
import { _test_isPrune } from "../../internal/_test_isPrune";

export const test_createIsPrune_TagInfinite = _test_isPrune(
    "TagInfinite",
    TagInfinite.generate,
    typia.createIsPrune<TagInfinite>(),
    TagInfinite.SPOILERS,
);
