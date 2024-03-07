import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_DynamicTemplate = _test_assertGuard(
  CustomGuardError,
)("DynamicTemplate")<DynamicTemplate>(DynamicTemplate)(
  typia.createAssertGuard<DynamicTemplate>((p) => new CustomGuardError(p)),
);
