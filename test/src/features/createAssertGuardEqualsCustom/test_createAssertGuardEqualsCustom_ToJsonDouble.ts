import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_createAssertGuardEqualsCustom_ToJsonDouble =
  _test_assertGuardEquals(CustomGuardError)("ToJsonDouble")<ToJsonDouble>(
    ToJsonDouble,
  )(
    typia.createAssertGuardEquals<ToJsonDouble>((p) => new CustomGuardError(p)),
  );
