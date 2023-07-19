import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { TagRange } from "../../structures/TagRange";

export const test_misc_isClone_TagRange = _test_misc_isClone<TagRange>(
    TagRange,
)((input) => typia.misc.isClone(input));
