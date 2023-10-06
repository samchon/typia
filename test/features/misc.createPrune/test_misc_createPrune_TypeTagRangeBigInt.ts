import typia from "../../../src";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_misc_createPrune_TypeTagRangeBigInt = _test_misc_prune(
    "TypeTagRangeBigInt",
)<TypeTagRangeBigInt>(
    TypeTagRangeBigInt
)(typia.misc.createPrune<TypeTagRangeBigInt>());
