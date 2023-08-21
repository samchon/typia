import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TagRangeBigInt } from "../../structures/TagRangeBigInt";

export const test_misc_assertPrune_TagRangeBigInt = _test_misc_assertPrune(
    "TagRangeBigInt",
)<TagRangeBigInt>(TagRangeBigInt)(
    typia.misc.createAssertPrune<TagRangeBigInt>(),
);
