import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardEqualsCustom_ToJsonDouble =
  _test_assertGuardEquals(CustomGuardError)("ToJsonDouble")<ToJsonDouble>(
    ToJsonDouble,
  )((input) =>
    typia.assertGuardEquals<ToJsonDouble>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
