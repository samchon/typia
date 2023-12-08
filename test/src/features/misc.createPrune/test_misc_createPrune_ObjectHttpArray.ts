import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_misc_createPrune_ObjectHttpArray = _test_misc_prune(
  "ObjectHttpArray",
)<ObjectHttpArray>(ObjectHttpArray)(typia.misc.createPrune<ObjectHttpArray>());
