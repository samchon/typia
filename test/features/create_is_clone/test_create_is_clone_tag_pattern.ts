import TSON from "../../../src";
import { TagPattern } from "../../structures/TagPattern";
import { _test_is_clone } from "./../is_clone/_test_is_clone";

export const test_create_is_clone_tag_pattern = _test_is_clone(
    "pattern tag",
    TagPattern.generate,
    TSON.createIsClone<TagPattern>(),
    TagPattern.SPOILERS,
);
