import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { TagRange } from "../../structures/TagRange";

export const test_assertPrune_TagRange = _test_assertPrune(
    "TagRange",
    TagRange.generate,
    (input) => typia.assertPrune<TagRange>(input),
    TagRange.SPOILERS,
);
