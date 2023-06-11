import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { TagArray } from "../../structures/TagArray";

export const test_assert_TagArray = _test_assert(
    "TagArray",
    TagArray.generate,
    (input) => typia.assert(input),
    TagArray.SPOILERS,
);
