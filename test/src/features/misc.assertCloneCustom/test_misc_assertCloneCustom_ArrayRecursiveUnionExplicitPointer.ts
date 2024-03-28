import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_misc_assertCloneCustom_ArrayRecursiveUnionExplicitPointer =
  _test_misc_assertClone(CustomGuardError)(
    "ArrayRecursiveUnionExplicitPointer",
  )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)(
    (input) =>
      typia.misc.assertClone<ArrayRecursiveUnionExplicitPointer>(
        input,
        (p) => new CustomGuardError(p),
      ),
  );
