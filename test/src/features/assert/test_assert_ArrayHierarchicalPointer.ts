import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_assert_ArrayHierarchicalPointer = (): void =>
  _test_assert(TypeGuardError)(
    "ArrayHierarchicalPointer",
  )<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)((input) =>
    typia.assert<ArrayHierarchicalPointer>(input),
  );
