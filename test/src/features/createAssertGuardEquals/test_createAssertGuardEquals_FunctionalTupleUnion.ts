import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

export const test_createAssertGuardEquals_FunctionalTupleUnion =
  _test_assertGuardEquals(TypeGuardError)(
    "FunctionalTupleUnion",
  )<FunctionalTupleUnion>(FunctionalTupleUnion)(
    typia.createAssertGuardEquals<FunctionalTupleUnion>(),
  );
