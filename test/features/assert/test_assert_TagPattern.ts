import TSON from "../../../src";
import { TagPattern } from "../../structures/TagPattern";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_TagPattern = _test_assert(
    "TagPattern",
    TagPattern.generate,
    (input) => TSON.assert(input),
    TagPattern.SPOILERS,
);
