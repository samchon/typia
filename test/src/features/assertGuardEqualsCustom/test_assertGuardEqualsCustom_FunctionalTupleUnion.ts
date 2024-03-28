import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

export const test_assertGuardEqualsCustom_FunctionalTupleUnion =
  _test_assertGuardEquals(CustomGuardError)(
    "FunctionalTupleUnion",
  )<FunctionalTupleUnion>(FunctionalTupleUnion)((input) =>
    typia.assertGuardEquals<FunctionalTupleUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
