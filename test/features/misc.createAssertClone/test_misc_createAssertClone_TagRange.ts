import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TagRange } from "../../structures/TagRange";

export const test_misc_assertClone_TagRange = _test_misc_assertClone(
    "TagRange",
)<TagRange>(TagRange)(typia.misc.createAssertClone<TagRange>());
