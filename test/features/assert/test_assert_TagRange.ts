import TSON from "../../../src";
import { TagRange } from "../../structures/TagRange";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_TagRange = _test_assert(
    "TagRange",
    TagRange.generate,
    (input) => TSON.assert(input),
    TagRange.SPOILERS,
);