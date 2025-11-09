import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { TupleUnion } from "../../structures/TupleUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsParameters_TupleUnion = (): void => _test_functional_assertEqualsParameters(TypeGuardError)(
  "TupleUnion"
)(TupleUnion)(
  (p: (input: TupleUnion) => TupleUnion) => typia.functional.assertEqualsParameters(p),
)