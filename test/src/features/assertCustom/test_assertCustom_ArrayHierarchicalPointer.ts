import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_ArrayHierarchicalPointer = _test_assert(
  CustomGuardError,
)("ArrayHierarchicalPointer")<ArrayHierarchicalPointer>(
  ArrayHierarchicalPointer,
)((input) =>
  typia.assert<ArrayHierarchicalPointer>(input, (p) => new CustomGuardError(p)),
);
