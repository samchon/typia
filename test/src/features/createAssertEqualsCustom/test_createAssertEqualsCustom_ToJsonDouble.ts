import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_createAssertEqualsCustom_ToJsonDouble = _test_assertEquals(
  CustomGuardError,
)("ToJsonDouble")<ToJsonDouble>(ToJsonDouble)(
  typia.createAssertEquals<ToJsonDouble>((p) => new CustomGuardError(p)),
);
