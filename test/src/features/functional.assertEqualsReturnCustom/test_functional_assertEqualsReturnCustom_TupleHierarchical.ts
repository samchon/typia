import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnCustom_TupleHierarchical = (): void => _test_functional_assertEqualsReturn(CustomGuardError)(
  "TupleHierarchical"
)(TupleHierarchical)(
  (p: (input: TupleHierarchical) => TupleHierarchical) => typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
)