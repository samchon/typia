import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_assertGuardCustom_DynamicUndefined = (): void =>
  _test_assertGuard(CustomGuardError)("DynamicUndefined")<DynamicUndefined>(
    DynamicUndefined,
  )((input) =>
    typia.assertGuard<DynamicUndefined>(input, (p) => new CustomGuardError(p)),
  );
