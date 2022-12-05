import TSON from "../../../src";
import { TagRange } from "../../structures/TagRange";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_assertParse_TagRange = _test_assertParse(
    "TagRange",
    TagRange.generate,
    (input) => TSON.assertParse<TagRange>(input),
    TagRange.SPOILERS,
);
