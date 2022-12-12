import typia from "../../../src";
import { TagArray } from "../../structures/TagArray";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_assertParse_TagArray = _test_assertParse(
    "TagArray",
    TagArray.generate,
    (input) => typia.assertParse<TagArray>(input),
    TagArray.SPOILERS,
);