import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_functional_validateFunction_TupleHierarchical = (): void => _test_functional_validateFunction(
  "TupleHierarchical"
)(TupleHierarchical)(
  (p: (input: TupleHierarchical) => TupleHierarchical) => typia.functional.validateFunction(p),
)