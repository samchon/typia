import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

export const test_assertGuardEquals_FunctionalTupleUnion = (): void =>
  _test_assertGuardEquals(TypeGuardError)(
    "FunctionalTupleUnion",
  )<FunctionalTupleUnion>(FunctionalTupleUnion)((input) =>
    typia.assertGuardEquals<FunctionalTupleUnion>(input),
  );
