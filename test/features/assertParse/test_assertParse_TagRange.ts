import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { TagRange } from "../../structures/TagRange";

export const test_assertParse_TagRange = _test_assertParse(
    "TagRange",
    TagRange.generate,
    (input) => typia.assertParse<TagRange>(input),
    TagRange.SPOILERS,
);
