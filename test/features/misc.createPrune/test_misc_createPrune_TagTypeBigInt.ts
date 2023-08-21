import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { TagTypeBigInt } from "../../structures/TagTypeBigInt";

export const test_misc_prune_TagTypeBigInt = _test_misc_prune(
    "TagTypeBigInt",
)<TagTypeBigInt>(TagTypeBigInt)(typia.misc.createPrune<TagTypeBigInt>());
