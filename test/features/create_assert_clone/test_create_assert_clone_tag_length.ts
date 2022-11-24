import TSON from "../../../src";
import { TagLength } from "../../structures/TagLength";
import { _test_assert_clone } from "../internal/_test_assert_clone";

export const test_create_assert_clone_tag_length = _test_assert_clone(
    "length tag",
    TagLength.generate,
    TSON.createAssertClone<TagLength>(),
    TagLength.SPOILERS,
);
