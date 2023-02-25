import typia from "../../../src";

import { TagRange } from "../../structures/TagRange";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_assertParse_TagRange = _test_assertParse(
    "TagRange",
    TagRange.generate,
    (input) => typia.assertParse<TagRange>(input),
    TagRange.SPOILERS,
);
