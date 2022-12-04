import TSON from "../../../src";
import { TagRange } from "../../structures/TagRange";
import { _test_isParse } from "../internal/_test_isParse";

export const test_createIsParse_TagRange = _test_isParse(
    "TagRange",
    TagRange.generate,
    TSON.createIsParse<TagRange>(),
    TagRange.SPOILERS,
);
