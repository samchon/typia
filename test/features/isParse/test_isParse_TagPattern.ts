import typia from "../../../src";

import { TagPattern } from "../../structures/TagPattern";
import { _test_isParse } from "../internal/_test_isParse";

export const test_isParse_TagPattern = _test_isParse(
    "TagPattern",
    TagPattern.generate,
    (input) => typia.isParse<TagPattern>(input),
    TagPattern.SPOILERS,
);
