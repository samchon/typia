import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { TagRange } from "../../structures/TagRange";

export const test_createAssertParse_TagRange = _test_assertParse(
    "TagRange",
    TagRange.generate,
    typia.createAssertParse<TagRange>(),
    TagRange.SPOILERS,
);
