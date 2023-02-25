import typia from "../../../src";
import { TagRange } from "../../structures/TagRange";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_TagRange = _test_assertEquals(
    "TagRange",
    TagRange.generate,
    (input) => typia.assertEquals(input),
);
