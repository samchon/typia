import TSON from "../../../src";
import { TagPattern } from "../../structures/TagPattern";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_tag_pattern = _test_is_clone(
    "pattern tag",
    TagPattern.generate,
    (input) => TSON.isClone(input),
    TagPattern.SPOILERS,
);
