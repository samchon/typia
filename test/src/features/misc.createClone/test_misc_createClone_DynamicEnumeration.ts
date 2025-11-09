import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_misc_createClone_DynamicEnumeration = (): void =>
  _test_misc_clone("DynamicEnumeration")<DynamicEnumeration>(
    DynamicEnumeration,
  )(typia.misc.createClone<DynamicEnumeration>());
