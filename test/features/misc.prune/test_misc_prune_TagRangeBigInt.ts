import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { TagRangeBigInt } from "../../structures/TagRangeBigInt";

export const test_misc_prune_TagRangeBigInt = _test_misc_prune(
    "TagRangeBigInt",
)<TagRangeBigInt>(TagRangeBigInt)((input) =>
    typia.misc.prune<TagRangeBigInt>(input),
);
