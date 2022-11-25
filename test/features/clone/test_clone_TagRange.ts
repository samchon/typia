import TSON from "../../../src";
import { TagRange } from "../../structures/TagRange";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_TagRange = _test_clone(
    "TagRange",
    TagRange.generate,
    (input) => TSON.clone(input),
);
