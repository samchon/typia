import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

import { TypeGuardError } from "typia";

export const test_assertGuardEquals_FunctionalTupleUnion =
  _test_assertGuardEquals(TypeGuardError)(
    "FunctionalTupleUnion",
  )<FunctionalTupleUnion>(FunctionalTupleUnion)((input) =>
    typia.assertGuardEquals<FunctionalTupleUnion>(input),
  );
