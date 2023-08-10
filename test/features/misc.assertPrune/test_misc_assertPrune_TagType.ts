import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TagType } from "../../structures/TagType";

export const test_misc_assertPrune_TagType = _test_misc_assertPrune<TagType>(
    TagType,
)((input) => typia.misc.assertPrune<TagType>(input));
