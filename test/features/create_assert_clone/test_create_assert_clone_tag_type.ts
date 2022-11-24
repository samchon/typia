import TSON from "../../../src";
import { TagType } from "../../structures/TagType";
import { _test_assert_clone } from "../internal/_test_assert_clone";

export const test_create_assert_clone_tag_type = _test_assert_clone(
    "type tag",
    TagType.generate,
    TSON.createAssertClone<TagType>(),
    TagType.SPOILERS,
);
