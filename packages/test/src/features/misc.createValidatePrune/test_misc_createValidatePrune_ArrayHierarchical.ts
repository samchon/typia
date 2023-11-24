import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_misc_createValidatePrune_ArrayHierarchical =
  _test_misc_validatePrune("ArrayHierarchical")<ArrayHierarchical>(
    ArrayHierarchical,
  )(typia.misc.createValidatePrune<ArrayHierarchical>());
