import TSON from "../../../src";
import { TagRange } from "../../structures/TagRange";
import { _test_assert_type } from "./_test_assert_type";

export const test_assert_type_tag_range = _test_assert_type(
    "range tag",
    TagRange.generate,
    (input) => TSON.assertType(input),
    TagRange.SPOILERS,
);
