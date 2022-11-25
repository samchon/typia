import TSON from "../../../src";
import { TagArray } from "../../structures/TagArray";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_TagArray = _test_assert(
    "TagArray",
    TagArray.generate,
    (input) => TSON.assert(input),
    TagArray.SPOILERS,
);
