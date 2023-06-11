import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { TagRange } from "../../structures/TagRange";

export const test_createIsParse_TagRange = _test_isParse(
    "TagRange",
    TagRange.generate,
    typia.createIsParse<TagRange>(),
    TagRange.SPOILERS,
);
