import typia from "../../../src";
import { TagNaN } from "../../structures/TagNaN";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_TagNaN = _test_assert(
    "TagNaN",
    TagNaN.generate,
    (input) => typia.assert(input),
    TagNaN.SPOILERS,
);
