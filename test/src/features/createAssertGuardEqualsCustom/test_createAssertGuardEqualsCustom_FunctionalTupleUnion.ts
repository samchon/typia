import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

export const test_createAssertGuardEqualsCustom_FunctionalTupleUnion =
  _test_assertGuardEquals(CustomGuardError)(
    "FunctionalTupleUnion",
  )<FunctionalTupleUnion>(FunctionalTupleUnion)(
    typia.createAssertGuardEquals<FunctionalTupleUnion>(
      (p) => new CustomGuardError(p),
    ),
  );
