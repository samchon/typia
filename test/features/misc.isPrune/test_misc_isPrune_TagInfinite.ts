import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TagInfinite } from "../../structures/TagInfinite";

export const test_misc_isPrune_TagInfinite = _test_misc_isPrune<TagInfinite>(
    TagInfinite,
)((input) => typia.misc.isPrune<TagInfinite>(input));
