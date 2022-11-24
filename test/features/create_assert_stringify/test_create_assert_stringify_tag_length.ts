import TSON from "../../../src";
import { TagLength } from "../../structures/TagLength";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_create_assert_stringify_tag_length = _test_assert_stringify(
    "length tag",
    TagLength.generate,
    TSON.createAssertStringify<TagLength>(),
    TagLength.SPOILERS,
);
