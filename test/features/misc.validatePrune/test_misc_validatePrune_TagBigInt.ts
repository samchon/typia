import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TagBigInt } from "../../structures/TagBigInt";

export const test_misc_validatePrune_TagBigInt = _test_misc_validatePrune(
    "TagBigInt",
)<TagBigInt>(TagBigInt)((input) => typia.misc.validatePrune<TagBigInt>(input));
