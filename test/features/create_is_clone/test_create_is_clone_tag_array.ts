import TSON from "../../../src";
import { TagArray } from "../../structures/TagArray";
import { _test_is_clone } from "../internal/_test_is_clone";

export const test_create_is_clone_tag_array = _test_is_clone(
    "array tag",
    TagArray.generate,
    TSON.createIsClone<TagArray>(),
    TagArray.SPOILERS,
);
