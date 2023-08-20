import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { TagPattern } from "../../structures/TagPattern";

export const test_isPrune_TagPattern = _test_isPrune(
    "TagPattern",
    TagPattern.generate,
    (input) => typia.isPrune<TagPattern>(input),
    TagPattern.SPOILERS,
);
