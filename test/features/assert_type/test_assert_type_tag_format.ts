import TSON from "../../../src";
import { TagFormat } from "../../structures/TagFormat";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_assert_type_tag_format = _test_assert_type(
    "format tag",
    TagFormat.generate,
    (input) => TSON.assertType(input),
    TagFormat.SPOILERS,
);
