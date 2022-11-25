import TSON from "../../../src";
import { TagRange } from "../../structures/TagRange";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_assert_stringify_tag_range = _test_assert_stringify(
    "range tag",
    TagRange.generate,
    (input) => TSON.assertStringify(input),
    TagRange.SPOILERS,
);
