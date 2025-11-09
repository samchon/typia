import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsParameters_TupleHierarchical = (): void => _test_functional_assertEqualsParameters(TypeGuardError)(
  "TupleHierarchical"
)(TupleHierarchical)(
  (p: (input: TupleHierarchical) => TupleHierarchical) => typia.functional.assertEqualsParameters(p),
)