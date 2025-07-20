import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_assertGuardCustom_ToJsonTuple = (): void =>
  _test_assertGuard(CustomGuardError)("ToJsonTuple")<ToJsonTuple>(ToJsonTuple)(
    (input) =>
      typia.assertGuard<ToJsonTuple>(input, (p) => new CustomGuardError(p)),
  );
