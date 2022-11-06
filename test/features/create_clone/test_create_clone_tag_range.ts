import TSON from "../../../src";
import { TagRange } from "../../structures/TagRange";
import { _test_clone } from "./../clone/_test_clone";

export const test_create_clone_tag_range = _test_clone(
    "range tag",
    TagRange.generate,
    TSON.createClone<TagRange>(),
);
