import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

import { TypeGuardError } from "typia";

export const test_misc_assertPrune_ArrayRecursiveUnionExplicitPointer =
  _test_misc_assertPrune(TypeGuardError)(
    "ArrayRecursiveUnionExplicitPointer",
  )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)(
    (input) =>
      typia.misc.assertPrune<ArrayRecursiveUnionExplicitPointer>(input),
  );
