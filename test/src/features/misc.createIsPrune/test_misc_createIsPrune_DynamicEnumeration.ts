import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_misc_createIsPrune_DynamicEnumeration = (): void =>
  _test_misc_isPrune("DynamicEnumeration")<DynamicEnumeration>(
    DynamicEnumeration,
  )(typia.misc.createIsPrune<DynamicEnumeration>());
