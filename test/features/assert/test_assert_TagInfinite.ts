import typia from "../../../src";
import { TagInfinite } from "../../structures/TagInfinite";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_TagInfinite = _test_assert(
    "TagInfinite",
    TagInfinite.generate,
    (input) => typia.assert(input),
    TagInfinite.SPOILERS,
);