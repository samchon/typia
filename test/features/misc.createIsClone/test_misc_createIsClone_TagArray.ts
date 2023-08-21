import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { TagArray } from "../../structures/TagArray";

export const test_misc_isClone_TagArray = _test_misc_isClone(
    "TagArray",
)<TagArray>(TagArray)(typia.misc.createIsClone<TagArray>());
