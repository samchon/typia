import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_misc_createAssertPrune_DynamicTag = _test_misc_assertPrune(
    "DynamicTag",
)<DynamicTag>(DynamicTag)(typia.misc.createAssertPrune<DynamicTag>());
