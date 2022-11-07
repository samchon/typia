import TSON from "../../../src";
import { TagLength } from "../../structures/TagLength";
import { _test_assert_type } from "./../assert_type/_test_assert_type";

export const test_create_assert_type_tag_length = _test_assert_type(
    "length tag",
    TagLength.generate,
    TSON.createAssertType<TagLength>(),
    TagLength.SPOILERS,
);
