import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { TagArray } from "../../structures/TagArray";

export const test_assertPrune_TagArray = _test_assertPrune(
    "TagArray",
    TagArray.generate,
    (input) => typia.assertPrune<TagArray>(input),
    TagArray.SPOILERS,
);
