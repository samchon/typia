import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TagType } from "../../structures/TagType";

export const test_misc_assertClone_TagType = _test_misc_assertClone(
    "TagType",
)<TagType>(TagType)((input) => typia.misc.assertClone<TagType>(input));
