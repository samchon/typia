import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionCustom_TupleHierarchical = (): void => _test_functional_assertFunction(CustomGuardError)(
  "TupleHierarchical"
)(TupleHierarchical)(
  (p: (input: TupleHierarchical) => TupleHierarchical) => typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)