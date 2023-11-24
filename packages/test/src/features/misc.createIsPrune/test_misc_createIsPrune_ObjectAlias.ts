import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_misc_createIsPrune_ObjectAlias = _test_misc_isPrune(
  "ObjectAlias",
)<ObjectAlias>(ObjectAlias)(typia.misc.createIsPrune<ObjectAlias>());
