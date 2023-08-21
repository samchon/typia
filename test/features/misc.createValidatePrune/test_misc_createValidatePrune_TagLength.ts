import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TagLength } from "../../structures/TagLength";

export const test_misc_validatePrune_TagLength = _test_misc_validatePrune(
    "TagLength",
)<TagLength>(TagLength)(typia.misc.createValidatePrune<TagLength>());
