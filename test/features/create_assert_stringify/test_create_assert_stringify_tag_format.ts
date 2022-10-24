import TSON from "../../../src";
import { TagFormat } from "../../structures/TagFormat";
import { _test_assert_stringify } from "./../assert_stringify/_test_assert_stringify";

export const test_create_assert_stringify_tag_format = _test_assert_stringify(
    "format tag",
    TagFormat.generate,
    TSON.createAssertStringify<TagFormat>(),
    TagFormat.SPOILERS,
);
