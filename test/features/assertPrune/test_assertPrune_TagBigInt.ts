import typia from "typia";

import { TagBigInt } from "../../structures/TagBigInt";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_assertPrune_TagBigInt = _test_assertPrune(
    "TagBigInt",
    TagBigInt.generate,
    (input) => typia.assertPrune(input),
    TagBigInt.SPOILERS,
);
