import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_assertEqualsCustom_FunctionalTuple = _test_assertEquals(
  CustomGuardError,
)("FunctionalTuple")<FunctionalTuple>(FunctionalTuple)((input) =>
  typia.assertEquals<FunctionalTuple>(input, (p) => new CustomGuardError(p)),
);
