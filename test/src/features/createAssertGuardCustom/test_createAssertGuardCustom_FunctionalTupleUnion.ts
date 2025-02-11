import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

export const test_createAssertGuardCustom_FunctionalTupleUnion =
  _test_assertGuard(CustomGuardError)(
    "FunctionalTupleUnion",
  )<FunctionalTupleUnion>(FunctionalTupleUnion)(
    typia.createAssertGuard<FunctionalTupleUnion>(
      (p) => new CustomGuardError(p),
    ),
  );
