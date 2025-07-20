import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_assertGuardCustom_DynamicNever = (): void =>
  _test_assertGuard(CustomGuardError)("DynamicNever")<DynamicNever>(
    DynamicNever,
  )((input) =>
    typia.assertGuard<DynamicNever>(input, (p) => new CustomGuardError(p)),
  );
