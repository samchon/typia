import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { TagPattern } from "../../structures/TagPattern";

export const test_assertPrune_TagPattern = _test_assertPrune(
    "TagPattern",
    TagPattern.generate,
    (input) => typia.assertPrune<TagPattern>(input),
    TagPattern.SPOILERS,
);
