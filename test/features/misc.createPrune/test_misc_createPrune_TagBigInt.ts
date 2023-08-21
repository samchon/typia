import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { TagBigInt } from "../../structures/TagBigInt";

export const test_misc_prune_TagBigInt = _test_misc_prune(
    "TagBigInt",
)<TagBigInt>(TagBigInt)(typia.misc.createPrune<TagBigInt>());
