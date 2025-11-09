import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_assertGuardCustom_ToJsonDouble = (): void =>
  _test_assertGuard(CustomGuardError)("ToJsonDouble")<ToJsonDouble>(
    ToJsonDouble,
  )((input) =>
    typia.assertGuard<ToJsonDouble>(input, (p) => new CustomGuardError(p)),
  );
