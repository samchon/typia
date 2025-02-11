import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_createAssertCustom_DynamicUnion = _test_assert(
  CustomGuardError,
)("DynamicUnion")<DynamicUnion>(DynamicUnion)(
  typia.createAssert<DynamicUnion>((p) => new CustomGuardError(p)),
);
