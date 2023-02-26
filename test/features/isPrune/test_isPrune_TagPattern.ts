import typia from "../../../src";
import { TagPattern } from "../../structures/TagPattern";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_isPrune_TagPattern = _test_isPrune(
    "TagPattern",
    TagPattern.generate,
    (input) => typia.isPrune(input),
    TagPattern.SPOILERS,
);
