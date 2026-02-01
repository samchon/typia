import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_functional_validateEqualsFunction_TupleUnion = (): void => _test_functional_validateEqualsFunction(
  "TupleUnion"
)(TupleUnion)(
  (p: (input: TupleUnion) => TupleUnion) => typia.functional.validateEqualsFunction(p),
)