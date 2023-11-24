import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_misc_createValidateClone_DynamicUndefined =
  _test_misc_validateClone("DynamicUndefined")<DynamicUndefined>(
    DynamicUndefined,
  )(typia.misc.createValidateClone<DynamicUndefined>());
