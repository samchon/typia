import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TagTypeBigInt } from "../../structures/TagTypeBigInt";

export const test_misc_validatePrune_TagTypeBigInt = _test_misc_validatePrune(
    "TagTypeBigInt",
)<TagTypeBigInt>(TagTypeBigInt)(
    typia.misc.createValidatePrune<TagTypeBigInt>(),
);
