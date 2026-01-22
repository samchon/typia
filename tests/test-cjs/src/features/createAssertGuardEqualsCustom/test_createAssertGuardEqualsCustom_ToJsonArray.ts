import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_createAssertGuardEqualsCustom_ToJsonArray = (): void =>
  _test_assertGuardEquals(CustomGuardError)("ToJsonArray")<ToJsonArray>(
    ToJsonArray,
  )(typia.createAssertGuardEquals<ToJsonArray>((p) => new CustomGuardError(p)));
