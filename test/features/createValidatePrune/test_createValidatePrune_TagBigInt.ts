import typia from "../../../src";

import { TagBigInt } from "../../structures/TagBigInt";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_createValidatePrune_TagBigInt = _test_validatePrune(
    "TagBigInt",
    TagBigInt.generate,
    typia.createValidatePrune<TagBigInt>(),
    TagBigInt.SPOILERS,
);
