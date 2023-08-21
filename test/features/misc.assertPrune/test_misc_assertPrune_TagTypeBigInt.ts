import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TagTypeBigInt } from "../../structures/TagTypeBigInt";

export const test_misc_assertPrune_TagTypeBigInt = _test_misc_assertPrune(
    "TagTypeBigInt",
)<TagTypeBigInt>(TagTypeBigInt)((input) =>
    typia.misc.assertPrune<TagTypeBigInt>(input),
);
