import TSON from "../../../src";
import { TagFormat } from "../../structures/TagFormat";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_tag_format = _test_is_clone(
    "format tag",
    TagFormat.generate,
    (input) => TSON.isClone(input),
    TagFormat.SPOILERS,
);
