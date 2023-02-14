import typia from "../../../src";
import { TagPattern } from "../../structures/TagPattern";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_assertPrune_TagPattern = _test_assertPrune(
    "TagPattern",
    TagPattern.generate,
    (input) => typia.assertPrune(input),
    TagPattern.SPOILERS,
);