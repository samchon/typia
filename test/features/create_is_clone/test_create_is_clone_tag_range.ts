import TSON from "../../../src";
import { TagRange } from "../../structures/TagRange";
import { _test_is_clone } from "../internal/_test_is_clone";

export const test_create_is_clone_tag_range = _test_is_clone(
    "range tag",
    TagRange.generate,
    TSON.createIsClone<TagRange>(),
    TagRange.SPOILERS,
);
