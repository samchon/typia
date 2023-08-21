import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TagDefault } from "../../structures/TagDefault";

export const test_misc_assertPrune_TagDefault = _test_misc_assertPrune(
    "TagDefault",
)<TagDefault>(TagDefault)((input) => typia.misc.assertPrune<TagDefault>(input));
