import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_createAssertGuardEqualsCustom_ArrayHierarchicalPointer =
  (): void =>
    _test_assertGuardEquals(CustomGuardError)(
      "ArrayHierarchicalPointer",
    )<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)(
      typia.createAssertGuardEquals<ArrayHierarchicalPointer>(
        (p) => new CustomGuardError(p),
      ),
    );
