import TSON from "../../../src";
import { TagRange } from "../../structures/TagRange";
import { _test_assert } from "./_test_assert";

export const test_assert_tag_range = _test_assert(
    "range tag",
    TagRange.generate,
    (input) => TSON.assertType(input),
    TagRange.SPOILERS,
);
