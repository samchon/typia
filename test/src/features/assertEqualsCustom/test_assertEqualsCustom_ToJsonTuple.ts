import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_assertEqualsCustom_ToJsonTuple = _test_assertEquals(
  CustomGuardError,
)("ToJsonTuple")<ToJsonTuple>(ToJsonTuple)((input) =>
  typia.assertEquals<ToJsonTuple>(input, (p) => new CustomGuardError(p)),
);
