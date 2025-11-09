import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_misc_validatePrune_ArrayHierarchicalPointer = (): void =>
  _test_misc_validatePrune(
    "ArrayHierarchicalPointer",
  )<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)((input) =>
    typia.misc.validatePrune<ArrayHierarchicalPointer>(input),
  );
