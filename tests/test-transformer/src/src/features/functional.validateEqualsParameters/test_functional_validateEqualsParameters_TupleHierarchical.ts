import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_functional_validateEqualsParameters_TupleHierarchical = (): void => _test_functional_validateEqualsParameters(
  "TupleHierarchical"
)(TupleHierarchical)(
  (p: (input: TupleHierarchical) => TupleHierarchical) => typia.functional.validateEqualsParameters(p),
)