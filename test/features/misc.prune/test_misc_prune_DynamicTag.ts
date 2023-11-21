import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_misc_prune_DynamicTag = _test_misc_prune(
  "DynamicTag",
)<DynamicTag>(DynamicTag)((input) => typia.misc.prune<DynamicTag>(input));
