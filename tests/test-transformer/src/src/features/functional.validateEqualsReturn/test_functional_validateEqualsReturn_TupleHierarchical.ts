import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_functional_validateEqualsReturn_TupleHierarchical = (): void => _test_functional_validateEqualsReturn(
  "TupleHierarchical"
)(TupleHierarchical)(
  (p: (input: TupleHierarchical) => TupleHierarchical) => typia.functional.validateEqualsReturn(p),
)