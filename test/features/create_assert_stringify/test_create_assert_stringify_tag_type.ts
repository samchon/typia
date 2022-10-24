import TSON from "../../../src";
import { TagType } from "../../structures/TagType";
import { _test_assert_stringify } from "./../assert_stringify/_test_assert_stringify";

export const test_create_assert_stringify_tag_type = _test_assert_stringify(
    "type tag",
    TagType.generate,
    TSON.createAssertStringify<TagType>(),
    TagType.SPOILERS,
);
