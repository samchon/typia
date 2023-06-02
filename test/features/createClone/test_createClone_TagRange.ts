import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { TagRange } from "../../structures/TagRange";

export const test_createClone_TagRange = _test_clone(
    "TagRange",
    TagRange.generate,
    typia.createClone<TagRange>(),
);
