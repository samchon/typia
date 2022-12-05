import TSON from "../../../src";
import { TagRange } from "../../structures/TagRange";
import { _test_isParse } from "../internal/_test_isParse";

export const test_isParse_TagRange = _test_isParse(
    "TagRange",
    TagRange.generate,
    (input) => TSON.isParse<TagRange>(input),
    TagRange.SPOILERS,
);
