import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { TagPattern } from "../../structures/TagPattern";

export const test_misc_isClone_TagPattern = _test_misc_isClone<TagPattern>(
    TagPattern,
)((input) => typia.misc.isClone(input));
