import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { TagRangeBigInt } from "../../structures/TagRangeBigInt";

export const test_createAssertPrune_TagRangeBigInt = _test_assertPrune(
    "TagRangeBigInt",
    TagRangeBigInt.generate,
    typia.createAssertPrune<TagRangeBigInt>(),
    TagRangeBigInt.SPOILERS,
);
