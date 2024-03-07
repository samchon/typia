import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertEqualsCustom_FunctionalTuple = _test_assertEquals(
  CustomGuardError,
)("FunctionalTuple")<FunctionalTuple>(FunctionalTuple)(
  typia.createAssertEquals<FunctionalTuple>((p) => new CustomGuardError(p)),
);
