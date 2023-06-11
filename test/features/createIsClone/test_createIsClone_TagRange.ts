import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { TagRange } from "../../structures/TagRange";

export const test_createIsClone_TagRange = _test_isClone(
    "TagRange",
    TagRange.generate,
    typia.createIsClone<TagRange>(),
    TagRange.SPOILERS,
);
