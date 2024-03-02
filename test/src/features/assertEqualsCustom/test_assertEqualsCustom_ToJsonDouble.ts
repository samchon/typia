import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_assertEqualsCustom_ToJsonDouble = _test_assertEquals(
  CustomGuardError,
)("ToJsonDouble")<ToJsonDouble>(ToJsonDouble)((input) =>
  typia.assertEquals<ToJsonDouble>(input, (p) => new CustomGuardError(p)),
);
