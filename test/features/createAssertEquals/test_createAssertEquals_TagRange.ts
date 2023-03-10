import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TagRange } from "../../structures/TagRange";

export const test_createAssertEquals_TagRange = _test_assertEquals(
    "TagRange",
    TagRange.generate,
    typia.createAssertEquals<TagRange>(),
);
