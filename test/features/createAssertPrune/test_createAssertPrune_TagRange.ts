import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { TagRange } from "../../structures/TagRange";

export const test_createAssertPrune_TagRange = _test_assertPrune(
    "TagRange",
    TagRange.generate,
    typia.createAssertPrune<TagRange>(),
    TagRange.SPOILERS,
);
