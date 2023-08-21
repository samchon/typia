import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TagRange } from "../../structures/TagRange";

export const test_validateEquals_TagRange = _test_validateEquals(
    "TagRange",
)<TagRange>(TagRange)((input) => typia.validateEquals<TagRange>(input));
