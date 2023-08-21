import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TagRange } from "../../structures/TagRange";

export const test_misc_validatePrune_TagRange = _test_misc_validatePrune(
    "TagRange",
)<TagRange>(TagRange)((input) => typia.misc.validatePrune<TagRange>(input));
