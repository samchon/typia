import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_functional_validateEqualsReturn_TupleUnion = (): void => _test_functional_validateEqualsReturn(
  "TupleUnion"
)(TupleUnion)(
  (p: (input: TupleUnion) => TupleUnion) => typia.functional.validateEqualsReturn(p),
)