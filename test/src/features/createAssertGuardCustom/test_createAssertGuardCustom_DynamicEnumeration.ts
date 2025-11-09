import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_createAssertGuardCustom_DynamicEnumeration = (): void =>
  _test_assertGuard(CustomGuardError)("DynamicEnumeration")<DynamicEnumeration>(
    DynamicEnumeration,
  )(
    typia.createAssertGuard<DynamicEnumeration>((p) => new CustomGuardError(p)),
  );
