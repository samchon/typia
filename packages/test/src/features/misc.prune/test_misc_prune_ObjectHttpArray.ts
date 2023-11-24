import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_misc_prune_ObjectHttpArray = _test_misc_prune(
  "ObjectHttpArray",
)<ObjectHttpArray>(ObjectHttpArray)((input) =>
  typia.misc.prune<ObjectHttpArray>(input),
);
