import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { TagArray } from "../../structures/TagArray";

export const test_isParse_TagArray = _test_isParse(
    "TagArray",
    TagArray.generate,
    (input) => typia.isParse<TagArray>(input),
    TagArray.SPOILERS,
);
