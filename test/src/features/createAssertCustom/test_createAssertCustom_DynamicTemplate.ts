import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_createAssertCustom_DynamicTemplate = _test_assert(
  CustomGuardError,
)("DynamicTemplate")<DynamicTemplate>(DynamicTemplate)(
  typia.createAssert<DynamicTemplate>((p) => new CustomGuardError(p)),
);
