import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_createAssertCustom_DynamicNever = _test_assert(
  CustomGuardError,
)("DynamicNever")<DynamicNever>(DynamicNever)(
  typia.createAssert<DynamicNever>((p) => new CustomGuardError(p)),
);
