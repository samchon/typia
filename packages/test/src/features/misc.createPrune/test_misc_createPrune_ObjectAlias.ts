import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_misc_createPrune_ObjectAlias = _test_misc_prune(
  "ObjectAlias",
)<ObjectAlias>(ObjectAlias)(typia.misc.createPrune<ObjectAlias>());
