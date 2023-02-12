import typia from "../../../src";
import { TagRange } from "../../structures/TagRange";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_TagRange = _test_clone(
    "TagRange",
    TagRange.generate,
    typia.createClone<TagRange>(),
);