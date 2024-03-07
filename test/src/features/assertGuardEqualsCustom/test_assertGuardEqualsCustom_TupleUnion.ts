import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TupleUnion } from "../../structures/TupleUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardEqualsCustom_TupleUnion = _test_assertGuardEquals(
  CustomGuardError,
)("TupleUnion")<TupleUnion>(TupleUnion)((input) =>
  typia.assertGuardEquals<TupleUnion>(input, (p) => new CustomGuardError(p)),
);
