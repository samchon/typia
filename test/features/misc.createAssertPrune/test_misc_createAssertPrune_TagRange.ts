import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TagRange } from "../../structures/TagRange";

export const test_misc_assertPrune_TagRange = _test_misc_assertPrune(
    "TagRange",
    TagRange.generate,
    typia.misc.createAssertPrune<TagRange>(),
    TagRange.SPOILERS,
);
