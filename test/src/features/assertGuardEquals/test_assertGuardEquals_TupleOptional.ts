import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TupleOptional } from "../../structures/TupleOptional";

import { TypeGuardError } from "typia";

export const test_assertGuardEquals_TupleOptional = _test_assertGuardEquals(
  TypeGuardError,
)("TupleOptional")<TupleOptional>(TupleOptional)((input) =>
  typia.assertGuardEquals<TupleOptional>(input),
);
