import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_createAssertGuardEqualsCustom_ArrayHierarchical =
  _test_assertGuardEquals(CustomGuardError)(
    "ArrayHierarchical",
  )<ArrayHierarchical>(ArrayHierarchical)(
    typia.createAssertGuardEquals<ArrayHierarchical>(
      (p) => new CustomGuardError(p),
    ),
  );
