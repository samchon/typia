import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_assertGuardEqualsCustom_ArrayHierarchical = (): void =>
  _test_assertGuardEquals(CustomGuardError)(
    "ArrayHierarchical",
  )<ArrayHierarchical>(ArrayHierarchical)((input) =>
    typia.assertGuardEquals<ArrayHierarchical>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
