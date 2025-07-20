import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_createAssertGuardEquals_ArrayHierarchical = (): void =>
  _test_assertGuardEquals(TypeGuardError)(
    "ArrayHierarchical",
  )<ArrayHierarchical>(ArrayHierarchical)(
    typia.createAssertGuardEquals<ArrayHierarchical>(),
  );
