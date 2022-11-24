import TSON from "../../../src";
import { TagArray } from "../../structures/TagArray";
import { _test_clone } from "../internal/_test_clone";

export const test_create_clone_tag_array = _test_clone(
    "array tag",
    TagArray.generate,
    TSON.createClone<TagArray>(),
);
