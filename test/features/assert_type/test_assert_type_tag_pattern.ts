import TSON from "../../../src";
import { TagPattern } from "../../structures/TagPattern";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_assert_type_tag_pattern = _test_assert_type(
    "pattern tag",
    TagPattern.generate,
    (input) => TSON.assertType(input),
    TagPattern.SPOILERS,
);
