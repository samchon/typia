import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TagRangeBigInt } from "../../structures/TagRangeBigInt";

export const test_misc_isPrune_TagRangeBigInt = _test_misc_isPrune(
    "TagRangeBigInt",
)<TagRangeBigInt>(TagRangeBigInt)((input) =>
    typia.misc.isPrune<TagRangeBigInt>(input),
);
