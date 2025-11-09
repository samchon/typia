import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_assertGuardCustom_DynamicEnumeration = (): void =>
  _test_assertGuard(CustomGuardError)("DynamicEnumeration")<DynamicEnumeration>(
    DynamicEnumeration,
  )((input) =>
    typia.assertGuard<DynamicEnumeration>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
