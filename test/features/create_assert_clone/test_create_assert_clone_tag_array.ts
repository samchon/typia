import TSON from "../../../src";
import { TagArray } from "../../structures/TagArray";
import { _test_assert_clone } from "../internal/_test_assert_clone";

export const test_create_assert_clone_tag_array = _test_assert_clone(
    "array tag",
    TagArray.generate,
    TSON.createAssertClone<TagArray>(),
    TagArray.SPOILERS,
);
