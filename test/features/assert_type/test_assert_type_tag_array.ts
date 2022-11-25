import TSON from "../../../src";
import { TagArray } from "../../structures/TagArray";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_assert_type_tag_array = _test_assert_type(
    "array tag",
    TagArray.generate,
    (input) => TSON.assertType(input),
    TagArray.SPOILERS,
);
