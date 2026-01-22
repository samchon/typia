import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_createAssertEqualsCustom_ArrayHierarchicalPointer =
  (): void =>
    _test_assertEquals(CustomGuardError)(
      "ArrayHierarchicalPointer",
    )<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)(
      typia.createAssertEquals<ArrayHierarchicalPointer>(
        (p) => new CustomGuardError(p),
      ),
    );
