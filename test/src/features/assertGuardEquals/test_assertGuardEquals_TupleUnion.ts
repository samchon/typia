import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_assertGuardEquals_TupleUnion = _test_assertGuardEquals(
  TypeGuardError,
)("TupleUnion")<TupleUnion>(TupleUnion)((input) =>
  typia.assertGuardEquals<TupleUnion>(input),
);
