import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { TagRange } from "../../structures/TagRange";

export const test_clone_TagRange = _test_clone(
    "TagRange",
    TagRange.generate,
    (input) => typia.clone<TagRange>(input),
);
