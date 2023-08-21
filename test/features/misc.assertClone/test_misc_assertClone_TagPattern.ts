import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TagPattern } from "../../structures/TagPattern";

export const test_misc_assertClone_TagPattern = _test_misc_assertClone(
    "TagPattern",
)<TagPattern>(TagPattern)((input) => typia.misc.assertClone<TagPattern>(input));
