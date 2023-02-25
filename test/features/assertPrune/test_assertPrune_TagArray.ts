import typia from "../../../src";
import { TagArray } from "../../structures/TagArray";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_assertPrune_TagArray = _test_assertPrune(
    "TagArray",
    TagArray.generate,
    (input) => typia.assertPrune(input),
    TagArray.SPOILERS,
);
