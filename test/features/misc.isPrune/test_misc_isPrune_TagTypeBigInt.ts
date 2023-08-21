import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TagTypeBigInt } from "../../structures/TagTypeBigInt";

export const test_misc_isPrune_TagTypeBigInt = _test_misc_isPrune(
    "TagTypeBigInt",
)<TagTypeBigInt>(TagTypeBigInt)((input) =>
    typia.misc.isPrune<TagTypeBigInt>(input),
);
