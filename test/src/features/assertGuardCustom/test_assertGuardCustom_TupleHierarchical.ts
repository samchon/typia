import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_TupleHierarchical = _test_assertGuard(
  CustomGuardError,
)("TupleHierarchical")<TupleHierarchical>(TupleHierarchical)((input) =>
  typia.assertGuard<TupleHierarchical>(input, (p) => new CustomGuardError(p)),
);
