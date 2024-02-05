import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_misc_createPrune_ObjectDescription = _test_misc_prune(
  "ObjectDescription",
)<ObjectDescription>(ObjectDescription)(
  typia.misc.createPrune<ObjectDescription>(),
);
