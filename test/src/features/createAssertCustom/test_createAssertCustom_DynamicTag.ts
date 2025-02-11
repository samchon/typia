import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_createAssertCustom_DynamicTag = _test_assert(
  CustomGuardError,
)("DynamicTag")<DynamicTag>(DynamicTag)(
  typia.createAssert<DynamicTag>((p) => new CustomGuardError(p)),
);
