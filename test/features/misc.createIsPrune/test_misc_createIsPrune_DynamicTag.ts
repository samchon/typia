import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_misc_createIsPrune_DynamicTag = _test_misc_isPrune(
  "DynamicTag",
)<DynamicTag>(DynamicTag)(typia.misc.createIsPrune<DynamicTag>());
