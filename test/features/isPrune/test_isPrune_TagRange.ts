import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { TagRange } from "../../structures/TagRange";

export const test_isPrune_TagRange = _test_isPrune(
    "TagRange",
    TagRange.generate,
    (input) => typia.isPrune(input),
    TagRange.SPOILERS,
);
