import typia from "../../../src";

import { TagInfinite } from "../../structures/TagInfinite";
import { _test_assertPrune } from "../../internal/_test_assertPrune";

export const test_createAssertPrune_TagInfinite = _test_assertPrune(
    "TagInfinite",
    TagInfinite.generate,
    typia.createAssertPrune<TagInfinite>(),
    TagInfinite.SPOILERS,
);
