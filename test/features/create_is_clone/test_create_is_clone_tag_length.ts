import TSON from "../../../src";
import { TagLength } from "../../structures/TagLength";
import { _test_is_clone } from "../internal/_test_is_clone";

export const test_create_is_clone_tag_length = _test_is_clone(
    "length tag",
    TagLength.generate,
    TSON.createIsClone<TagLength>(),
    TagLength.SPOILERS,
);
