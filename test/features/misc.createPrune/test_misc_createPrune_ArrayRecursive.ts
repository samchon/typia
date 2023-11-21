import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_misc_createPrune_ArrayRecursive = _test_misc_prune(
  "ArrayRecursive",
)<ArrayRecursive>(ArrayRecursive)(typia.misc.createPrune<ArrayRecursive>());
