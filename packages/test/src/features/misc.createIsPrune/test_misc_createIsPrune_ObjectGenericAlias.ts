import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_misc_createIsPrune_ObjectGenericAlias = _test_misc_isPrune(
  "ObjectGenericAlias",
)<ObjectGenericAlias>(ObjectGenericAlias)(
  typia.misc.createIsPrune<ObjectGenericAlias>(),
);
