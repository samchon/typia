import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_misc_createValidatePrune_ArrayRecursiveUnionExplicitPointer =
  _test_misc_validatePrune(
    "ArrayRecursiveUnionExplicitPointer",
  )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)(
    typia.misc.createValidatePrune<ArrayRecursiveUnionExplicitPointer>(),
  );
