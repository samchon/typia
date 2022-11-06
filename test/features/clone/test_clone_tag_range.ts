import TSON from "../../../src";
import { TagRange } from "../../structures/TagRange";
import { _test_clone } from "./_test_clone";

export const test_clone_tag_range = _test_clone(
    "range tag",
    TagRange.generate,
    (input) => TSON.clone(input),
);
