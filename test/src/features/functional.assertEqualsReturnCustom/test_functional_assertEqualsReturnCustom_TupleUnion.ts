import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { TupleUnion } from "../../structures/TupleUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnCustom_TupleUnion = (): void => _test_functional_assertEqualsReturn(CustomGuardError)(
  "TupleUnion"
)(TupleUnion)(
  (p: (input: TupleUnion) => TupleUnion) => typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
)