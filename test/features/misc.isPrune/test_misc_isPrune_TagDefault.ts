import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TagDefault } from "../../structures/TagDefault";

export const test_misc_isPrune_TagDefault = _test_misc_isPrune<TagDefault>(
    TagDefault,
)((input) => typia.misc.isPrune<TagDefault>(input));
