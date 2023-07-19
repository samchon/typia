import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TagBigInt } from "../../structures/TagBigInt";

export const test_misc_isPrune_TagBigInt = _test_misc_isPrune<TagBigInt>(
    TagBigInt,
)((input) => typia.misc.isPrune(input));
