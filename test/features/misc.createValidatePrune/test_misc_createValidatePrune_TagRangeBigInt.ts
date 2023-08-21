import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TagRangeBigInt } from "../../structures/TagRangeBigInt";

export const test_misc_validatePrune_TagRangeBigInt = _test_misc_validatePrune(
    "TagRangeBigInt",
)<TagRangeBigInt>(TagRangeBigInt)(
    typia.misc.createValidatePrune<TagRangeBigInt>(),
);
