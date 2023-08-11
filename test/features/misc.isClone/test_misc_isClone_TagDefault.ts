import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { TagDefault } from "../../structures/TagDefault";

export const test_misc_isClone_TagDefault = _test_misc_isClone<TagDefault>(
    TagDefault,
)((input) => typia.misc.isClone<TagDefault>(input));
