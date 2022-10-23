import TSON from "../../../src";
import { TagLength } from "../../structures/TagLength";
import { _test_assert } from "./../assert/_test_assert";

export const test_create_assert_tag_length = _test_assert(
    "length tag",
    TagLength.generate,
    TSON.createAssertType<TagLength>(),
    TagLength.SPOILERS,
);
