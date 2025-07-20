import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_misc_createAssertCloneCustom_ArrayHierarchicalPointer =
  (): void =>
    _test_misc_assertClone(CustomGuardError)(
      "ArrayHierarchicalPointer",
    )<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)(
      typia.misc.createAssertClone<ArrayHierarchicalPointer>(
        (p) => new CustomGuardError(p),
      ),
    );
