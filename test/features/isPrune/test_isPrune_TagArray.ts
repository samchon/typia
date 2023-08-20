import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { TagArray } from "../../structures/TagArray";

export const test_isPrune_TagArray = _test_isPrune(
    "TagArray",
    TagArray.generate,
    (input) => typia.isPrune<TagArray>(input),
    TagArray.SPOILERS,
);
