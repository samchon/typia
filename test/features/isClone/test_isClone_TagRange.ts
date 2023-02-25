import typia from "../../../src";
import { TagRange } from "../../structures/TagRange";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_TagRange = _test_isClone(
    "TagRange",
    TagRange.generate,
    (input) => typia.isClone(input),
    TagRange.SPOILERS,
);
