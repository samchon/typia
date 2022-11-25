import TSON from "../../../src";
import { TagRange } from "../../structures/TagRange";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_TagRange = _test_assertClone(
    "TagRange",
    TagRange.generate,
    TSON.createAssertClone<TagRange>(),
    TagRange.SPOILERS,
);