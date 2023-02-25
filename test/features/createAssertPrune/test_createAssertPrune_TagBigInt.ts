import typia from "../../../src";

import { TagBigInt } from "../../structures/TagBigInt";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_createAssertPrune_TagBigInt = _test_assertPrune(
    "TagBigInt",
    TagBigInt.generate,
    typia.createAssertPrune<TagBigInt>(),
    TagBigInt.SPOILERS,
);
