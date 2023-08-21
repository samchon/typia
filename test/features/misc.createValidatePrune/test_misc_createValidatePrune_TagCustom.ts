import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TagCustom } from "../../structures/TagCustom";

export const test_misc_validatePrune_TagCustom = _test_misc_validatePrune(
    "TagCustom",
)<TagCustom>(TagCustom)(typia.misc.createValidatePrune<TagCustom>());
