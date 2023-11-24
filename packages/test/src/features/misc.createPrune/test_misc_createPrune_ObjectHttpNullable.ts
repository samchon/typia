import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_misc_createPrune_ObjectHttpNullable = _test_misc_prune(
  "ObjectHttpNullable",
)<ObjectHttpNullable>(ObjectHttpNullable)(
  typia.misc.createPrune<ObjectHttpNullable>(),
);
