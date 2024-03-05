import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_assertEqualsCustom_ArrayHierarchicalPointer =
  _test_assertEquals(CustomGuardError)(
    "ArrayHierarchicalPointer",
  )<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)((input) =>
    typia.assertEquals<ArrayHierarchicalPointer>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
