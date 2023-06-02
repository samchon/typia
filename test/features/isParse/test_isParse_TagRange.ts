import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { TagRange } from "../../structures/TagRange";

export const test_isParse_TagRange = _test_isParse(
    "TagRange",
    TagRange.generate,
    (input) => typia.isParse<TagRange>(input),
    TagRange.SPOILERS,
);
