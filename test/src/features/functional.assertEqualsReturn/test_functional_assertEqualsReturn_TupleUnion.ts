import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { TupleUnion } from "../../structures/TupleUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturn_TupleUnion = _test_functional_assertEqualsReturn(TypeGuardError)(
  "TupleUnion"
)(TupleUnion)(
  (p: (input: TupleUnion) => TupleUnion) => typia.functional.assertEqualsReturn(p),
)