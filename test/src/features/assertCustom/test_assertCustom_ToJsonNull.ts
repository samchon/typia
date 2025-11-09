import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_assertCustom_ToJsonNull = (): void =>
  _test_assert(CustomGuardError)("ToJsonNull")<ToJsonNull>(ToJsonNull)(
    (input) => typia.assert<ToJsonNull>(input, (p) => new CustomGuardError(p)),
  );
