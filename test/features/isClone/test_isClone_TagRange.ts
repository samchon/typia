import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { TagRange } from "../../structures/TagRange";

export const test_isClone_TagRange = _test_isClone(
    "TagRange",
    TagRange.generate,
    (input) => typia.isClone<TagRange>(input),
    TagRange.SPOILERS,
);
