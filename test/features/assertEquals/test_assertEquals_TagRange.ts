import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TagRange } from "../../structures/TagRange";

export const test_assertEquals_TagRange = _test_assertEquals(
    "TagRange",
)<TagRange>(TagRange)((input) => typia.assertEquals<TagRange>(input));
