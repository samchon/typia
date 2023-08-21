import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TagArray } from "../../structures/TagArray";

export const test_misc_assertClone_TagArray = _test_misc_assertClone(
    "TagArray",
)<TagArray>(TagArray)(typia.misc.createAssertClone<TagArray>());
