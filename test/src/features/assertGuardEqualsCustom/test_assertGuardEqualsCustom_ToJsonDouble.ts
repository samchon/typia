import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_assertGuardEqualsCustom_ToJsonDouble = (): void =>
  _test_assertGuardEquals(CustomGuardError)("ToJsonDouble")<ToJsonDouble>(
    ToJsonDouble,
  )((input) =>
    typia.assertGuardEquals<ToJsonDouble>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
