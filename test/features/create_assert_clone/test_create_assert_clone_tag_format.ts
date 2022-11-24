import TSON from "../../../src";
import { TagFormat } from "../../structures/TagFormat";
import { _test_assert_clone } from "../internal/_test_assert_clone";

export const test_create_assert_clone_tag_format = _test_assert_clone(
    "format tag",
    TagFormat.generate,
    TSON.createAssertClone<TagFormat>(),
    TagFormat.SPOILERS,
);
