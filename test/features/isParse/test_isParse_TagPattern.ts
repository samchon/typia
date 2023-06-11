import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { TagPattern } from "../../structures/TagPattern";

export const test_isParse_TagPattern = _test_isParse(
    "TagPattern",
    TagPattern.generate,
    (input) => typia.isParse<TagPattern>(input),
    TagPattern.SPOILERS,
);
