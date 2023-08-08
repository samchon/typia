import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { TagPattern } from "../../structures/TagPattern";

export const test_assert_TagPattern = _test_assert(
    "TagPattern",
    TagPattern.generate,
    (input) => typia.assert(input),
    TagPattern.SPOILERS,
);
