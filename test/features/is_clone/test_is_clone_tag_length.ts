import TSON from "../../../src";
import { TagLength } from "../../structures/TagLength";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_tag_length = _test_is_clone(
    "length tag",
    TagLength.generate,
    (input) => TSON.isClone(input),
    TagLength.SPOILERS,
);
