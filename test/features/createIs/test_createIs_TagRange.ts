import TSON from "../../../src";
import { TagRange } from "../../structures/TagRange";
import { _test_is } from "../internal/_test_is";

export const test_createIs_TagRange = _test_is(
    "TagRange",
    TagRange.generate,
    TSON.createIs<TagRange>(),
    TagRange.SPOILERS,
);
