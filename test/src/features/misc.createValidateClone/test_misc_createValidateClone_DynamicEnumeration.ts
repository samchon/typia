import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_misc_createValidateClone_DynamicEnumeration =
  _test_misc_validateClone("DynamicEnumeration")<DynamicEnumeration>(
    DynamicEnumeration,
  )(typia.misc.createValidateClone<DynamicEnumeration>());
