import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_assertGuardEqualsCustom_ToJsonArray = (): void =>
  _test_assertGuardEquals(CustomGuardError)("ToJsonArray")<ToJsonArray>(
    ToJsonArray,
  )((input) =>
    typia.assertGuardEquals<ToJsonArray>(input, (p) => new CustomGuardError(p)),
  );
