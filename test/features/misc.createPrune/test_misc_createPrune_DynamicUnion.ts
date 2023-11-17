import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_misc_createPrune_DynamicUnion = _test_misc_prune(
  "DynamicUnion",
)<DynamicUnion>(DynamicUnion)(typia.misc.createPrune<DynamicUnion>());
