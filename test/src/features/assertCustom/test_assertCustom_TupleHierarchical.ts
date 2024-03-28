import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_assertCustom_TupleHierarchical = _test_assert(
  CustomGuardError,
)("TupleHierarchical")<TupleHierarchical>(TupleHierarchical)((input) =>
  typia.assert<TupleHierarchical>(input, (p) => new CustomGuardError(p)),
);
