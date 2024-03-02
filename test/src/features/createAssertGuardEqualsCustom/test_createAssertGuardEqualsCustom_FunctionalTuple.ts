import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_createAssertGuardEqualsCustom_FunctionalTuple =
  _test_assertGuardEquals(CustomGuardError)("FunctionalTuple")<FunctionalTuple>(
    FunctionalTuple,
  )(
    typia.createAssertGuardEquals<FunctionalTuple>(
      (p) => new CustomGuardError(p),
    ),
  );
