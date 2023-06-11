import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { TagRange } from "../../structures/TagRange";

export const test_createAssertClone_TagRange = _test_assertClone(
    "TagRange",
    TagRange.generate,
    typia.createAssertClone<TagRange>(),
    TagRange.SPOILERS,
);
