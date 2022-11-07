import TSON from "../../../src";
import { TagFormat } from "../../structures/TagFormat";
import { _test_assert_type } from "./../assert_type/_test_assert_type";

export const test_create_assert_type_tag_format = _test_assert_type(
    "format tag",
    TagFormat.generate,
    TSON.createAssertType<TagFormat>(),
    TagFormat.SPOILERS,
);
