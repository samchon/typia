import TSON from "../../../src";
import { TagArray } from "../../structures/TagArray";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_tag_array = _test_is_clone(
    "array tag",
    TagArray.generate,
    (input) => TSON.isClone(input),
    TagArray.SPOILERS,
);
