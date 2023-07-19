import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TagNaN } from "../../structures/TagNaN";

export const test_misc_assertPrune_TagNaN = _test_misc_assertPrune<TagNaN>(
    TagNaN,
)(typia.misc.createAssertPrune<TagNaN>());
