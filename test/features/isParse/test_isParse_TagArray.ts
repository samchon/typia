import typia from "../../../src";
import { TagArray } from "../../structures/TagArray";
import { _test_isParse } from "../internal/_test_isParse";

export const test_isParse_TagArray = _test_isParse(
    "TagArray",
    TagArray.generate,
    (input) => typia.isParse<TagArray>(input),
    TagArray.SPOILERS,
);
