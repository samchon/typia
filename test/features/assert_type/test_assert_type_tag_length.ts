import TSON from "../../../src";
import { TagLength } from "../../structures/TagLength";
import { _test_assert_type } from "./_test_assert_type";

export const test_assert_type_tag_length = _test_assert_type(
    "length tag",
    TagLength.generate,
    (input) => TSON.assertType(input),
    TagLength.SPOILERS,
);
