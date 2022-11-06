import TSON from "../../../src";
import { TagPattern } from "../../structures/TagPattern";
import { _test_assert_clone } from "./../assert_clone/_test_assert_clone";

export const test_create_assert_clone_tag_pattern = _test_assert_clone(
    "pattern tag",
    TagPattern.generate,
    TSON.createAssertClone<TagPattern>(),
    TagPattern.SPOILERS,
);
